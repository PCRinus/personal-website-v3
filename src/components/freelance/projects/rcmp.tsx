import { useTranslations } from 'next-intl';

import FreelanceTemplate from '../freelance-template';

export default function Rcmp() {
  const t = useTranslations('freelance.rcmp');
  const tags = useTranslations('technologies');
  const keys = ['c-sharp', 'dotnet', 'docker', 'mysql', 'angular', 'typescript', 'tailwind'] as const;

  return (
    <FreelanceTemplate
      title={t('title')}
      period={t('period')}
      description={t('description')}
      tags={keys.map((key) => tags(key))}
    />
  );
}
