import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Welcome', path: '/', icon: <img src="/green.png" alt="Welcome" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Journal', path: '/education', icon: <img src="/EJ-removebg-preview.png" alt="My Journal" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Missions', path: '/projects', icon: <img src="/astromars.png" alt="My Missions" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  { name: 'My Archives', path: '/resume', icon: <span style={{ fontSize: 28 }}>📎</span> },
  { name: 'Safari HQ', path: '/contact', icon: <img src="/earth1.png" alt="Safari HQ" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
];

const SiteNav = () => {
  const location = useLocation();
  // Hide nav on landing page
  if (location.pathname === '/') return null;
  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
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
  );
};

export default SiteNav; 