import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone is a place to share your travel experiences.',
};

const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
