import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Contact from '@/components/homepage/contact';
import Freelance from '@/components/homepage/freelance';
// import TechStack from '@/components/homepage/tech-stack';
import MyWork from '@/components/homepage/my-work';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  const commonTranslations = useTranslations('common');
  const t = useTranslations('home');

  return (
    <div className="flex flex-col gap-4">
      <Typography className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent" variant={'h1'}>
        {commonTranslations('name')}
      </Typography>
      <Typography className="text-lg font-light" variant={'h2'}>
        {`${commonTranslations('current-job')} `}
        <a href="https://www.doctari.ro/" target="_blank">
          {commonTranslations('current-employer')} <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
        </a>
      </Typography>

      <div className="flex gap-4">
        <a className="flex grow" href="https://github.com/PCRinus" target="_blank">
          <Button type="button" variant={'default'} className="flex grow gap-2 text-lg">
            <Github />
            {t('buttons.github')}
          </Button>
        </a>
        <a className="flex grow" href="https://www.linkedin.com/in/mircea-casapu/" target="_blank">
          <Button type="button" variant={'default'} className="flex grow gap-2 text-lg">
            <Linkedin />
            {t('buttons.linkedin')}
          </Button>
        </a>
      </div>

      {/* <TechStack className="mt-4" /> */}

      <MyWork className="mt-4" />
      <Freelance className="mt-4" />
      <Contact className="mt-4" />
    </div>
  );
}
