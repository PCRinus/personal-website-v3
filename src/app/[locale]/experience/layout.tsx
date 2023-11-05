import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mircea Casapu | Experience',
  description: 'Personal website',
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
