// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';

export default createNextIntlPlugin('./src/i18n/request.ts')({
  reactStrictMode: true,
  // no i18n property here in App Router
});
