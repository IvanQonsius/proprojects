// src/app/[locale]/layout.tsx
import * as NextIntl from 'next-intl';

console.log('NextIntl import:', NextIntl);

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params if necessary (Next.js may provide it sync, but safer to await for latest versions)
  const { locale } = params;
  console.log('Locale received:', locale);

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../../messages/en.json`)).default;
  }

  console.log('Loaded messages:', messages);

  return (
    // DO NOT add <html> or <body> here to avoid nesting errors
    <NextIntl.NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntl.NextIntlClientProvider>
  );
}
