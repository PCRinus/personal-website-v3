import { GeistSans } from 'geist/font';
import type { Metadata } from 'next';
import './globals.css';
import { notFound } from 'next/navigation';

import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Mircea Casapu | Home',
  description: 'Personal website',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} className="px-6 py-8">
      <body
        className={cn(
          GeistSans.className,
          'flex flex-col bg-gradient-to-br from-violet-800 via-blue-900 to-gray-900 bg-no-repeat dark:text-slate-200',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
