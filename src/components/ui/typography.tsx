import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const typographyVariants = cva([], {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export type TypographyProps = HTMLAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof typographyVariants> & {
    text: string;
  };

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, variant, text, ...props }, ref) => {
  const Comp = variant ? variant : 'p';

  return (
    <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props}>
      {text}
    </Comp>
  );
});
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
