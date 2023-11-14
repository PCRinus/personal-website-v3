import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import Looties from '@/components/freelance/projects/looties';
import Rcmp from '@/components/freelance/projects/rcmp';
import { Typography } from '@/components/ui/typography';

export type FreelanceData = {
  title: string;
  period: string;
  description: string | ReactNode;
  link?: string;
  tags: string[];
};

export default function Freelance() {
  const t = useTranslations('freelance');

  return (
    <div className="flex flex-col gap-4">
      <Typography className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent" variant={'h1'}>
        {t('header')}
      </Typography>

      <Looties />
      <Rcmp />
    </div>
  );
}
