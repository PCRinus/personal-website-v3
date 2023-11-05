import { ExternalLink, Github, Linkedin } from 'lucide-react';

import ContactFragment from '@/components/homepage/contact-fragment';
import MyWorkFragment from '@/components/homepage/my-work-fragment';
import TechStackFragment from '@/components/homepage/tech-stack-fragment';
import { Typography } from '@/components/ui/typography';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={'h1'}>Mircea Casapu</Typography>
      <Typography className="text-lg font-light" variant={'h2'}>
        Senior Full Stack Engineer at{' '}
        <a href="https://www.doctari.ro/" target="_blank">
          doctari <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
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

      <TechStackFragment className="mt-4" />

      <MyWorkFragment className="mt-4" />

      <ContactFragment className="mt-4" />
    </div>
  );
}
