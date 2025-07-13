import type { NextRequest } from 'next/server';

export function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split('/');
  const locale = segments[1];
  return ['en', 'es'].includes(locale) ? locale : undefined;
}
