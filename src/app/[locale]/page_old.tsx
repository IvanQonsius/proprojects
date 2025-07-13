// src/app/[locale]/page.tsx
'use client';

import * as NextIntl from 'next-intl';

export default function HomePage() {
  const t = NextIntl.useTranslations();

  return <h1>{t('salutation')}</h1>;
}
