import { cn } from '@/lib/utils';

import { Typography } from '../ui/typography';

type ContactFragmentProps = {
  className?: string;
};

export default function ContactFragment({ className }: ContactFragmentProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>Contact me</Typography>
    </div>
  );
}
