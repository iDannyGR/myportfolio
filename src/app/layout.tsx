import '@/assets/globals.css';
import { Maven_Pro } from 'next/font/google';

const inter = Maven_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'My Port',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
