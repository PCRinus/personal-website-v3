import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ro'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}.json`)).default,
}));

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
