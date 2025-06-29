import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Welcome', path: '/', icon: <img src="/green.png" alt="Welcome" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Journal', path: '/education', icon: <img src="/EJ-removebg-preview.png" alt="My Journal" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Missions', path: '/projects', icon: <img src="/astromars.png" alt="My Missions" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Archives', path: '/resume', icon: <span style={{ fontSize: 28 }}>📎</span> },
  { name: 'Contact HQ', path: '/contact', icon: <img src="/earth1.png" alt="Contact HQ" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
];

const SiteNav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hide nav on landing page
  if (location.pathname === '/') return null;

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/10 flex items-center space-x-4 shadow-lg">
          {navItems.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group ${location.pathname === item.path ? 'bg-white/10' : ''}`}
              >
                <span className="text-2xl flex items-center justify-center">{item.icon}</span>
                <span className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-black/30 backdrop-blur-lg rounded-full p-3 border border-white/10 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-16 right-0 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg min-w-64"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.div
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group ${location.pathname === item.path ? 'bg-white/10' : ''}`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-2xl flex items-center justify-center">{item.icon}</span>
                      <span className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SiteNav; 