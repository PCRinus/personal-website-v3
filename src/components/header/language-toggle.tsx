import { Languages } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function LanguageToggle() {
  const t = useTranslations('language-toggle');

  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: 'ro' | 'en') => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size='icon'>
          <Languages />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>{t('en')}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('ro')}>{t('ro')}</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
