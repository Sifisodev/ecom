import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, ShoppingCart, User, Settings } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function DesktopMenu() {
  const location = useLocation();
  const { user } = useAuthStore();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: ShoppingBag, label: 'Shop' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart' },
    { to: user ? '/admin' : '/login', icon: user ? Settings : User, label: user ? 'Admin' : 'Login' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <div className="bg-white/80 dark:bg-dark-100/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-purple-500">
              SIFISO
            </Link>
            <nav className="flex items-center gap-8">
              {links.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="relative px-4 py-2"
                >
                  {location.pathname === to && (
                    <motion.div
                      layoutId="desktop-bubble"
                      className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                    <Icon className="w-5 h-5" />
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}