
import { useTranslations } from "next-intl";

import ExperienceTemplate from "../experience-template";


export default function UnifiedPost() {
  const t = useTranslations('experience.unifiedpost');
  const tags = useTranslations('technologies');
  const keys = ['angular', 'typescript', 'ruby-on-rails', 'postgres', 'gcp'] as const;

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
