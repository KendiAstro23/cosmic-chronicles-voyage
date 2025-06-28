import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagicalBook3D from '../components/MagicalBook3D';
import SiteNav from '../components/SiteNav';

const Education = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-2 md:p-0 overflow-hidden">
      <SiteNav />
      {/* Navigation */}
      <motion.div
        className="fixed top-2 md:top-6 left-2 md:left-6 z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <motion.div
            className="bg-amber-900/60 backdrop-blur-lg rounded-full p-2 md:p-3 border-2 border-yellow-600/70 hover:bg-amber-800/70 transition-colors shadow-2xl"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-amber-200" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute top-2 md:top-6 left-1/2 transform -translate-x-1/2 z-40 px-2 md:px-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="font-cinzel text-xl sm:text-2xl md:text-4xl lg:text-6xl text-amber-100 drop-shadow-2xl text-center">
          Explorer's Journal
        </h1>
        <p className="font-medieval text-xs sm:text-sm md:text-lg lg:text-xl text-cyan-200 text-center mt-1 md:mt-2 drop-shadow-lg">
          Chronicles of Learning & Discovery
        </p>
      </motion.div>

      {/* The 3D Magical Book */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <MagicalBook3D />
      </motion.div>
    </div>
  );
};

export default Education;
