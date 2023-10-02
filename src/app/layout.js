import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter, EB_Garamond } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import AuthProvider from './providers/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' });

export const metadata = {
  title: 'Next Blog',
  description: 'Full stack blog applicatrion with nextjs and tailwincss',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body
          className={`${garamond.variable} font-sans bg-white text-blue-gray-900 dark:text-blue-gray-400 dark:bg-blue-gray-600 transition-all duration-500 ease-linear`}>
          <div className='p-3'>
            <div className='max-w-[1400px] mx-auto'>
              <Navbar />
              {children}
            </div>
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
