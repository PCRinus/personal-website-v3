'use client';

import { useForm as useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Typography } from '../ui/typography';

type ContactFragmentProps = {
  className?: string;
};

export default function Contact({ className }: ContactFragmentProps) {
  const t = useTranslations('contact');
  const [serverState, sendToFormspree] = useFormspree(process.env.NEXT_PUBLIC_FORMSPREE_KEY ?? '');
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: t('form.email.errors.required') })
      .email({ message: t('form.email.errors.valid') }),
    fullName: z.string().min(3, { message: t('form.fullName.error') }),
    message: z.string().min(10, { message: t('form.message.error') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
    },
  });

  useEffect(() => {
    if (serverState.succeeded) {
      form.reset();
      setSubmitted(true);
    }
  }, [serverState, form]);

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Typography variant={'h2'}>{t('header')}</Typography>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendToFormspree)} className="space-y-4 text-black dark:text-slate-200">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('form.email.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.email.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('form.fullName.label')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.fullName.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{t('form.message.label')}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t('form.message.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!!Object.keys(form.formState.errors).length || serverState.submitting}>
            {t('form.submit')}
          </Button>

          {submitted && (
            <Typography variant="p" className="dark:text-slate-200">
              {t('form.success')}
            </Typography>
          )}
        </form>
      </Form>
    </div>
  );
}
