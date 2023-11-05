import { ExternalLink } from "lucide-react";

import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";

export default function Newpharma() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Typography variant={'h3'}>Full Stack Engineer</Typography>

        <Typography variant={'h4'}>
          <a href="https://www.newpharma-development.ro/" target="_blank">
            Newpharma <ExternalLink className="mb-1 inline-flex h-4 w-4 self-center" />
          </a>
        </Typography>
      </div>

      <div>
        <Typography variant={'p'} className="font-semibold text-slate-300">
          Sept 2020 - Sept 2021
        </Typography>
        <Typography variant={'p'} className="font-medium text-slate-300">
          Full time employment · Hybrid
        </Typography>
      </div>

      <Typography variant={'p'} className="text-slate-300">
        Deliver high-quality, reliable and thoroughly tested new features for our users, which were clinics and
        hospitals in Germany. Provide technical guidance and leadership to other engineers on the team. Work closely
        with the product stakeholders
      </Typography>

      <div className="flex flex-wrap gap-2">
        <Badge>Typescript</Badge>
        <Badge>Javascript</Badge>
        <Badge>Node.js</Badge>
        <Badge>React</Badge>
        <Badge>Tailwind</Badge>
        <Badge>AWS</Badge>
      </div>
    </div>
  );
}
