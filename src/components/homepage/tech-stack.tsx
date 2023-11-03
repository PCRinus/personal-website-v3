import Image from 'next/image';

import { cn } from '@/lib/utils';

import javascriptLogo from '../../../public/javascript.svg';
import nodejsLogo from '../../../public/nodejs.svg';
import tsLogo from '../../../public/typescript.svg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';

export type TechStackProps = {
  className?: string;
};

export default function TechStack({ className }: TechStackProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>Tech stack</Typography>

      <Card className="bg-inherit dark:text-white">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-4">
            <Image src={tsLogo} alt="Typescript logo" width={32} height={32} />
            Typescript
          </CardTitle>
          <CardDescription className="text-white">
            My current language of choice when building full stack applications
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card className="bg-inherit dark:text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Image src={javascriptLogo} alt="Javascript logo" width={32} height={32} />
            Javascript
          </CardTitle>
          <CardDescription className="text-white">
            My current language of choice when building full stack applications
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card className="bg-inherit dark:text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Image src={nodejsLogo} alt="Node.js logo" width={32} height={32} />
            Node.js
          </CardTitle>
          <CardDescription className="text-white">
            My current language of choice when building full stack applications
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
