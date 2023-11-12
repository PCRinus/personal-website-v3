import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { cn } from '@/lib/utils';

import looties from '../../../public/looties.svg';
import rcmp from '../../../public/rcmp.svg';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';

type FreelanceProps = {
  className?: string;
};

export default function Freelance({ className }: FreelanceProps) {
  const t = useTranslations('freelance');

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>{t('header')}</Typography>

      <Card className="bg-inherit dark:border-slate-200 dark:text-slate-200">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={rcmp} alt="RCMP logo" width={32} height={32} />
            {t('rcmp.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {t.rich('rcmp.content-card.description', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </CardContent>
      </Card>

      <Card className="bg-inherit dark:border-slate-200 dark:text-slate-200">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={looties} alt="looties logo" width={96} height={32} />
            {t('looties.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {t.rich('looties.content-card.description', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </CardContent>
      </Card>

      <Link href="/freelance">
        <Typography variant={'h3'}>
          {t('see-more')} <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
