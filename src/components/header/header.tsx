'use client';

import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Link, usePathname } from '@/i18n';

import LanguageToggle from './language-toggle';
import ThemeToggle from './theme-toggle';

export default function Header() {
  const [showGoBackButton, setShowGoBackButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return pathname !== '/' ? setShowGoBackButton(true) : setShowGoBackButton(false);
  }, [pathname]);

  return (
    <>
      <header className="bg-background/15 supports-[backdrop-filter]:bg-background/15 sticky top-0 flex items-center justify-between px-4 py-4 backdrop-blur md:px-10">
        <div className="flex items-center gap-[2px]">
          {showGoBackButton && (
            <Link href="/" className="contents">
              <ChevronLeft />
              <p className="text-lg">Go back</p>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
