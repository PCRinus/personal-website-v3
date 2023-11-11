'use client';

import { useState } from 'react';

import LanguageToggle from './language-toggle';
import ThemeToggle from './theme-toggle';
import Drawer from '../ui/drawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background/15 supports-[backdrop-filter]:bg-background/15 sticky top-0 flex items-center justify-end gap-6 px-6 py-4 backdrop-blur">
        <LanguageToggle />
        <ThemeToggle />
      </header>

      <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
