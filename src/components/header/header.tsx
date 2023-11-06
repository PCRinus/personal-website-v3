'use client';

import { useState } from 'react';

import ThemeToggle from './theme-toggle';
import Drawer from '../ui/drawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 flex items-center justify-end bg-background/15 px-6 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/15">
        <div>
          <ThemeToggle />
        </div>
      </header>

      <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
