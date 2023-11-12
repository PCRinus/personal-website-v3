'use client';

import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import { useEffect, useState } from 'react';

import LanguageToggle from './language-toggle';
import ThemeToggle from './theme-toggle';
import Drawer from '../ui/drawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGoBackButton, setShowGoBackButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return pathname !== '/' ? setShowGoBackButton(true) : setShowGoBackButton(false);
  }, [pathname]);

  return (
    <>
      <header className="bg-background/15 supports-[backdrop-filter]:bg-background/15 sticky top-0 flex items-center justify-between px-4 py-4 backdrop-blur">
        <div className="flex items-center gap-[2px]">
          {showGoBackButton && (
            <Link href="/" className="contents">
              <ChevronLeft />
              <p className="text-lg">Go back</p>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-6">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
