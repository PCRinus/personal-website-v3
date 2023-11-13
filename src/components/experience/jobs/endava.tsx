import { useTranslations } from 'next-intl';

import ExperienceTemplate from '../experience-template';

export default function Endava() {
  const t = useTranslations('experience.endava');
  const tags = useTranslations('technologies');
  const keys = ['typescript', 'javascript', 'nodejs', 'aws', 'nestjs', 'microservices', 'graphql', 'gcp'] as const;

  return (
    <ExperienceTemplate
      title={t('title')}
      company={t('company')}
      period={t('period')}
      type={t('type')}
      location={t('location')}
      description={t('description')}
      tags={keys.map((key) => tags(key))}
    />
  );
}
