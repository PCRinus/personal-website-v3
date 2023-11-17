import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'freelance' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default function FreelanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
