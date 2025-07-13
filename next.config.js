// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';
import intlConfig from './next-intl.config.js';

export default createNextIntlPlugin('./src/i18n/request.ts')({
  // Next.js built-in i18n support:
  i18n: {
    locales: intlConfig.locales,
    defaultLocale: intlConfig.defaultLocale
  },
  reactStrictMode: true
});
