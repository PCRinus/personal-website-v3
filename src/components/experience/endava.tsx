import { ExternalLink } from 'lucide-react';

import { Badge } from '../ui/badge';
import { Typography } from '../ui/typography';

export default function Endava() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Typography variant={'h3'}>Full Stack Engineer</Typography>

        <Typography variant={'h4'}>
          <a href="https://www.endava.com/en/" target="_blank">
            Endava <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
          </a>
        </Typography>
      </div>

      <div>
        <Typography variant={'p'} className="font-semibold text-slate-300">
          Jan 2022 - Sept 2022
        </Typography>
        <Typography variant={'p'} className="font-medium text-slate-300">
          Full time employment · Remote
        </Typography>
      </div>

      <Typography variant={'p'} className="text-slate-300">
        Work for a client in the insurance industry to migrate a legacy monolithic express.js application deployed on
        Google Cloud to a microservices architecture app build with Nest.js and deployed on AWS. Architect and build a
        GraphQL API to be used by the frontend team. Guide junior developers on the team and help them grow.
      </Typography>

      <div className="flex flex-wrap gap-2">
        <Badge>Typescript</Badge>
        <Badge>Javascript</Badge>
        <Badge>Nest.js</Badge>
        <Badge>Microservices</Badge>
        <Badge>GraphQL</Badge>
        <Badge>AWS</Badge>
        <Badge>Google Cloud Platform</Badge>
      </div>
    </div>
  );
}
