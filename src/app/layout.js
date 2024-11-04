import "./globals.css";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'],      // Choose subset to optimize for
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
