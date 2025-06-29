import React, { useState, useRef } from 'react';
import './MagicalBook3D.css';

const GoldCrownSVG = (
  <svg className="gold-crown-decoration-svg" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 28 L15 8 L30 28 L45 8 L55 28 Z" stroke="#FFD700" strokeWidth="3" fill="#FFD700"/>
    <circle cx="15" cy="8" r="3" fill="#fff7b2" stroke="#FFD700" strokeWidth="2"/>
    <circle cx="45" cy="8" r="3" fill="#fff7b2" stroke="#FFD700" strokeWidth="2"/>
    <circle cx="30" cy="28" r="2.5" fill="#fff7b2" stroke="#FFD700" strokeWidth="2"/>
  </svg>
);

const fairyImages = [
  '/fairy1.png',
  '/fairy2.png',
  '/fairy3.png',
  '/fairy4.png',
];

const educationInfo = [
  {
    title: "EDUCATION",
    school: "🏛️ University of Nairobi",
    degree: "Astronomy & Astrophysics",
    dates: "Sept 2019 – Sept 2024",
    location: "Second Class Upper (2:1)",
    description: [
      "My journey began in the vast realms of the cosmos, where I explored the deep connections between stars, space, and science. This expedition taught me to navigate complex ideas in physics, mathematics, and computing, sharpening both curiosity and logic with every passing semester.",
      "The night skies weren\'t just beautiful—they were a map, and I spent years learning how to read them."
    ]
  },
  {
    title: "EDUCATION",
    school: "💻 ALX Africa",
    degree: "Software Engineering",
    dates: "March 2023 – Nov 2024",
    location: "",
    description: [
      "In this self-paced mission, I immersed myself in the world of code and systems—learning to build, debug, and deploy software with tools like Python, C, JavaScript, and React.",
      "Like decoding ancient runes, each line of code revealed a new way to shape the digital world around me."
    ]
  }
];

const workExperiences = [
  {
    title: 'Software Developer',
    company: 'Expedia Media Solutions',
    location: 'Remote',
    dates: 'July 2024 - Sep 2024',
    description: `During my externship, I researched Expedia's competitors to help improve their advertising strategies.\nI suggested ways to boost client visibility within their Retail Media Network, contributing ideas for more effective campaign planning.\n🔭 With the lens of a curious scout, I explored unfamiliar markets, bringing back insights to sharpen Expedia's vision.`
  },
  {
    title: 'Frontend Developer',
    company: 'BaakiPay Limited',
    location: 'Remote',
    dates: 'Sep 2024 - Dec 2024',
    description: `I helped build an escrow platform that protects both buyers and sellers during online transactions.\nI handled the frontend development and collaborated on planning and team coordination.\nI also helped increase user engagement and visibility through interactive features and marketing ideas aimed at growing the platform's impact.\n🛡️ I acted as both builder and shield-bearer—crafting tools for trust while guiding the team through the maze of early-stage challenges.`
  },
  {
    title: 'Intern',
    company: 'Africa Product Peer',
    location: 'Nairobi, Kenya',
    dates: 'May 2025 - July 2025',
    description: `I joined the APP mission to build a space for African product leaders. My role involved designing and developing the website, helping shape a smooth and scalable user experience.\nI also helped grow the community through social media campaigns and digital storytelling. Alongside the team, I planned and ran events that brought in high-quality leads and meaningful connections.\n🗺️ Like a mapmaker charting new terrain, I translated bold ideas into real tools that serve a growing tribe of innovators across Africa.`
  }
];

const introMessage = "Welcome to Kendi's journey";

const pagePairs = [
  // Intro Page
  {
    left: (
      <React.Fragment>
        <div className="intro-bg-left mobile-intro-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, borderRadius: 0, padding: 0 }} />
        <div className="page-border fantasy-border gold-crown-edge mobile-intro-left" style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
          <div className="intro-welcome-msg mobile-welcome-msg" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '90%', width: '100%', overflow: 'hidden' }}>
            {introMessage.split(' ').map((word, i) => (
              <span
                className="intro-magic-word mobile-magic-word"
                key={i}
                style={{
                  animationDelay: `${i * 0.14}s`,
                  marginBottom: '0.2em',
                  letterSpacing: '-0.04em',
                  display: 'block',
                  whiteSpace: 'pre',
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </React.Fragment>
    ),
    right: (
      <React.Fragment>
        <div className="intro-bg-right mobile-intro-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, borderRadius: 0, padding: 0 }} />
        <div className="page-border fantasy-border gold-crown-edge mobile-intro-right" style={{ position: 'relative', zIndex: 1, background: 'transparent', overflow: 'hidden' }}>
          <div className="intro-titlebox mobile-titlebox" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '90%', width: '100%', overflow: 'hidden' }}>
            <div className="book-title-main mobile-book-title-main" style={{ letterSpacing: '-0.04em', wordSpacing: '0.5em', fontSize: '1em', marginBottom: '0.3em' }}>Explorer's Journal</div>
            <div className="book-title-sub mobile-book-title-sub" style={{ letterSpacing: '-0.04em', wordSpacing: '0.5em', fontSize: '1em', marginBottom: '0.3em' }}>Chronicles of a Cosmic Coder</div>
          </div>
        </div>
      </React.Fragment>
    ),
  },
  // University Education Page
  {
    left: (
      <div className="parchment-bg mobile-education-layout">
        {/* Header Section with Title */}
        <div className="mobile-header-section">
          <div className="page-title gold-glow-alt mobile-title">{educationInfo[0].title}</div>
        </div>
        
        {/* Main Content Section */}
        <div className="mobile-content-section">
          {/* Education Info */}
          <div className="mobile-education-info">
            <div className="school-name gold-glow-alt">{educationInfo[0].school}</div>
            <div className="school-degree">{educationInfo[0].degree}</div>
            <div className="school-dates">{educationInfo[0].dates}</div>
            <div className="school-location">{educationInfo[0].location}</div>
          </div>
          
          {/* Fairy Image */}
          <div className="mobile-fairy-container">
            <img
              src="/fairy4.png"
              alt="fairy4"
              className="book-fairy fairy-edu-large-cover mobile-fairy"
            />
          </div>
        </div>
        
        {/* Bottom Section with Elephant */}
        <div className="mobile-bottom-section">
          <img
            src="/elephant.png"
            alt="elephant"
            className="animal-elephant-edu elephant-animated mobile-elephant"
          />
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg mobile-description-layout">
        <div className="mobile-description-content">
          <div className="description-text alt-color mobile-description">
            <p>My journey began in the vast realms of the cosmos, where I explored the deep connections between stars, space, and science. This expedition taught me to navigate complex ideas in physics, mathematics, and computing, sharpening both curiosity and logic with every passing semester.</p>
            <p className="emoji-paragraph">🌟 The night skies weren't just beautiful—they were a map, and I spent years learning how to read them.</p>
            <p>Through countless nights of study and wonder, I learned to see the universe not just as distant lights, but as a story written in the language of science and curiosity.</p>
            <p>{educationInfo[0].description[1]}</p>
          </div>
        </div>
      </div>
    ),
  },
  // ALX Education Page
  {
    left: (
      <div className="parchment-bg mobile-education-layout">
        {/* Header Section with Title */}
        <div className="mobile-header-section">
          <div className="page-title gold-glow-alt mobile-title">{educationInfo[1].title}</div>
        </div>
        
        {/* Leopard Image at Top */}
        <div className="mobile-animal-top">
          <img
            src="/leopard.png"
            alt="leopard"
            className="animal-img animal-leopard-edu mobile-leopard"
          />
        </div>
        
        {/* Main Content Section */}
        <div className="mobile-content-section">
          {/* Education Info */}
          <div className="mobile-education-info">
            <div className="school-name gold-glow-alt">{educationInfo[1].school}</div>
            <div className="school-degree">{educationInfo[1].degree}</div>
            <div className="school-dates">{educationInfo[1].dates}</div>
          </div>
          
          {/* Fairy Image */}
          <div className="mobile-fairy-container">
            <img
              src={fairyImages[2]}
              alt="fairy3"
              className="book-fairy fairy-edu-large-cover mobile-fairy"
            />
          </div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg mobile-description-layout">
        <div className="mobile-description-content">
          <div className="description-text alt-color mobile-description">
            <p>{educationInfo[1].description[0]}</p>
            <p className="emoji-paragraph">🔮 Like decoding ancient runes, each line of code revealed a new way to shape the digital world around me.</p>
            <p>{educationInfo[1].description[1]}</p>
          </div>
        </div>
      </div>
    ),
  },
  // Transition Spread (Chapter II)
  {
    left: (
      <div className="parchment-bg transition-spread-left" />
    ),
    right: (
      <div className="parchment-bg transition-spread-right" />
    ),
    overlay: (
      <div className="transition-chapter-overlay">
        <div className="transition-chapter-box transition-chapter-center">
          <img src="/edge-bg.png" alt="edge decoration" className="edge-bg-img" />
          <span className="chapter-title">CHAPTER II</span>
          <span className="chapter-desc">The Trials of The Craft</span>
        </div>
      </div>
    ),
    overlayClass: 'transition-bg',
  },
  // Work Experience 1
  {
    left: (
      <div className="parchment-bg mobile-work-layout">
        {/* Header Section */}
        <div className="mobile-header-section">
          <div className="page-title gold-glow-alt mobile-title">WORK EXPERIENCE</div>
        </div>
        
        {/* Dragon Image */}
        <div className="mobile-animal-top">
          <img 
            src="/dr2.png" 
            alt="dragon 2" 
            className="mobile-dragon"
          />
        </div>
        
        {/* Work Info */}
        <div className="mobile-work-info">
          <div className="work-title">{workExperiences[0].title}</div>
          <div className="work-company">{workExperiences[0].company}</div>
          <div className="work-location">{workExperiences[0].location}</div>
          <div className="work-dates">{workExperiences[0].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg mobile-description-layout">
        <div className="mobile-description-content">
          <div className="description-text alt-color mobile-description">
            <p>During my externship, I researched Expedia's competitors to help improve their advertising strategies.
I suggested ways to boost client visibility within their Retail Media Network, contributing ideas for more effective campaign planning.</p>
            <p className="emoji-paragraph">🔭 With the lens of a curious scout, I explored unfamiliar markets, bringing back insights to sharpen Expedia's vision.</p>
          </div>
        </div>
      </div>
    ),
  },
  // Work Experience 2
  {
    left: (
      <div className="parchment-bg mobile-work-layout">
        {/* Header Section */}
        <div className="mobile-header-section">
          <div className="page-title gold-glow-alt mobile-title">WORK EXPERIENCE</div>
        </div>
        
        {/* Hippo Image */}
        <div className="mobile-animal-top">
          <img 
            src="/hippo.png" 
            alt="hippo" 
            className="mobile-hippo"
          />
        </div>
        
        {/* Work Info */}
        <div className="mobile-work-info">
          <div className="work-title">{workExperiences[1].title}</div>
          <div className="work-company">{workExperiences[1].company}</div>
          <div className="work-location">{workExperiences[1].location}</div>
          <div className="work-dates">{workExperiences[1].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg mobile-description-layout">
        <div className="mobile-description-content">
          <div className="description-text alt-color mobile-description">
            <p>I helped build an escrow platform that protects both buyers and sellers during online transactions.
I handled the frontend development and collaborated on planning and team coordination.</p>
            <p>I also helped increase user engagement and visibility through interactive features and marketing ideas aimed at growing the platform's impact.</p>
            <p className="emoji-paragraph">🛡️ I acted as both builder and shield-bearer—crafting tools for trust while guiding the team through the maze of early-stage challenges.</p>
          </div>
        </div>
      </div>
    ),
  },
  // Work Experience 3
  {
    left: (
      <div className="parchment-bg mobile-work-layout">
        {/* Header Section */}
        <div className="mobile-header-section">
          <div className="page-title gold-glow-alt mobile-title">WORK EXPERIENCE</div>
        </div>
        
        {/* Dragon1 Image */}
        <div className="mobile-animal-top">
          <img 
            src="/dr1.png" 
            alt="dragon 1" 
            className="mobile-dragon"
          />
        </div>
        
        {/* Work Info */}
        <div className="mobile-work-info">
          <div className="work-title">{workExperiences[2].title}</div>
          <div className="work-company">{workExperiences[2].company}</div>
          <div className="work-location">{workExperiences[2].location}</div>
          <div className="work-dates">{workExperiences[2].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg mobile-description-layout">
        <div className="mobile-description-content">
          <div className="description-text alt-color mobile-description">
            <p>I joined the APP mission to build a space for African product leaders. My role involved designing and developing the website, helping shape a smooth and scalable user experience.</p>
            <p>I also helped grow the community through social media campaigns and digital storytelling. Alongside the team, I planned and ran events that brought in high-quality leads and meaningful connections.</p>
            <p className="emoji-paragraph">🗺️ Like a mapmaker charting new terrain, I translated bold ideas into real tools that serve a growing tribe of innovators across Africa.</p>
          </div>
        </div>
      </div>
    ),
  },
  // Ending Spread
  {
    left: (
      <div className="parchment-bg" style={{ width: '100%', height: '100%' }} />
    ),
    right: (
      <div className="parchment-bg" style={{ width: '100%', height: '100%' }} />
    ),
    overlay: (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/ending.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
          borderRadius: '32px',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      />
    ),
    overlayClass: 'ending-bg',
  },
];

const MagicalBook3D: React.FC = () => {
  const [pairIdx, setPairIdx] = useState(0);
  const [flipping, setFlipping] = useState<'none' | 'forward' | 'backward'>('none');
  const rightPageRef = useRef<HTMLDivElement>(null);
  const leftPageRef = useRef<HTMLDivElement>(null);

  const canFlipNext = pairIdx < pagePairs.length - 1;
  const canFlipPrev = pairIdx > 0;

  const handleFlip = (dir: 'next' | 'prev') => {
    if (flipping !== 'none') return;
    setFlipping(dir === 'next' ? 'forward' : 'backward');
    setTimeout(() => {
      setPairIdx(idx => {
        if (dir === 'next' && idx < pagePairs.length - 1) return idx + 1;
        if (dir === 'prev' && idx > 0) return idx - 1;
        return idx;
      });
      setFlipping('none');
    }, 300);
  };

  return (
    <div className="magical-book-bg leaves-bg">
      <div className="book-cover" />
      <div className="magical-book book-large">
        <div className="book-spine" />
        {/* Four fairies around the book */}
        <img src={fairyImages[0]} alt="fairy1" className="book-fairy fairy-top-left" />
        <img src={fairyImages[1]} alt="fairy2" className="book-fairy fairy-top-right" />
        <img src={fairyImages[2]} alt="fairy3" className="book-fairy fairy-bottom-left" />
        <img src={fairyImages[3]} alt="fairy4" className="book-fairy fairy-bottom-right" />
        {/* Left Page */}
        <div className="book-page left-page">
          <div className="page-border fantasy-border gold-crown-edge">
            <div className="gold-crown-decoration top">{GoldCrownSVG}</div>
            <div className="gold-crown-decoration bottom">{GoldCrownSVG}</div>
            <div className="gold-crown-decoration spine">{GoldCrownSVG}</div>
            <div className="page-lines" />
            <div
              className={`page-content page-flip${flipping === 'backward' ? ' flipping-backward' : ''}`}
              ref={leftPageRef}
            >
              {pagePairs[pairIdx].left}
            </div>
          </div>
        </div>
        {/* Right Page */}
        <div className="book-page right-page">
          <div className="page-border fantasy-border gold-crown-edge">
            <div className="gold-crown-decoration top">{GoldCrownSVG}</div>
            <div className="gold-crown-decoration bottom">{GoldCrownSVG}</div>
            <div className="gold-crown-decoration spine-right">{GoldCrownSVG}</div>
            <div className="page-lines" />
            <div
              className={`page-content page-flip${flipping === 'forward' ? ' flipping-forward' : ''}`}
              ref={rightPageRef}
            >
              {pagePairs[pairIdx].right}
            </div>
          </div>
        </div>
        {/* Overlay for transition spread */}
        {pagePairs[pairIdx].overlay && (
          <div className={`book-overlay${pagePairs[pairIdx].overlayClass ? ' ' + pagePairs[pairIdx].overlayClass : ''}`}>{pagePairs[pairIdx].overlay}</div>
        )}
        <div className="book-gold-edges" />
        {canFlipPrev && <button className="flip-btn left" onClick={() => handleFlip('prev')}>&lt;</button>}
        {canFlipNext && <button className="flip-btn right" onClick={() => handleFlip('next')}>&gt;</button>}
      </div>
    </div>
  );
};

export default MagicalBook3D;
