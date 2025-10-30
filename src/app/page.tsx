import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ThemeSwitcher />
      <h1 className="font-geist-sans text-sm">aas.dev</h1>
    </div>
  );
}
