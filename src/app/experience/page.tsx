import Doctari from '@/components/experience/doctari';
import Endava from '@/components/experience/endava';
import Newpharma from '@/components/experience/newpharma';
import Nokia from '@/components/experience/nokia';
import UnifiedPost from '@/components/experience/unifiedpost';
import { Typography } from '@/components/ui/typography';

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
