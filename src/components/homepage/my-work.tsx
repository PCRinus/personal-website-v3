import { ChevronRight } from 'lucide-react';
import Link from 'next-intl/link';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';

type MyWorkProps = {
  className?: string;
};

export default function MyWork({ className }: MyWorkProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>ASDF</Typography>

      <Card className="bg-inherit dark:border-slate-200 dark:text-slate-200">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">ASDF</CardTitle>
        </CardHeader>
        <CardContent>ASDF</CardContent>
      </Card>

      <Link href="/experience">
        <Typography variant={'h3'}>
          ASDF <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
