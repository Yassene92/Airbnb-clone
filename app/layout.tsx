import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import SignUpModal from './components/modals/SignUpModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone is a place to share your travel experiences.',
};

const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default async function  RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <SignUpModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
