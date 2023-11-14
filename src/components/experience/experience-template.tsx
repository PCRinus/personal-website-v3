import { ExternalLink } from 'lucide-react';

import { ExperienceData } from '@/app/[locale]/experience/page';

import { Badge } from '../ui/badge';
import { Typography } from '../ui/typography';

export type GenericTemplateProps = ExperienceData;

export default function ExperienceTemplate({
  title,
  company,
  period,
  location,
  type,
  description,
  link,
  tags,
}: GenericTemplateProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div>
          <Typography variant={'p'} className="font-semibold">
            {period}
          </Typography>
          <Typography variant={'p'} className="font-medium">
            {type} · {location}
          </Typography>
        </div>

        <Typography variant={'h3'}>{title}</Typography>

        <Typography variant={'h4'}>
          <a href={link} target="_blank">
            {company} <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
          </a>
        </Typography>
      </div>

      <Typography variant={'p'}>{description}</Typography>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
