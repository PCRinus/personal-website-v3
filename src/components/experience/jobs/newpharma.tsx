import { useTranslations } from 'next-intl';

import ExperienceTemplate from '../experience-template';

export default function Newpharma() {
  const t = useTranslations('experience.newpharma');
  const tags = useTranslations('technologies');
  const keys = ['php', 'symfony', 'mariadb', 'jquery'] as const;

  return (
    <ExperienceTemplate
      title={t('title')}
      company={t('company')}
      period={t('period')}
      type={t('type')}
      location={t('location')}
      description={t.rich('description', {
        br: () => <br />,
      })}
      tags={keys.map((key) => tags(key))}
    />
  );
}
