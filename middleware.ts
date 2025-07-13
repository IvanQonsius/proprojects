// middleware.ts
import { NextResponse } from 'next/server';
import config from './next-intl.config.js/index.js';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore static files, API routes, _next etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(.*)$/.test(pathname)
  ) {
    return;
  }

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${config.defaultLocale}`, request.url));
  }

  // If locale already present, continue
  if (config.locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return;
  }

  // Redirect to default locale if missing
  return NextResponse.redirect(new URL(`/${config.defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
