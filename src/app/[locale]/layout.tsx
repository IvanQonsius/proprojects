// src/app/[locale]/layout.tsx
import type { ReactNode } from 'react';
import LocaleProviderClient from './LocaleProviderClient';

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = (
    await import(`../../../messages/${locale}.json`)
  ).default;

  return (
    <LocaleProviderClient locale={locale} messages={messages}>
      {children}
    </LocaleProviderClient>
  );
}
