import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';

import { Typography } from '../ui/typography';

type MyWorkProps = {
  className?: string;
};

export default function MyWork({ className }: MyWorkProps) {
  const t = useTranslations('freelance');

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>{t('header')}</Typography>
    </div>
  );
}
