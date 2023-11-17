import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Typography } from './ui/typography';
import glow from '../../public/glow.svg'

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative flex flex-shrink-0 items-center justify-center p-6">
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

      <Image className='absolute bottom-0 left-0 w-full -z-10' src={glow} alt='footer glow image'/>
    </footer>
  );
}
