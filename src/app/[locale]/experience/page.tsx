import { ReactNode } from 'react';

import Doctari from '@/components/experience/jobs/doctari';
import Endava from '@/components/experience/jobs/endava';
import Newpharma from '@/components/experience/jobs/newpharma';
import Nokia from '@/components/experience/jobs/nokia';
import UnifiedPost from '@/components/experience/jobs/unifiedpost';
import { Typography } from '@/components/ui/typography';

export type ExperienceData = {
  title: string;
  company: string;
  period: string;
  type?: string;
  location?: string;
  description: string | ReactNode;
  link?: string
  tags: string[];
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-12">
      <Typography variant={'h1'}>My work</Typography>

      <Doctari />
      <Endava />
      <UnifiedPost />
      <Newpharma />
      <Nokia />
    </div>
  );
}
