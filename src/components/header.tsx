import { Menu } from 'lucide-react';

import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-950 p-2 text-white">
      <p>Mircea Casapu</p>
      <Button variant={'ghost'}>
        <Menu />
      </Button>
    </header>
  );
}
