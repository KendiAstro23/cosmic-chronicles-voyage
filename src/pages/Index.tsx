import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import './EducationMagic.css';

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
      className="fixed top-4 md:top-8 right-4 md:right-8 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-3 md:p-4 border border-white/10">
        <div className="space-y-1 md:space-y-2">
          {menuItems.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className="flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
              >
                <span className="text-xl md:text-2xl flex items-center justify-center">{item.icon}</span>
                <span className="text-white font-medium text-xs md:text-sm group-hover:text-blue-300 transition-colors">
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
  // Show main content immediately for fastest load
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      <NavigationMenu />
      <SiteNav />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
        <motion.div
          className="space-y-6 md:space-y-8 max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Dorcas Kendi
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
              Cosmic Explorer & Digital Architect
            </span>
          </motion.p>
          
          <motion.p
            className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Navigating the digital cosmos, crafting experiences that bridge worlds, 
            and exploring the intersection of technology and human connection.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8 md:mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Journey
            </motion.button>
            
            <motion.button
              className="border-2 border-white/30 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Missions
            </motion.button>
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

      {/* --- New Sections Below Hero --- */}
      <main className="relative z-20 w-full flex flex-col items-center">
        {/* My Journal Section – Karman-Inspired */}
        <section className="w-full relative z-20 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-9xl md:text-10xl font-caveat text-white-900 drop-shadow-lg relative inline-block">
            My Journal
            <span className="block mx-auto mt-2 w-32 h-2 bg-yellow-300 rounded-full blur-md opacity-70 animate-pulse" />
            <span className="absolute left-0 -top-6 text-yellow-400 text-3xl animate-bounce">✦</span>
            <span className="absolute right-0 -top-6 text-yellow-400 text-3xl animate-bounce">✦</span>
            </h2>
    <p className="mt-6 text-3xl md:text-5xl text-white-800 font-caveat">
      Where my hands-on Journey began 
    </p>
  </div>

  <div className="relative w-full max-w-7xl">
    {journalEntries
      .filter(entry => entry.type === 'education')
      .map((entry, i) => (
        <motion.div
          key={entry.title}
          className={`min-h-[50vh] relative flex flex-col md:flex-row items-center gap-8 mb-16 p-6 rounded-3xl shadow-2xl bg-grey/60 parchment-border transition-all duration-500 ease-in-out ${
            i % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="flex-1 flex justify-center">
            <img
              src={entry.image}
              alt={entry.imageAlt}
              className="w-36 h-42 md:w-64 md:h-64 object-contain drop-shadow-lg rounded-xl"
            />
          </div>
          <div className="flex-[1.5]">
            <h3 className="font-caveat text-6xl text-indigo-900 font-bold mb-2 flex items-center gap-2">
              {entry.icon} {entry.title}
            </h3>
            {entry.subtitle && (
              <div className="text-3xl text-white-800 font-semibold mb-1 font-caveat">{entry.subtitle}</div>
            )}
            <div className="text-2xl text-white-700 font-caveat mb-3">
              📍 {entry.location} • 📅 {entry.dates}
            </div>
            <div className="space-y-2 text-white-800 text-2xl font-caveat">
              {entry.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          {/* Dotted/rule-line style separator */}
          {i < journalEntries.length - 1 && (
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-1 h-10 border-l-2 border-dotted border-indigo-400 opacity-70" />
          )}
        </motion.div>
      ))}
  </div>

  <a
    href="/education"
    className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all"
  >
    View Full Journal
  </a>
</section>

      {/* My Missions Section – 3 Horizontal Cards */}
<section className="w-full min-h-[80vh] py-24 relative z-30 px-4 md:px-16">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-caveat text-yellow-200 drop-shadow-lg">My Missions</h2>
    <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-caveat">
      Top projects launched with purpose and stardust ✨
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
    {/* Card 1 */}
    <a
      href="/projects"
      className="h-[50vh] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-yellow-300/40 transition transform hover:scale-[1.02] flex flex-col justify-between p-6"
    >
      <h3 className="text-6xl md:text-4xl font-caveat text-indigo-900 mb-2">Adrasha Jewelry</h3>
      <p className="text-indigo-800 text-base md:text-2xl flex-grow">
        A full-stack African jewelry platform with elegant product galleries, CMS backend, and vibrant storytelling.
      </p>
      <img 
    src="/comb4.jpg" 
    alt="BaakiPay project preview" 
    className="rounded-xl mt-4 object-cover w-full h-60"
  />
    </a>

    {/* Card 2 */}
    <a
      href="/projects"
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-yellow-300/40 transition transform hover:scale-[1.02] flex flex-col justify-between p-6"
    >
      <h3 className="text-6xl md:text-4xl font-caveat text-indigo-900 mb-2">BaakiPay</h3>
      <p className="text-indigo-800 text-base md:text-2xl flex-grow">
        A fintech escrow solution. Designed the frontend and led product delivery for seamless small-business payments.
      </p>
      <img 
    src="/bg.jpg" 
    alt="BaakiPay project preview" 
    className="rounded-xl mt-4 object-cover w-full h-60"
  />
    </a>

    {/* Card 3 */}
    <a
      href="/projects"
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-yellow-300/40 transition transform hover:scale-[1.02] flex flex-col justify-between p-6"
    >
      <h3 className="text-6xl md:text-4xl font-caveat text-indigo-900 mb-2">Space Learners</h3>
      <p className="text-indigo-800 text-base md:text-2xl flex-grow">
        A web app that teaches space facts, quizzes, and games for kids 8–12. Built with React, styled with whimsy.
      </p>
      <img 
    src="/SRA.png" 
    alt="SpaceRafiki preview" 
    className="rounded-xl mt-4 object-cover w-full h-60"
  />
    </a>
  </div>

  {/* View All Button */}
  <div className="mt-16 text-center">
    <a
      href="/projects"
      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-10 rounded-full shadow-lg transition-all"
    >
      View All Missions
    </a>
  </div>
</section>

<section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 py-20 z-30">
  <div className="relative z-10 max-w-4xl text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-xl">
      Ready to Launch something great Together?
    </h2>
    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
      Whether it's a new project, a collaboration idea, or a cosmic conversation—I'm just a click away. Let's make something stellar.
    </p>

    <a
      href="/contact"
      className="inline-block bg-yellow-400 hover:bg-white text-indigo-900 font-semibold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
    >
      🚀 Contact HQ
    </a>
  </div>
</section>

      </main>
      {/* Footer */}
      <footer className="relative z-20 w-full py-8 bg-black text-center text-yellow-200 font-caveat text-xl md:text-2xl">
        <span>Made with Love by Kendy</span>
      </footer>
    </div>
  );
};

// My Journal Section (Karman-inspired)
function MyJournalSection() {
  const education = journalEntries.filter(e => e.type === 'education');
  const work = journalEntries.filter(e => e.type === 'work');
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center parchment-bg/80 py-0 px-0 z-30">
      {/* Intro Block */}
      <div className="w-full text-center pt-20 pb-8 relative">
        <h2 className="text-5xl md:text-6xl font-caveat text-yellow-900 drop-shadow-lg inline-block relative">
          My Journal
          <span className="block mx-auto mt-2 w-32 h-2 bg-yellow-300 rounded-full blur-md opacity-70 animate-pulse" />
          <span className="absolute left-0 -top-6 text-yellow-400 text-3xl animate-bounce">✦</span>
          <span className="absolute right-0 -top-6 text-yellow-400 text-3xl animate-bounce">✦</span>
        </h2>
        <div className="text-lg md:text-xl text-yellow-800 font-caveat mt-2">The story behind the magic</div>
      </div>
      {/* Education Timeline */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center pb-16">
        {education.map((entry, i) => (
          <motion.div
            key={entry.title + entry.subtitle}
            className={`w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} px-2 sm:px-6 md:px-8 py-8 bg-white/80 parchment-border rounded-3xl shadow-xl mb-8 relative`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeInOut' }}
          >
            <div className="flex-1 flex items-center justify-center relative min-h-[180px]">
              <img src={entry.image} alt={entry.imageAlt} className="object-contain w-32 h-32 md:w-48 md:h-48 drop-shadow-lg rounded-2xl" />
            </div>
            <div className="flex-[1.5] basis-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6 md:px-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl md:text-3xl">{entry.icon}</span>
                <h3 className="font-caveat font-bold text-3xl md:text-4xl text-yellow-800">{entry.title}</h3>
              </div>
              {entry.subtitle && <div className="text-lg md:text-xl text-yellow-700 font-semibold mb-2 font-caveat">{entry.subtitle}</div>}
              <div className="text-base md:text-lg text-yellow-600 mb-4 font-medium flex flex-wrap gap-4 font-caveat">
                {entry.location && <span>📍 {entry.location}</span>}
                <span>📅 {entry.dates}</span>
              </div>
              <div className="text-gray-800 font-caveat text-lg md:text-2xl max-w-2xl w-full space-y-3">
                {entry.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            {/* Dotted line separator */}
            {i < education.length - 1 && (
              <div className="absolute left-1/2 -bottom-8 w-1 h-12 md:h-16 -translate-x-1/2 flex items-center justify-center">
                <div className="w-1 h-full border-l-2 border-dotted border-yellow-400 opacity-60" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {/* Work Experience Stack */}
      <div className="w-full text-center pb-8">
        <h3 className="text-4xl md:text-5xl font-caveat text-indigo-900 drop-shadow-lg mb-4 mt-8 relative inline-block">
          Work Experience
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-0.5em] w-24 h-2 bg-indigo-300 rounded-full blur-md opacity-60 animate-pulse" />
        </h3>
      </div>
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center" style={{ minHeight: '60vh' }}>
        {work.map((entry, i) => (
          <motion.div
            key={entry.title + entry.subtitle}
            className="w-full bg-white/90 parchment-border rounded-3xl shadow-2xl p-8 md:p-10 mb-[-60px] relative"
            style={{ zIndex: 10 - i, top: `${i * 40}px` }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: i * 0.18, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl md:text-3xl">{entry.icon}</span>
              <h4 className="font-caveat font-bold text-2xl md:text-3xl text-indigo-900">{entry.title}</h4>
              {entry.subtitle && <span className="text-lg md:text-xl text-indigo-700 font-caveat ml-2">{entry.subtitle}</span>}
            </div>
            <div className="text-base md:text-lg text-indigo-700 mb-3 font-medium flex flex-wrap gap-4 font-caveat">
              {entry.location && <span>📍 {entry.location}</span>}
              <span>📅 {entry.dates}</span>
            </div>
            <div className="text-gray-800 font-caveat text-lg md:text-xl max-w-2xl w-full space-y-2">
              {entry.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        ))}
        {/* Add extra space for last card visibility */}
        <div style={{ height: `${work.length * 40 + 120}px` }} />
      </div>
    </section>
  );
}

// Import entries and styles from Education page
const journalEntries = [
  {
    type: 'education',
    title: 'University of Nairobi',
    subtitle: 'BSc in Astronomy & Astrophysics (2:1)',
    location: 'Nairobi, Kenya',
    dates: 'Sept 2019 – Sept 2024',
    icon: '🌌',
    image: '/fairy4.png',
    imageAlt: 'Celestial Fairy',
    description: [
      'At the University of Nairobi, I immersed myself in the wonders of the universe — exploring cosmic structures, theoretical physics, and computational modeling. I honed my mathematical thinking and developed strong foundations in programming, problem-solving, and scientific inquiry.',
      'Beyond the lab, I learned how to think critically about space and time — and how those same skills apply to building modern software. My fascination with the stars eventually sparked my passion for creative tech.'
    ],
  },
  {
    type: 'education',
    title: 'ALX Africa – Software Engineering Program',
    subtitle: '',
    location: 'Remote',
    dates: 'March 2023 – November 2024',
    icon: '🌠',
    image: '/leopard.png',
    imageAlt: 'Leopard Guardian',
    description: [
      'Through this rigorous, hands-on program, I sharpened my technical edge. I built full-stack applications, mastered core concepts in system design, and contributed to collaborative projects using Python, C, JavaScript, and React.',
      'More than code, the program trained me in remote collaboration, Agile workflows, and problem decomposition. It helped me evolve into a developer who can both dream big and deliver on the details.'
    ],
  },
  {
    type: 'work',
    title: 'Africa Product Peers (APP)',
    subtitle: 'Software Developer',
    location: 'Nairobi, Kenya',
    dates: 'May 2025 – Present',
    icon: '🌍',
    image: '/fairy3.png',
    imageAlt: 'Guild Fairy',
    description: [
      'I contributed to the design and development of APP — a platform designed to empower African innovators and product thinkers. My focus was building an intuitive, scalable web interface that feels accessible across all devices.',
      'I also led key marketing efforts: running digital campaigns, growing community engagement, and crafting event strategies that drove lead generation and conversion. From design to deployment to digital storytelling, I helped build an ecosystem from the ground up.'
    ],
  },
  {
    type: 'work',
    title: 'Freelance, Upwork',
    subtitle: 'Web Developer & Product Designer',
    location: 'Remote',
    dates: 'Aug 2024 – Present',
    icon: '🌎',
    image: '/fairy2.png',
    imageAlt: 'Forest Fairy',
    description: [
      "As a freelancer, I've worked with clients across industries to create clean, responsive web experiences. I've handled everything from user research to visual design to backend logic, offering a full-stack skillset with a focus on UX.",
      'These projects strengthened my ability to work independently, manage time across continents, and communicate with clients to bring their visions to life. Each brief became a new mission — an opportunity to explore, solve, and ship.'
    ],
  },
  {
    type: 'work',
    title: 'BaakiPay',
    subtitle: 'Project Manager & Frontend Developer',
    location: 'Nairobi, Kenya',
    dates: 'Sept 2024 – Dec 2024',
    icon: '🌐',
    image: '/elephant.png',
    imageAlt: 'Elephant Guardian',
    description: [
      'At BaakiPay, I was at the intersection of tech and trust — helping to build a secure escrow platform for digital commerce. I crafted the frontend experience using modern JavaScript tools and helped users feel confident and in control of their transactions.',
      'I also managed timelines, led team meetings, coordinated with investors, and helped plan product launches. It was a fast-paced, collaborative environment that demanded technical clarity and strong communication.'
    ],
  },
  {
    type: 'work',
    title: 'Expedia Media Solutions',
    subtitle: 'Competitive Intelligence Extern',
    location: 'Nairobi, Kenya',
    dates: 'July 2024 – Sept 2024',
    icon: '✨',
    image: '/leopard.png',
    imageAlt: 'Leopard Guardian',
    description: [
      "I conducted deep market research into Expedia's direct and indirect competitors — analyzing trends, strategies, and gaps within the Retail Media Network (RMN) space.",
      "I then proposed actionable insights to enhance digital advertising efforts, giving Expedia's media arm a sharper edge in campaign visibility and performance. This externship allowed me to merge data analysis with marketing strategy in a real-world setting."
    ],
  },
];

export default Index;