import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import './EducationMagic.css';
import React, { useEffect, useRef, useState } from 'react';

const entries = [
  {
    type: 'education',
    title: 'University of Nairobi',
    subtitle: 'BSc in Astronomy & Astrophysics (2:1)',
    location: 'Nairobi, Kenya',
    dates: 'Sept 2019 – Sept 2024',
    icon: '🌌',
    image: '/fairy4.png',
    imageAlt: 'Celestial Fairy',
    description: (
      <>
        <p className="mb-2">At the University of Nairobi, I immersed myself in the wonders of the universe — exploring cosmic structures, theoretical physics, and computational modeling. I honed my mathematical thinking and developed strong foundations in programming, problem-solving, and scientific inquiry.</p>
        <p className="mb-2">Beyond the lab, I learned how to think critically about space and time — and how those same skills apply to building modern software. My fascination with the stars eventually sparked my passion for creative tech.</p>
      </>
    ),
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
    description: (
      <>
        <p className="mb-2">Through this rigorous, hands-on program, I sharpened my technical edge. I built full-stack applications, mastered core concepts in system design, and contributed to collaborative projects using Python, C, JavaScript, and React.</p>
        <p className="mb-2">More than code, the program trained me in remote collaboration, Agile workflows, and problem decomposition. It helped me evolve into a developer who can both dream big and deliver on the details.</p>
      </>
    ),
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
    description: (
      <>
        <p className="mb-2">I contributed to the design and development of APP — a platform designed to empower African innovators and product thinkers. My focus was building an intuitive, scalable web interface that feels accessible across all devices.</p>
        <p className="mb-2">I also led key marketing efforts: running digital campaigns, growing community engagement, and crafting event strategies that drove lead generation and conversion. From design to deployment to digital storytelling, I helped build an ecosystem from the ground up.</p>
      </>
    ),
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
    description: (
      <>
        <p className="mb-2">As a freelancer, I've worked with clients across industries to create clean, responsive web experiences. I've handled everything from user research to visual design to backend logic, offering a full-stack skillset with a focus on UX.</p>
        <p className="mb-2">These projects strengthened my ability to work independently, manage time across continents, and communicate with clients to bring their visions to life. Each brief became a new mission — an opportunity to explore, solve, and ship.</p>
      </>
    ),
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
    description: (
      <>
        <p className="mb-2">At BaakiPay, I was at the intersection of tech and trust — helping to build a secure escrow platform for digital commerce. I crafted the frontend experience using modern JavaScript tools and helped users feel confident and in control of their transactions.</p>
        <p className="mb-2">I also managed timelines, led team meetings, coordinated with investors, and helped plan product launches. It was a fast-paced, collaborative environment that demanded technical clarity and strong communication.</p>
      </>
    ),
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
    description: (
      <>
        <p className="mb-2">I conducted deep market research into Expedia's direct and indirect competitors — analyzing trends, strategies, and gaps within the Retail Media Network (RMN) space.</p>
        <p className="mb-2">I then proposed actionable insights to enhance digital advertising efforts, giving Expedia's media arm a sharper edge in campaign visibility and performance. This externship allowed me to merge data analysis with marketing strategy in a real-world setting.</p>
      </>
    ),
  },
];

const textFont = 'font-caveat text-[1.5rem] md:text-3xl tracking-wide leading-[2.2]';
const titleFont = 'font-caveat font-bold text-4xl md:text-5xl tracking-wider';

const MagicalBorder = () => (
  <svg className="pointer-events-none fixed inset-0 w-full h-full z-40" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <radialGradient id="glow1" cx="50%" cy="50%" r="80%">
        <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ffe066" stopOpacity="0.1" />
      </radialGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="18" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="12" y="12" width="1896" height="1056" rx="64" fill="none" stroke="url(#glow1)" strokeWidth="16" filter="url(#softGlow)" opacity="0.8" />
    {/* Decorative sparkles */}
    <path d="M60 80 Q120 40 180 120 T300 100" stroke="#b794f4" strokeWidth="4" fill="none" opacity="0.5" />
    <path d="M1860 1000 Q1800 1040 1720 960 T1600 980" stroke="#b794f4" strokeWidth="4" fill="none" opacity="0.5" />
    <circle cx="120" cy="60" r="8" fill="#ffe066" opacity="0.7" />
    <circle cx="1800" cy="1040" r="10" fill="#ffe066" opacity="0.5" />
    <text x="90" y="120" fontSize="40" fill="#ffe066" opacity="0.7">✦</text>
    <text x="1840" y="1040" fontSize="40" fill="#ffe066" opacity="0.7">☾</text>
    <text x="200" y="1000" fontSize="32" fill="#b794f4" opacity="0.5">✧</text>
    <text x="1700" y="80" fontSize="32" fill="#b794f4" opacity="0.5">✧</text>
    <path d="M100 200 Q200 300 400 250 Q600 200 800 300" stroke="#ffe066" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M1820 900 Q1700 800 1500 900 Q1300 1000 1100 900" stroke="#ffe066" strokeWidth="2" fill="none" opacity="0.2" />
  </svg>
);

const FairyCorners = () => (
  <>
    <img src="/fairy1.png" alt="Fairy Top Left" className="fixed top-0 left-0 w-20 md:w-32 opacity-80 fairy-corner-glow pointer-events-none z-50" style={{ transform: 'translate(-20%, -20%) rotate(-12deg)' }} />
    <img src="/fairy2.png" alt="Fairy Top Right" className="fixed top-0 right-0 w-20 md:w-32 opacity-80 fairy-corner-glow pointer-events-none z-50" style={{ transform: 'translate(20%, -20%) rotate(10deg)' }} />
    <img src="/fairy3.png" alt="Fairy Bottom Left" className="fixed bottom-0 left-0 w-20 md:w-32 opacity-80 fairy-corner-glow pointer-events-none z-50" style={{ transform: 'translate(-20%, 20%) rotate(8deg)' }} />
    <img src="/fairy4.png" alt="Fairy Bottom Right" className="fixed bottom-0 right-0 w-20 md:w-32 opacity-80 fairy-corner-glow pointer-events-none z-50" style={{ transform: 'translate(20%, 20%) rotate(-8deg)' }} />
  </>
);

const Education = () => {
  const workEntries = entries.filter(e => e.type === 'work');
  const firstWorkIdx = entries.findIndex(e => e.type === 'work');
  const lastWorkIdx = entries.map(e => e.type).lastIndexOf('work');
  const workSectionRef = useRef<HTMLDivElement>(null);
  const [workActive, setWorkActive] = useState(false);

  useEffect(() => {
    if (workActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [workActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (!workSectionRef.current) return;
      const rect = workSectionRef.current.getBoundingClientRect();
      const fullyPinned = rect.top === 0 && rect.bottom === window.innerHeight;
      setWorkActive(fullyPinned);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen parchment-bg overflow-x-hidden relative">
      <MagicalBorder />
      <FairyCorners />
      <SiteNav />

      {/* Navigation Button */}
      <motion.div
        className="fixed top-2 md:top-6 left-2 md:left-6 z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <motion.div
            className="bg-amber-900/60 backdrop-blur-lg rounded-full p-2 md:p-3 border-2 border-yellow-600/70 hover:bg-amber-800/70 transition-colors shadow-2xl"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-amber-200" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Page Title */}
      <div className="w-full text-center pt-16 pb-8">
        <h1 className={`text-4xl md:text-6xl ${titleFont} text-yellow-900 drop-shadow-lg`}>Education & Work History</h1>
        <p className="text-lg md:text-2xl text-yellow-700 font-caveat mt-2">A journey through learning and magical work experiences</p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col journal-ruled-lines">
        {entries.slice(0, firstWorkIdx).map((entry, idx) => (
          <motion.section
            key={entry.title + entry.subtitle}
            className={`w-full min-h-screen flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} px-2 sm:px-6 md:px-16 py-0`}
            style={{ scrollSnapAlign: 'start', zIndex: 10 - idx }}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
              <img src={entry.image} alt={entry.imageAlt} className="object-contain w-48 h-48 md:w-80 md:h-80 drop-shadow-lg rounded-2xl" />
            </div>
            <div className={`flex-[1.5] basis-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6 md:px-8 max-w-4xl mx-auto`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl md:text-3xl">{entry.icon}</span>
                <h2 className={`${titleFont} text-yellow-800`}>{entry.title}</h2>
              </div>
              {entry.subtitle && <h3 className="text-lg md:text-2xl text-yellow-700 font-semibold mb-2 font-caveat">{entry.subtitle}</h3>}
              <div className="text-base md:text-xl text-yellow-600 mb-4 font-medium flex flex-wrap gap-4 font-caveat">
                {entry.location && <span>📍 {entry.location}</span>}
                <span>📅 {entry.dates}</span>
              </div>
              <div className={`text-gray-800 ${textFont} max-w-3xl w-full space-y-6`}>{entry.description}</div>
            </div>
          </motion.section>
        ))}

        {/* Sticky Work Stack */}
        <div ref={workSectionRef} className="sticky-stack-wrapper w-full overflow-y-auto" style={{ height: '100vh', zIndex: 100 }}>
          <div className="w-full flex flex-col items-center justify-center pt-20 pb-8 bg-transparent sticky top-0 z-20">
            <h2 className="text-5xl md:text-6xl font-im-fell-english text-indigo-100 drop-shadow-lg tracking-wider mb-2">Work Experience</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl md:text-4xl animate-pulse">★</span>
              <span className="text-xl md:text-2xl text-indigo-200 font-im-fell-english">Professional Journey</span>
              <span className="text-3xl md:text-4xl animate-pulse">★</span>
            </div>
          </div>
          {workEntries.map((entry, idx) => (
            <motion.section
              key={entry.title + entry.subtitle}
              className="sticky-card w-full h-screen flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 px-2 sm:px-6 md:px-16 py-0 work-bg work-border"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
                <img src={entry.image} alt={entry.imageAlt} className="object-contain w-48 h-48 md:w-80 md:h-80 drop-shadow-lg rounded-2xl" />
              </div>
              <div className="flex-[1.5] basis-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6 md:px-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl md:text-3xl">{entry.icon}</span>
                  <h2 className="font-im-fell-english font-bold text-4xl md:text-5xl tracking-wider text-indigo-100">{entry.title}</h2>
                </div>
                {entry.subtitle && <h3 className="text-lg md:text-2xl text-indigo-200 font-semibold mb-2 font-im-fell-english">{entry.subtitle}</h3>}
                <div className="text-base md:text-xl text-indigo-200 mb-4 font-medium flex flex-wrap gap-4 font-im-fell-english">
                  {entry.location && <span>📍 {entry.location}</span>}
                  <span>📅 {entry.dates}</span>
                </div>
                <div className="text-indigo-50 font-im-fell-english text-[1.4rem] md:text-2xl tracking-normal leading-[2.1] max-w-3xl w-full space-y-6">{entry.description}</div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Post-work entries (if any) */}
        {entries.slice(lastWorkIdx + 1).map((entry, idx) => (
          <motion.section
            key={entry.title + entry.subtitle}
            className={`w-full min-h-screen flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} px-2 sm:px-6 md:px-16 py-0`}
            style={{ scrollSnapAlign: 'start', zIndex: 10 - idx }}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
              <img src={entry.image} alt={entry.imageAlt} className="object-contain w-48 h-48 md:w-80 md:h-80 drop-shadow-lg rounded-2xl" />
            </div>
            <div className={`flex-[1.5] basis-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-6 md:px-8 max-w-4xl mx-auto`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl md:text-3xl">{entry.icon}</span>
                <h2 className={`${titleFont} text-yellow-800`}>{entry.title}</h2>
              </div>
              {entry.subtitle && <h3 className="text-lg md:text-2xl text-yellow-700 font-semibold mb-2 font-caveat">{entry.subtitle}</h3>}
              <div className="text-base md:text-xl text-yellow-600 mb-4 font-medium flex flex-wrap gap-4 font-caveat">
                {entry.location && <span>📍 {entry.location}</span>}
                <span>📅 {entry.dates}</span>
              </div>
              <div className={`text-gray-800 ${textFont} max-w-3xl w-full space-y-6`}>{entry.description}</div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Education;