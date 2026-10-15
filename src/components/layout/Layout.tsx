import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on every route navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main id="main-content" style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
