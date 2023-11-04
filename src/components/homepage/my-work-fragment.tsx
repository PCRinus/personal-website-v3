import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import looties from '../../../public/looties.svg';
import rcmp from '../../../public/rcmp.svg';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';

type MyWorkFragmentProps = {
  className?: string;
};

export default function MyWorkFragment({ className }: MyWorkFragmentProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>My work</Typography>

      <Card className="bg-inherit dark:text-white">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={rcmp} alt="RCMP logo" width={32} height={32} />
            RCMP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <strong>RCMP</strong> (Research Center Management Platform) is a platform built for <strong>UPT</strong> to
          manage and market their research center and the services they provide
        </CardContent>
      </Card>

      <Card className="bg-inherit dark:text-white">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-3">
            <Image src={looties} alt="looties logo" width={96} height={32} />
            looties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <strong>looties</strong> is a brand new NFT game and marketplace built on the Solana blockchain where ou can
          win and trade your NFTs
        </CardContent>
      </Card>

      <Link href="/experience">
        <Typography variant={'h3'}>
          See all the projects I have worked on <ChevronRight className="mb-1 inline-flex self-center" />
        </Typography>
      </Link>
    </div>
  );
}
