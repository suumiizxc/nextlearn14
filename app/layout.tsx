import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NextTopLoader from 'nextjs-toploader';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextTopLoader />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}