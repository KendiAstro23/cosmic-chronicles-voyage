import { motion } from 'framer-motion';
import { ArrowDown, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SiteNav from '../components/SiteNav';

const Resume = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Dorcas_CV.pdf';
    link.download = 'Dorcas_Kendi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message and reset downloading state
    setTimeout(() => {
      setDownloading(false);
      alert('✅ CV download initiated successfully! Check your downloads folder.');
    }, 1000);
  };

  const achievements = [
    "🎯 Led multi-platform development across 3 industries",
    "🏆 Designed and launched features for a community-driven product",
    "🚀 Boosted engagement by 40% through interactive frontend work",
    "🌍 Built global client tools as a freelance developer",
    "📊 Improved ad strategies through competitor insights at Expedia"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      <SiteNav />
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation back */}
      <motion.div
        className="fixed top-4 md:top-8 left-4 md:left-8 z-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <motion.div
            className="bg-green-400/20 backdrop-blur-lg rounded-full p-3 md:p-4 border border-green-400/30 hover:bg-green-400/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-green-400 rotate-90" />
          </motion.div>
        </Link>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Terminal header */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-t-2xl p-3 md:p-4 border-b border-green-400/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-mono text-xs md:text-sm ml-3 md:ml-4">space_archives_terminal.exe</span>
            </div>
          </div>
        </motion.div>

        {/* Main terminal content */}
        <motion.div
          className="bg-black/80 backdrop-blur-sm rounded-b-2xl p-4 md:p-8 border border-green-400/30 font-mono"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Terminal header */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-green-400 text-lg md:text-xl mb-2">
              {'>'} ACCESSING SPACE ARCHIVES...
            </div>
            <div className="text-green-300 text-xs md:text-sm">
              {'>'} LOADING PERSONNEL FILE: SPACE_EXPLORER.pdf
            </div>
            <div className="text-green-300 text-xs md:text-sm">
              {'>'} STATUS: READY FOR TRANSMISSION
            </div>
          </motion.div>

          {/* Resume display area */}
          <motion.div
            className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-green-400/20 mb-6 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 space-y-2 md:space-y-0">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                <div>
                  <h3 className="text-green-400 text-base md:text-lg font-semibold">PERSONNEL_RECORD.pdf</h3>
                  <p className="text-green-300 text-xs md:text-sm">Comprehensive Space Explorer Documentation</p>
                </div>
              </div>
              <div className="text-green-300 text-xs md:text-sm">
                File Size: 2.4 MB | Classification: UNRESTRICTED
              </div>
            </div>
          </motion.div>

          <motion.div
          className="mb-6 md:mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          >
            <div className="text-green-400 text-base md:text-lg mb-4">{'>'} PERSONNEL_FILE_DISPLAY</div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-green-400/30">
            <object
            data="/Dorcas_CV.pdf#zoom=100"
            type="application/pdf"
            width="100%"
            height="600px"
            className="w-full h-96 md:h-96 lg:h-screen"
            style={{ display: 'block', width: '100%', minHeight: '400px' }}
            >
              <p>Your browser does not support PDFs. 
                <a href="/Dorcas_CV.pdf" target="_blank" rel="noopener noreferrer">Click here to download the PDF.</a>
              </p>
              </object>
            </div>
          </motion.div>


          {/* Key achievements */}
          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-green-400 text-lg mb-4">{'>'} KEY_ACHIEVEMENTS.log</div>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-green-300 text-sm"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {'>'} {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download section */}
          <motion.div
            className="border-t border-green-400/30 pt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-400 text-lg mb-2">{'>'} DOWNLOAD_PROTOCOL</div>
                <div className="text-green-300 text-sm">
                  {'>'} Initiating secure transmission to your local system...
                </div>
              </div>
              
              <motion.button
                onClick={handleDownload}
                className="bg-green-400/20 border border-green-400/40 rounded-xl px-6 py-3 text-green-400 hover:bg-green-400/30 transition-colors flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={downloading}
              >
                {downloading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download Archive</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* System status */}
          <motion.div
            className="mt-6 text-green-300 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {'>'} SYSTEM_STATUS: All archives accessible | Security clearance: GRANTED | Last updated: 2024.06.18
          </motion.div>
        </motion.div>

        {/* Floating code particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/30 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {['01001', '11010', 'EXEC', 'LOAD', 'RUN'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
