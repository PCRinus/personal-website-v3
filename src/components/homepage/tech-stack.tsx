import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import nodejsLogo from '../../../public/nodejs.svg';
import tsLogo from '../../../public/typescript.svg';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';

export type TechStackProps = {
  className?: string;
};

export default function TechStack({ className }: TechStackProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>Tech stack</Typography>

      <Card className="bg-inherit">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-4">
            <Image src={tsLogo} alt="Typescript logo" width={32} height={32} />
            Typescript
          </CardTitle>
          <CardDescription>My current language of choice when building any web application</CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-inherit">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Image src={nodejsLogo} alt="Node.js logo" width={32} height={32} />
            Node.js
          </CardTitle>
          <CardDescription>My preferred backend runtime when building full stack applications</CardDescription>
        </CardHeader>
      </Card>

      <Link href="/tech-stack">
        <Typography variant={'h3'}>
          See all the technologies I work with <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
