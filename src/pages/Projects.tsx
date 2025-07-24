import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Rocket, Star } from 'lucide-react';
import { Link, useEffect, useRef } from 'react';
import SiteNav from '../components/SiteNav';

const Projects = () => {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs for each mission card
  const missionRefs = useRef({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const missions = [
    {
      id: "finance-orion",
      planetName: "Orion Outpost",
      projectTitle: "The Ledger of Orion",
      subtitle: "Keeping the Stars Accountable",
      missionDay: "Day 217",
      description: "An efficient finance tracker crafted for the Orion settlers(Poor Budgetters!), enabling them to monitor their credits, manage trade logs, and chart spending galaxies across time. Helped spacefolk make lightyears-ahead(informed) decisions with clarity and control.",
      tech: ["React", "Tailwind", "Chart.js", "Financial API"],
      backgroundImage: "/Finance.jpg",
      planetImage: "/mars1.png",
      animalConstellation: "/elephant.png", // Elephant
      coordinates: { x: 42, y: 55 },
      href: "https://finance-tracker-7ftm.vercel.app/"
    },
    
    {
      id: "luna-adrasha",
      planetName: "Moonlit Market",
      projectTitle: "Adrasha Jewels of the Moon",
      subtitle: "Treasures from the Lunar Bazaar",
      missionDay: "Lunar Cycle 27",
      description: "An exotic boutique shimmering with traditional African jewelry—digitally handcrafted for moonwalkers and Earthlings alike. This lunar commerce portal brought the elegance of Adrasha to the cosmos, blending culture with code in every sparkle.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      backgroundImage: "/comb4.jpg?height=300&width=600",
      planetImage: "/luna.png?height=300&width=600",
      animalConstellation: "/fairy1.png", // Bird
      coordinates: { x: 18, y: 32 },
      href: "https://adrasha-clone.vercel.app/"
    },
    {
      id: "earth-cema",
      planetName: "Verdant Haven",
      projectTitle: "CEMA LifeLink",
      subtitle: "Healing in the Heart of the Island",
      missionDay: "Earth Day 492",
      description: "On a lush island sanctuary deep within Earth's last biodome, this health system connects caretakers with their communities. From tracking wellness programs to synchronizing healing rituals (appointments), CEMA LifeLink became the heartbeat of sustainable care in the wilderness.",
      tech: ["React", "Django", "PostgreSQL", "REST API"],
      backgroundImage: "/bg.jpg",
      planetImage: "/earth1.png",
      animalConstellation: "/lion.png", // Safari animal
      coordinates: { x: 18, y: 72 },
      href: "https://chfrontend.vercel.app/"
    }
    ,
    {
      id: "stellar-archives",
      planetName: "The Discovery Archive",
      projectTitle: "Library Constellation",
      subtitle: "Curating Knowledge Among the Stars",
      missionDay: "Stardate 492.8",
      description: "Tucked within a quiet orbital station(Cloud), the Library Constellation became a trusted resource hub for knowledge seekers. With systems to browse, borrow, and return every type of tome, this app kept voyagers enlightened—even in the farthest reaches of space.",
      tech: ["Ruby on Rails", "PostgreSQL", "JavaScript", "Library System API"],
      backgroundImage: "/background-fbcbd973.jpg",
      planetImage: "/stars.jpg",
      animalConstellation: "/rhino.png", 
      coordinates: { x: 83, y: 62 },
      href: "https://github.com/KendiAstro23/library_app"
    },
    {
      id: "rafiki-galaxy",
      planetName: "Spacerafiki Outpost",
      projectTitle: "Space Rafiki Adventures",
      subtitle: "Friendship Across the Stars",
      missionDay: "Orbital Cycle 7",
      description: "An interstellar learning vessel created to guide young minds through the cosmos. With quizzes, games, and galactic facts, Spacerafiki fosters curiosity and knowledge in every starry traveler. It's where play meets purpose on the edges of the known universe.",
      tech: ["Next.js", "React", "Educational API", "Space Quiz Engine"],
      backgroundImage: "/SRA.png",
      planetImage: "/ISS.jpeg",
      animalConstellation: "/giraffe.png",
      coordinates: { x: 85, y: 18 },
      href: "https://space-rafiki-adventures.vercel.app/"
    }
    
  ];

  // Scroll to mission if hash is present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = missionRefs.current[id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden font-cosmic">
      <SiteNav />
      {/* Animated Star Field */}
      <div className="fixed inset-0">
        {Array.from({ length: 200 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.div
        className="fixed top-4 md:top-8 left-4 md:left-8 z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/">
          <motion.div
            className="bg-blue-900/30 backdrop-blur-lg rounded-full p-3 md:p-4 border border-blue-400/30 hover:bg-blue-800/40 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-200" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Mission Control Header */}
      <div className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-16 px-4">
        <motion.div
          className="text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mission Log
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-mono px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            "Every planet visited, every system explored, every gift left behind..."
          </motion.p>
        </motion.div>

        {/* Cosmic Navigation Map */}
        <motion.div
          className="relative w-full h-64 md:h-96 mt-8 md:mt-16 mx-auto max-w-6xl"
          style={{ y: parallaxY }}
        >
          {/* Navigation Map Container */}
          <div className="relative w-full h-full">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${mission.coordinates.x}%`,
                  top: `${mission.coordinates.y}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedMission(selectedMission === index ? null : index)}
              >
                {/* Planet */}
                <div className="relative">
                  <motion.img
                    src={mission.planetImage}
                    alt={mission.planetName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/50 shadow-lg"
                    animate={{ 
                      rotate: [0, 360],
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.6)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  />
                  
                  {/* Planet Info Popup */}
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <p className="text-blue-300 text-sm font-mono">{mission.planetName}</p>
                    <p className="text-white text-xs">{mission.projectTitle}</p>
                  </motion.div>

                  {/* Orbital Ring */}
                  <motion.div
                    className="absolute inset-0 w-16 h-16 border border-blue-400/20 rounded-full"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {missions.map((mission, index) => {
                if (index === missions.length - 1) return null;
                const nextMission = missions[index + 1];
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${mission.coordinates.x}%`}
                    y1={`${mission.coordinates.y}%`}
                    x2={`${nextMission.coordinates.x}%`}
                    y2={`${nextMission.coordinates.y}%`}
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.5 }}
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Mission Reports */}
      <div className="relative z-10 space-y-16 md:space-y-32 py-8 md:py-16 px-4">
        {missions.map((mission, index) => (
          <motion.section
            key={mission.id}
            ref={el => { missionRefs.current[mission.id] = el; }}
            className="relative min-h-screen flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mission Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${mission.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Mission Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                
                {/* Mission Log */}
                <motion.div
                  className="space-y-4 md:space-y-6 order-2 lg:order-1"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-black/60 backdrop-blur-lg rounded-lg p-6 md:p-8 border border-blue-400/30">
                    <motion.div
                      className="text-blue-300 text-sm font-mono mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {mission.planetName} - {mission.missionDay}
                    </motion.div>
                    
                    <motion.h2
                      className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {mission.projectTitle}
                    </motion.h2>
                    
                    <motion.p
                      className="text-cyan-300 text-base md:text-lg italic mb-4 md:mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {mission.subtitle}
                    </motion.p>
                    
                    <motion.p
                      className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-base"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {mission.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      {mission.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 md:px-3 py-1 bg-blue-900/30 border border-blue-400/30 rounded-full text-xs md:text-sm text-blue-200 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <a
                        href={mission.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
                        style={{ textDecoration: 'none' }}
                      >
                        <Rocket className="w-4 h-4" />
                        <span>Launch Mission</span>
                      </a>
                      <a
                        href="https://github.com/KendiAstro23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 border border-blue-400/30 text-blue-300 hover:bg-blue-900/20 px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
                        style={{ textDecoration: 'none' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Mission Files</span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Mission Visual */}
                <motion.div
                  className="relative order-1 lg:order-2"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.img
                      src={mission.planetImage}
                      alt={mission.planetName}
                      className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Animal Constellation */}
                    <motion.img
                      src={mission.animalConstellation}
                      alt="Constellation"
                      className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-12 h-12 md:w-16 md:h-16 opacity-60"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Mission Control Footer */}
      <motion.div
        className="relative z-10 py-16 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-black/60 backdrop-blur-lg rounded-lg p-8 mx-6 border border-blue-400/30 max-w-4xl mx-auto">
          <motion.p 
            className="text-gray-300 text-lg italic mb-8 font-mono"
          >
            "In the vastness of space, every mission leaves a mark, every planet tells a story, and every journey expands the frontier of possibility."
          </motion.p>
          
          {/* Big Five Constellation */}
          <motion.div
            className="flex justify-center space-x-8 opacity-60"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              "/lion.png",
              "/elephant.png",
              "/leopard.png",
              "/rhino.png"
            ].map((animal, index) => (
              <motion.img
                key={index}
                src={animal}
                alt={`Constellation ${index + 1}`}
                className="w-12 h-12 object-contain"
                animate={{ 
                  rotate: [0, 360],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 6 + index,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
