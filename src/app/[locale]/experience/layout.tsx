import { getTranslator } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslator(locale, 'experience');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
