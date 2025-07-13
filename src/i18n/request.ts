// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  return {
    locale: requestLocale,
    messages: (await import(`../../messages/${requestLocale}.json`)).default
  };
});
