// src/app/[locale]/page.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        {t('salutation')}
      </h1>
      <p className="text-lg text-gray-700">
        {t('welcomeMessage', { app: 'ProProjects' })}
      </p>
    </div>
  );
}
