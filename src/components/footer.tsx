import { useTranslations } from 'next-intl';

import { Typography } from './ui/typography';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="flex flex-shrink-0 items-center px-6 py-4">
      <Typography variant={'p'} className="text-center">
        {t.rich('text', {
          tailwind: (chunks) => (
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
          nextjs: (chunks) => (
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
          vercel: (chunks) => (
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          ),
        })}
      </Typography>
    </footer>
  );
}
