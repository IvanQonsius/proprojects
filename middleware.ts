// middleware.ts
import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config.js';

// @ts-ignore: next-intl has proper typings but older TS may misread them
export default createMiddleware({
locales: intlConfig.locales,
defaultLocale: intlConfig.defaultLocale
});

export const config = {
  // apply to everything except Next's internals and API routes
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico|api).*)']
};
