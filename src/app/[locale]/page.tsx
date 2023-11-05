import { pick } from 'lodash';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from 'next-intl';

import Contact from '@/components/homepage/contact';
import MyWork from '@/components/homepage/my-work';
import TechStack from '@/components/homepage/tech-stack';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  const commonTranslations = useTranslations('common');
  const t = useTranslations('home');
  const locale = useLocale();
  const translations = useMessages();

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
        <Github />
        <Linkedin />
      </div>

      <TechStack className="mt-4" />

      <MyWork className="mt-4" />

      <NextIntlClientProvider locale={locale} messages={pick(translations!, 'contact')}>
        <Contact className="mt-4" />
      </NextIntlClientProvider>
    </div>
  );
}
