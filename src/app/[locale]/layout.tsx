import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import Footer from '@/components/footer';
import Header from '@/components/header/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslator(locale, 'home');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const translations = useMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          GeistSans.className,
          'flex flex-col bg-gradient-to-b from-orange-300 via-orange-100 to-zinc-200 bg-no-repeat dark:bg-gradient-to-b dark:from-violet-800 dark:via-blue-900 dark:to-gray-900 dark:text-slate-200',
        )}
      >
        <NextIntlClientProvider locale={locale} messages={translations}>
          <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
            <Header />
            <main className="flex-1 px-6 py-4">{children}</main>
            <Toaster />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
