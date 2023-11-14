import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { cn } from '@/lib/utils';

import { Typography } from '../ui/typography';

type MyWorkProps = {
  className?: string;
};

export default function MyWork({ className }: MyWorkProps) {
  const t = useTranslations('my-work');

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>{t('header')}</Typography>

      <Typography variant={'p'}>{t('content')}</Typography>

      <Link href="/experience">
        <Typography variant={'h3'}>
          {t('see-more')} <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
