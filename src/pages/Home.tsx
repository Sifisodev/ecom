import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCartStore } from '../stores/cartStore';

export default function Home() {
  const addToCart = useCartStore(state => state.addItem);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to SIFISO
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the future of fashion
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
            alt="Fashion Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">New Collection</h2>
              <p className="mb-4">Explore our latest arrivals</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-purple-100 dark:bg-dark-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Free Shipping</h3>
            <p className="text-gray-600 dark:text-gray-300">
              On all orders over R500
            </p>
          </div>
          <div className="bg-pink-100 dark:bg-dark-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Member Discount</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get 10% off on your first purchase
            </p>
          </div>
          <div className="bg-blue-100 dark:bg-dark-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-2 dark:text-white">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're here to help you
            </p>
          </div>
        </motion.div>
      </div>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="flex items-center gap-2 text-purple-500 hover:text-purple-600"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-700 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              SIFISO
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The future of fashion is here.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: info@sifiso.com</li>
              <li>Phone: 061 103 9989</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300 mt-8">
          © {new Date().getFullYear()} SIFISO. All rights reserved.
        </div>
      </footer>
    </div>
  );
}