import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, ShoppingCart, User, Settings } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function Navigation() {
  const location = useLocation();
  const { user } = useAuthStore();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: ShoppingBag, label: 'Shop' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart' },
    { to: user ? '/admin' : '/login', icon: user ? Settings : User, label: user ? 'Admin' : 'Login' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden">
      <div className="flex justify-around items-center h-16">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className="relative flex flex-col items-center justify-center w-full h-full"
          >
            {location.pathname === to && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className={`w-6 h-6 ${
              location.pathname === to 
                ? 'text-purple-500' 
                : 'text-gray-500 dark:text-gray-400'
            }`} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}