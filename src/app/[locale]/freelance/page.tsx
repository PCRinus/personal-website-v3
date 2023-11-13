import { useTranslations } from "next-intl";
import { ReactNode } from "react";

import Looties from "@/components/freelance/projects/looties";
import Rcmp from "@/components/freelance/projects/rcmp";
import { Typography } from "@/components/ui/typography";

export type FreelanceData = {
  title: string;
  period: string;
  description: string | ReactNode;
  link?: string
  tags: string[];
};

export default function Freelance() {
  const t = useTranslations('freelance');

  return (
    <div className="flex flex-col gap-12">
      <Typography variant={'h1'}>{t('header')}</Typography>

      <Looties />
      <Rcmp />
    </div>
  );
}
