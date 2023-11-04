'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from './ui/button';
import Drawer from './ui/drawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 flex items-center justify-end text-white">
        <Button variant={'ghost'} onClick={toggleMenu} className='p-0'>
          <Menu/>
        </Button>
      </header>

      <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
