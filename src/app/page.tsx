import { Github, Linkedin } from 'lucide-react';

import TechStack from '@/components/homepage/tech-stack';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={'h1'}>Mircea Casapu</Typography>
      <Typography className="text-lg font-light" variant={'h2'}>
        Full Stack Engineer at{' '}
        <a href="https://www.doctari.ro/" target="_blank" className="underline">
          doctari
        </a>
      </Typography>
      <Typography variant={'p'}>
        I am a product oriented developers who builds web applications and products to help businesses and start-ups
        deliver value to their customers.
      </Typography>

      <div className="mt-4 flex gap-6">
        <Github />
        <Linkedin />
      </div>

      <TechStack className="mt-4" />
    </div>
  );
}
