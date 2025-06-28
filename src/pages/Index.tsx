import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';

const StarField = () => {
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Space background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/space_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      />
      {/* Overlay gradients removed for clear video */}
      <StarField />
      {/* Animated cosmic elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(119, 255, 198, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};

const IntroVideo = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // Simulating video duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center text-white space-y-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <div className="text-2xl">👩‍🚀</div>
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Welcome, Explorer
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Prepare for a journey through space and time...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const NavigationMenu = () => {
  const menuItems = [
    { name: 'Welcome', path: '/', icon: <img src="/green.png" alt="Welcome" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
    { name: 'My Journal', path: '/education', icon: <img src="/EJ-removebg-preview.png" alt="My Journal" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
    { name: 'My Missions', path: '/projects', icon: <img src="/astromars.png" alt="My Missions" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
    { name: 'My Archives', path: '/resume', icon: <span style={{ fontSize: 28 }}>📎</span> },
    { name: 'Safari HQ', path: '/contact', icon: <img src="/earth1.png" alt="Safari HQ" style={{ width: 28, height: 28, objectFit: 'contain' }} /> },
  ];

  return (
    <motion.nav
      className="fixed top-8 right-8 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className="flex items-center space-x-3 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
              >
                <span className="text-2xl flex items-center justify-center">{item.icon}</span>
                <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowContent(true), 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      
      <AnimatePresence>
        {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {showContent && (
        <>
          <NavigationMenu />
          <SiteNav />
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
            <motion.div
              className="space-y-8 max-w-4xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Space Explorer
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Journey through my cosmic portfolio where technology meets storytelling, 
                and every project is a new world to discover.
              </motion.p>

              <motion.div
                className="flex flex-col items-center space-y-4 mt-12"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <p className="text-gray-400 text-sm">Begin your journey</p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-8 h-8 text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
