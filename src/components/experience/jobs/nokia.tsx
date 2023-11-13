import { useTranslations } from "next-intl";

import ExperienceTemplate from "../experience-template";

export default function Nokia() {
  const t = useTranslations('experience.nokia');
  const tags = useTranslations('technologies');
  const keys = ['javascript', 'jquery', 'dotnet-framework', 'ms-sql-server'] as const;

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
