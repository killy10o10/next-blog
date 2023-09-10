import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Blog',
  description: 'Full stack blog applicatrion with nextjs and tailwincss',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-blue-gray-900 dark:text-blue-gray-400 dark:bg-blue-gray-600 transition-all duration-1000 ease-linear`}>
        <div className="xl:flex items-center justify-center p-3">
          <div>
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
