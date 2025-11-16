import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ansh Chaurasiya - The Developer\'s Odyssey',
  description: 'Full Stack Developer & AI/ML Engineer crafting immersive digital experiences',
  keywords: ['Full Stack Developer', 'AI/ML Engineer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Ansh Chaurasiya' }],
  openGraph: {
    title: 'Ansh Chaurasiya - Portfolio',
    description: 'Full Stack Developer & AI/ML Engineer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
