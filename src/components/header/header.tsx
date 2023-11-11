'use client';

import { useState } from 'react';

import ThemeToggle from './theme-toggle';
import Drawer from '../ui/drawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background/15 supports-[backdrop-filter]:bg-background/15 sticky top-0 flex items-center justify-end px-6 py-4 backdrop-blur">
        <ThemeToggle />
      </header>

      <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
