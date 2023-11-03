import { Menu } from 'lucide-react';

import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex items-center justify-end text-white">
      <Button variant={'ghost'}>
        <Menu />
      </Button>
    </header>
  );
}
