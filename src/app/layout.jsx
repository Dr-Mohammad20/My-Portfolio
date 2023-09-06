'use client';
// Styles
import './globals.scss';
// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
// Context
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <div className="MainContainer">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
