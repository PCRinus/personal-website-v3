'use client';

import { FC } from 'react';

import { cn } from '@/lib/utils';

export type DrawerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      className={cn(
        'fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out',
        isOpen
          ? 'translate-x-0 opacity-100 transition-opacity duration-500'
          : 'translate-x-full opacity-0 transition-all delay-500',
      )}
    >
      <section
        className={cn(
          'delay-400 absolute right-0 h-full w-3/4 transform bg-blue-900 shadow-xl transition-all duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <article className="relative flex flex-col">
          <header className="p-4 text-lg font-bold">Header</header>
        </article>
      </section>
      <section
        className="h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </aside>
  );
};

export default Drawer;
