// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';
import intlConfig from './next-intl.config.js';

export default createNextIntlPlugin('./src/i18n/request.ts')({
  // standard Next.js config can go here
  i18n: {
    locales: intlConfig.locales,
    defaultLocale: intlConfig.defaultLocale
  },
  reactStrictMode: true,
  // ...any other Next.js settings
});
