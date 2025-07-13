// src/app/[locale]/LocaleProviderClient.tsx
'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function LocaleProviderClient({
  children,
  locale,
  messages
}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
