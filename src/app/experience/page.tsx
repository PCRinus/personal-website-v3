
import Doctari from '@/components/experience/doctari';
import Endava from '@/components/experience/endava';
import { Typography } from '@/components/ui/typography';

export default function Experience() {
  return (
    <div className="flex flex-col gap-10">
      <Typography variant={'h1'}>My work</Typography>

      <Doctari />
      <Endava />
    </div>
  );
}
