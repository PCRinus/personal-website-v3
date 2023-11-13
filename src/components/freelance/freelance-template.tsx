import { FreelanceData } from '@/app/[locale]/freelance/page';

import { Badge } from '../ui/badge';
import { Typography } from '../ui/typography';

export type GenericTemplateProps = FreelanceData;

export default function FreelanceTemplate({ title, period, description, tags }: GenericTemplateProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div>
          <Typography variant={'p'} className="font-semibold text-slate-300">
            {period}
          </Typography>
        </div>

        <Typography variant={'h3'}>{title}</Typography>
      </div>

      <Typography variant={'p'} className="text-slate-300">
        {description}
      </Typography>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
