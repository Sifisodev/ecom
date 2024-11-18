import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';
import Navigation from './Navigation';
import DesktopMenu from './DesktopMenu';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <ThemeToggle />
      </div>
      <DesktopMenu />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 pb-20 pt-20 md:pt-28"
      >
        <Outlet />
      </motion.main>
      <Navigation />
    </div>
  );
}