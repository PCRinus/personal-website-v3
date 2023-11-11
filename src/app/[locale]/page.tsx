import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Contact from '@/components/homepage/contact';
import MyWork from '@/components/homepage/my-work';
import TechStack from '@/components/homepage/tech-stack';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  const commonTranslations = useTranslations('common');
  const t = useTranslations('home');

  return (
    <div className="flex flex-col gap-4">
      <Typography variant={'h1'}>{commonTranslations('name')}</Typography>
      <Typography className="text-lg font-light" variant={'h2'}>
        {`${commonTranslations('current-job')} `}
        <a href="https://www.doctari.ro/" target="_blank">
          {commonTranslations('current-employer')} <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
        </a>
      </Typography>
      <Typography variant={'p'}>{t('content')}</Typography>

      <div className="mt-4 flex gap-6">
        <a href="https://github.com/PCRinus" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/mircea-casapu/" target="_blank">
          <Linkedin />
        </a>
      </div>

      <TechStack className="mt-4" />

      <MyWork className="mt-4" />
      <Contact className="mt-4" />
    </div>
  );
}
