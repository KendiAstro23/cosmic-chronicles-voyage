import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SiteNav from '../components/SiteNav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', message: '' });
      console.log("Message sent to Safari HQ:", formData);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative overflow-hidden">
      <SiteNav />
      {/* Savannah background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/20 via-green-300/30 to-green-600/40" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat-x bg-bottom" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20c20-10 40-10 60 0s40 10 40 0V0H0v20z' fill='%2322c55e' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 40px'
          }} />
        </div>
      </div>

      {/* Navigation back */}
      <motion.div
        className="fixed top-8 left-8 z-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-full p-4 border border-white/30 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 text-white rotate-90" />
          </motion.div>
        </Link>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex items-center justify-center min-h-screen">
        <motion.div
          className="max-w-2xl w-full relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            >
              Safari HQ
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Send a message across the cosmic savannah
            </motion.p>
          </motion.div>

          {/* Contact Form with Animals */}
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {/* Animals around the form */}
            <motion.img
              src="/lion.png"
              alt="Elephant"
              className="absolute -top-16 -left-16 w-32 h-32 object-contain z-10"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity 
              }}
            />
            
            <motion.img
              src="/rhino.png"
              alt="Lion"
              className="absolute -top-16 -right-16 w-32 h-32 object-contain z-10"
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: 1
              }}
            />
            
            <motion.img
              src="/leopard.png"
              alt="Leopard"
              className="absolute -bottom-16 -left-16 w-32 h-32 object-contain z-10"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: 2
              }}
            />
            
            <motion.img
              src="/hippo.png"
              alt="Rhino"
              className="absolute -bottom-16 -right-16 w-32 h-32 object-contain z-10"
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: 3
              }}
            />
            
            <motion.img
              src="/giraffe.png"
              alt="Buffalo"
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 object-contain z-10"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 1.5
              }}
            />
            
            <motion.img
              src="/elephant.png"
              alt="Giraffe"
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 object-contain z-10"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 2.5
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Explorer Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="Your cosmic callsign..."
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Transmission Frequency
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  placeholder="your@starbase.galaxy"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mission Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Share your cosmic adventure ideas or collaboration proposals..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {sending ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Transmitting across the cosmos...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send to Safari HQ</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-white/80 text-sm italic">
              "Every great adventure begins with a single message across the stars..."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating safari elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['🌿', '🌾', '🦋', '🌺', '🌿'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
