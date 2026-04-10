import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '$ECEK - The Bossiest Pekingese in Crypto',
  description: 'Move over, doges. ECEK is here. Small, sassy, and ready to send your portfolio to the moon.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-pink selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
