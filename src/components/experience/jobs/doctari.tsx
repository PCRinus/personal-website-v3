import { useTranslations } from 'next-intl';

import ExperienceTemplate from '../experience-template';

export default function Doctari() {
  const t = useTranslations('experience.doctari');
  const tags = useTranslations('technologies');
  const keys = ['typescript', 'javascript', 'nodejs', 'react', 'tailwind', 'aws'] as const;

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
