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

      <Card className="bg-inherit dark:text-white">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={rcmp} alt="RCMP logo" width={32} height={32} />
            RCMP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <strong>RCMP</strong> (Research Center Management Platform) is a platform built for <strong>UPT</strong> to
          manage and market their research center and the services they provide
        </CardContent>
      </Card>

      <Card className="bg-inherit dark:text-white">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={looties} alt="looties logo" width={96} height={32} />
            looties
          </CardTitle>
        </CardHeader>
        <CardContent>
          {t.rich('looties.content-card.description', {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </CardContent>
      </Card>

      <Link href="/experience">
        <Typography variant={'h3'}>
          {t('see-more')} <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
