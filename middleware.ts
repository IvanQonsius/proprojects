Use the built-in middleware factory instead of rolling your own:

ts
Copy
Edit
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config.js';

export default createMiddleware({
  locales: intlConfig.locales,
  defaultLocale: intlConfig.defaultLocale
});

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico|api).*)']
};