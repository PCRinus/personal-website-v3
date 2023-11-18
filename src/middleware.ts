import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(request: NextRequest) {
  const cspHeader = 'connect-src https://vitals.vercel-insights.com'
  const contentSecurityPolicyHeaderValue = cspHeader
  .replace(/\s{2,}/g, ' ')
  .trim()

  request.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'de'],
    defaultLocale
  });
  const response = handleI18nRouting(request);

  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
