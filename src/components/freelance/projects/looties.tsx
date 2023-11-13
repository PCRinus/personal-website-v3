import { useTranslations } from 'next-intl';

import FreelanceTemplate from '../freelance-template';

export default function Looties() {
  const t = useTranslations('freelance.looties');
  const tags = useTranslations('technologies');
  const keys = [
    'nestjs',
    'nodejs',
    'react',
    'typescript',
    'tailwind',
    'docker',
    'digital-ocean',
    'solana',
    'web3',
  ] as const;

  return (
    <FreelanceTemplate
      title={t('title')}
      period={t('period')}
      description={t.rich('description', {
        br: () => <br />,
      })}
      tags={keys.map((key) => tags(key))}
    />
  );
}
