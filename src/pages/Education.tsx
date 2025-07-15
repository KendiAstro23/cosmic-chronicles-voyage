'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav';
import './EducationMagic.css';
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const entries = [
  {
    type: 'education',
    title: 'University of Nairobi',
    subtitle: 'BSc in Astronomy & Astrophysics (2:1)',
    location: 'Nairobi, Kenya',
    dates: 'Sept 2019 – Sept 2024',
    icon: '🌌',
    image: '/UON.jpg',
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
    image: '/ALX.jpg',
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
    image: '/fairy4.png',
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
  </svg>
);

const Education = () => {
  const workEntries = entries.filter(e => e.type === 'work');
  const firstWorkIdx = entries.findIndex(e => e.type === 'work');

  const sectionVariants = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
  };

  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div className="w-full min-h-screen parchment-bg overflow-x-hidden relative">
        <MagicalBorder />
        <SiteNav />

        {/* Back Button */}
        <motion.div className="fixed top-4 left-4 z-50" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <Link to="/">
            <motion.div className="bg-amber-900/60 p-3 rounded-full border-2 border-yellow-600/70 shadow-2xl hover:bg-amber-800/70 transition">
              <ArrowLeft className="w-5 h-5 text-amber-200" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Title */}
        <div className="text-center pt-16 pb-8">
          <h1 className={`${titleFont} text-5xl md:text-6xl text-yellow-900 drop-shadow-lg`}>Education & Work History</h1>
          <p className="text-xl md:text-2xl text-yellow-700 font-caveat mt-2">A journey through learning and magical work experiences</p>
        </div>

        {/* Unified Scroll Snap Container for All Cards */}
        <div
          className="overflow-y-auto overflow-x-hidden h-screen scroll-smooth"
          style={{ scrollSnapType: 'y mandatory', height: '100vh' }}
        >
          {/* Education Section */}
          {entries.slice(0, firstWorkIdx).map((entry, idx) => (
            <section
              key={entry.title}
              className={`w-full min-h-screen flex flex-col md:flex-row items-center md:items-stretch gap-4 sm:gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} px-2 sm:px-4 md:px-16 py-8 sm:py-12 md:py-20`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={entry.image} alt={entry.imageAlt} className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg h-auto mt-8 sm:mt-12 md:mt-20 drop-shadow-lg rounded-2xl" />
              </div>
              <div className="flex-[1.5] flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl sm:text-2xl md:text-3xl">{entry.icon}</span>
                  <h2 className={`${titleFont} text-yellow-800 text-2xl sm:text-3xl md:text-5xl`}>{entry.title}</h2>
                </div>
                {entry.subtitle && <h3 className="text-lg sm:text-xl md:text-2xl text-yellow-700 font-semibold mb-2 font-caveat">{entry.subtitle}</h3>}
                <div className="text-base sm:text-lg md:text-xl text-yellow-600 mb-4 font-caveat flex flex-wrap gap-2 sm:gap-4">
                  {entry.location && <span>📍 {entry.location}</span>}
                  <span>📅 {entry.dates}</span>
                </div>
                <div className={`text-gray-800 ${textFont} max-w-3xl space-y-4 sm:space-y-6`}>{entry.description}</div>
              </div>
            </section>
          ))}

          {/* Work Experience Heading */}
          <section
            className="w-full min-h-screen flex flex-col items-center justify-center bg-indigo-950 text-indigo-100 px-2 sm:px-4 md:px-16 py-8 sm:py-12 md:py-20"
            style={{ scrollSnapAlign: 'start' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-im-fell-english text-indigo-200 drop-shadow-xl mb-4">Work Experience</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-300 font-im-fell-english mt-2">Scroll through my magical missions</p>
          </section>

          {/* Work Experience Cards */}
          {workEntries.map((entry, idx) => (
            <section
              key={entry.title}
              className={`w-full min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-8 md:gap-16 px-2 sm:px-4 md:px-16 py-8 sm:py-12 md:py-20 ${idx % 2 === 0 ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="w-full max-w-4xl text-center rounded-3xl parchment-border shadow-2xl py-8 sm:py-12 md:py-20 px-2 sm:px-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                  <span className="text-xl sm:text-2xl md:text-3xl">{entry.icon}</span>
                  <h4 className="font-caveat font-bold text-2xl sm:text-3xl md:text-4xl">{entry.title}</h4>
                </div>
                {entry.subtitle && (
                  <h5 className="text-lg sm:text-xl md:text-2xl text-indigo-800 font-caveat mb-2">{entry.subtitle}</h5>
                )}
                <div className="text-base sm:text-lg md:text-xl text-indigo-600 mb-4 font-caveat flex flex-wrap gap-2 sm:gap-4 justify-center">
                  {entry.location && <span>📍 {entry.location}</span>}
                  <span>📅 {entry.dates}</span>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6 mt-4 sm:mt-6">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-2xl drop-shadow-xl"
                  />
                </div>
                <div className="text-base sm:text-lg md:text-xl font-im-fell-english leading-7 sm:leading-8 md:leading-8 max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-4">
                  {entry.description}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Education;
