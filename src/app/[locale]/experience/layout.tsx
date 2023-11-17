import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'experience' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
