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
    company: 'Tech Solutions Ltd',
    location: 'Nairobi, Kenya',
    dates: 'Jan 2023 - Present',
    description: `During my externship, I researched Expedia's competitors to help improve their advertising strategies.\nI suggested ways to boost client visibility within their Retail Media Network, contributing ideas for more effective campaign planning.\n🔭 With the lens of a curious scout, I explored unfamiliar markets, bringing back insights to sharpen Expedia's vision.`
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Ventures',
    location: 'Remote',
    dates: 'Jun 2022 - Dec 2022',
    description: `I helped build an escrow platform that protects both buyers and sellers during online transactions.\nI handled the frontend development and collaborated on planning and team coordination.\nI also helped increase user engagement and visibility through interactive features and marketing ideas aimed at growing the platform's impact.\n🛡️ I acted as both builder and shield-bearer—crafting tools for trust while guiding the team through the maze of early-stage challenges.`
  },
  {
    title: 'Intern',
    company: 'InnovateX',
    location: 'Nairobi, Kenya',
    dates: 'Jan 2022 - May 2022',
    description: `I joined the APP mission to build a space for African product leaders. My role involved designing and developing the website, helping shape a smooth and scalable user experience.\nI also helped grow the community through social media campaigns and digital storytelling. Alongside the team, I planned and ran events that brought in high-quality leads and meaningful connections.\n🗺️ Like a mapmaker charting new terrain, I translated bold ideas into real tools that serve a growing tribe of innovators across Africa.`
  }
];

const introMessage = "Welcome to Kendi's journey";

const pagePairs = [
  // Intro Page
  {
    left: (
      <div className="page-border fantasy-border gold-crown-edge">
        <div className="intro-bg-left" />
        <div className="intro-welcome-msg">
          {introMessage.split(' ').map((word, i) => (
            <span className="intro-magic-word" key={i} style={{ animationDelay: `${i * 0.14}s`, marginRight: '0.45em' }}>{word}</span>
          ))}
        </div>
      </div>
    ),
    right: (
      <div className="page-border fantasy-border gold-crown-edge">
        <div className="intro-bg-right" />
        <div className="intro-titlebox">
          <div className="book-title-main">Explorer's Journal</div>
          <div className="book-title-sub">Chronicles of a Cosmic Coder</div>
        </div>
      </div>
    ),
  },
  // University Education Page
  {
    left: (
      <div className="parchment-bg" style={{ 
        position: 'relative', 
        minHeight: '100%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        height: '100%' 
      }}>
        {/* Top section: absolute container for info+fairy */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: 0,
            right: '32px',
            zIndex: 3,
            width: 'calc(100% - 32px)',
            height: '380px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
          }}
        >
          {/* Top row: Education Info left, Fairy right */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'flex-start', 
            width: '100%' 
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start', 
              gap: '0.6em', 
              minWidth: '240px', 
              maxWidth: '380px', 
              background: 'rgba(255,255,255,0.01)', 
              padding: '16px 0 16px 0', 
              borderRadius: '18px', 
              boxShadow: '0 2px 16px #ffd70022', 
              marginRight: 'auto', 
              marginLeft: 0 
            }}>
              <div className="page-title gold-glow-alt">{educationInfo[0].title}</div>
              <div className="school-name gold-glow-alt">{educationInfo[0].school}</div>
              <div className="school-degree">{educationInfo[0].degree}</div>
              <div className="school-dates">{educationInfo[0].dates}</div>
              <div className="school-location">{educationInfo[0].location}</div>
            </div>
            <img
              src="/fairy4.png"
              alt="fairy4"
              className="book-fairy fairy-edu-large-cover"
              style={{
                width: '200px',
                height: '250px',
                minWidth: '140px',
                minHeight: '180px',
                objectFit: 'contain',
                marginLeft: 'auto',
                marginRight: '40px',
                opacity: 0.98,
                filter: 'drop-shadow(0 0 80px #fff7b2cc) drop-shadow(0 0 40px #FFD700)',
              }}
            />
          </div>
        </div>
        {/* Bottom section: Elephant image, always visible and centered */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'center', 
          minHeight: '280px',
          marginTop: '340px'
        }}>
          <img
            src="/elephant.png"
            alt="elephant"
            className="animal-elephant-edu elephant-animated"
            style={{
              width: '580px',
              height: '320px',
              objectFit: 'contain',
              opacity: 0.98,
              filter: 'drop-shadow(0 0 48px #ffd70088)',
              position: 'static',
            }}
          />
        </div>
        <div className="lined-content" style={{ height: '100%' }} />
      </div>
    ),
    right: (
      <div className="parchment-bg">
        <div className="lined-content" style={{ 
          width: '100%', 
          height: '100%',
          padding: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div className="description-text alt-color" style={{
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            lineHeight: '1.5',
            fontSize: '1.3rem'
          }}>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>{educationInfo[0].description[0]}</p>
            <p style={{ marginBottom: '0', textAlign: 'justify' }}>{educationInfo[0].description[1]}</p>
          </div>
        </div>
      </div>
    ),
  },
  // ALX Education Page
  {
    left: (
      <div className="parchment-bg" style={{ position: 'relative', height: '100%' }}>
        {/* Enlarged Leopard at the top */}
        <img
          src="/leopard.png"
          alt="leopard"
          className="animal-img animal-leopard-edu animal-large"
          style={{
            width: '180px',
            height: 'auto',
            objectFit: 'contain',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            opacity: 0.9,
            filter: 'drop-shadow(0 0 24px #ffd70088)'
          }}
        />
        {/* Bottom row: Fairy left, Info right */}
        <div className="lined-content" style={{ 
          height: '100%', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', 
          paddingBottom: '48px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
            width: '100%', 
            position: 'relative', 
            marginBottom: 0, 
            zIndex: 3 
          }}>
            {/* Fairy on the left */}
            <img
              src={fairyImages[2]}
              alt="fairy3"
              className="book-fairy fairy-edu-large-cover"
              style={{ 
                width: '220px',
                height: '240px',
                minWidth: '80px',
                minHeight: '100px',
                position: 'relative', 
                left: 0, 
                bottom: 0, 
                zIndex: 2, 
                opacity: 0.98, 
                filter: 'drop-shadow(0 0 40px #fff7b2cc) drop-shadow(0 0 16px #FFD700)' 
              }}
            />
            {/* Education info on the right */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-end', 
              maxWidth: '320px',
              background: 'rgba(255,255,255,0.01)', 
              padding: '14px 16px',
              borderRadius: '18px', 
              boxShadow: '0 2px 16px #ffd70022' 
            }}>
              <div className="page-title gold-glow-alt">{educationInfo[1].title}</div>
              <div className="school-name gold-glow-alt">{educationInfo[1].school}</div>
              <div className="school-degree">{educationInfo[1].degree}</div>
              <div style={{ height: '0.7em' }} />
              <div className="school-dates">{educationInfo[1].dates}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg">
        <div className="lined-content" style={{ 
          width: '100%', 
          height: '100%',
          padding: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div className="description-text alt-color" style={{
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            lineHeight: '1.5',
            fontSize: '1.3rem'
          }}>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>{educationInfo[1].description[0]}</p>
            <p style={{ marginBottom: '0', textAlign: 'justify' }}>{educationInfo[1].description[1]}</p>
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
      <div className="parchment-bg" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%', 
        position: 'relative' 
      }}>
        {/* Enlarged Dragon at top-middle */}
        <div style={{ 
          position: 'absolute', 
          top: '32px', 
          left: 0, 
          right: 0, 
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none', 
          zIndex: 2 
        }}>
          <img src="/dr2.png" alt="dragon 2" style={{ 
            width: '180px',
            height: '180px',
            objectFit: 'contain', 
            marginBottom: '0.8em',
            filter: 'drop-shadow(0 0 32px #ffd70088)' 
          }} />
        </div>
        {/* Work Experience centered below image */}
        <div className="lined-content" style={{ 
          width: '100%', 
          zIndex: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', 
          minHeight: '60%', 
          marginTop: '160px'
        }}>
          <div className="page-title gold-glow-alt">WORK EXPERIENCE</div>
          <div className="work-title">{workExperiences[0].title}</div>
          <div className="work-company">{workExperiences[0].company}</div>
          <div className="work-location">{workExperiences[0].location}</div>
          <div className="work-dates">{workExperiences[0].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg">
        <div className="lined-content" style={{ 
          width: '100%', 
          height: '100%',
          padding: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div className="description-text alt-color" style={{
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            lineHeight: '1.5',
            fontSize: '1.3rem'
          }}>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>During my externship, I researched Expedia's competitors to help improve their advertising strategies.
I suggested ways to boost client visibility within their Retail Media Network, contributing ideas for more effective campaign planning.</p>
            <p style={{ marginBottom: '0', textAlign: 'justify' }}>🔭 With the lens of a curious scout, I explored unfamiliar markets, bringing back insights to sharpen Expedia's vision.</p>
          </div>
        </div>
      </div>
    ),
  },
  // Work Experience 2
  {
    left: (
      <div className="parchment-bg" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%', 
        position: 'relative' 
      }}>
        {/* Enlarged Hippo at top-middle */}
        <div style={{ 
          position: 'absolute', 
          top: '32px', 
          left: 0, 
          right: 0, 
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none', 
          zIndex: 2 
        }}>
          <img src="/hippo.png" alt="hippo" style={{ 
            width: '220px',
            height: '220px',
            objectFit: 'contain', 
            marginBottom: '1.0em',
            filter: 'drop-shadow(0 0 32px #ffd70088)' 
          }} />
        </div>
        {/* Work Experience centered below image */}
        <div className="lined-content" style={{ 
          width: '100%', 
          zIndex: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', 
          minHeight: '60%', 
          marginTop: '180px'
        }}>
          <div className="page-title gold-glow-alt">WORK EXPERIENCE</div>
          <div className="work-title">{workExperiences[1].title}</div>
          <div className="work-company">{workExperiences[1].company}</div>
          <div className="work-location">{workExperiences[1].location}</div>
          <div className="work-dates">{workExperiences[1].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg">
        <div className="lined-content" style={{ 
          width: '100%', 
          height: '100%',
          padding: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div className="description-text alt-color" style={{
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            lineHeight: '1.5',
            fontSize: '1.3rem'
          }}>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>I helped build an escrow platform that protects both buyers and sellers during online transactions.
I handled the frontend development and collaborated on planning and team coordination.</p>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>I also helped increase user engagement and visibility through interactive features and marketing ideas aimed at growing the platform's impact.</p>
            <p style={{ marginBottom: '0', textAlign: 'justify' }}>🛡️ I acted as both builder and shield-bearer—crafting tools for trust while guiding the team through the maze of early-stage challenges.</p>
          </div>
        </div>
      </div>
    ),
  },
  // Work Experience 3
  {
    left: (
      <div className="parchment-bg" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%', 
        position: 'relative' 
      }}>
        {/* Enlarged Dragon1 at top-middle */}
        <div style={{ 
          position: 'absolute', 
          top: '32px', 
          left: 0, 
          right: 0, 
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none', 
          zIndex: 2 
        }}>
          <img src="/dr1.png" alt="dragon 1" style={{ 
            width: '180px',
            height: '180px',
            objectFit: 'contain', 
            marginBottom: '0.8em',
            filter: 'drop-shadow(0 0 32px #ffd70088)' 
          }} />
        </div>
        {/* Work Experience centered below image */}
        <div className="lined-content" style={{ 
          width: '100%', 
          zIndex: 1, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', 
          minHeight: '60%', 
          marginTop: '160px'
        }}>
          <div className="page-title gold-glow-alt">WORK EXPERIENCE</div>
          <div className="work-title">{workExperiences[2].title}</div>
          <div className="work-company">{workExperiences[2].company}</div>
          <div className="work-location">{workExperiences[2].location}</div>
          <div className="work-dates">{workExperiences[2].dates}</div>
        </div>
      </div>
    ),
    right: (
      <div className="parchment-bg">
        <div className="lined-content" style={{ 
          width: '100%', 
          height: '100%',
          padding: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div className="description-text alt-color" style={{
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            lineHeight: '1.5',
            fontSize: '1.3rem'
          }}>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>I joined the APP mission to build a space for African product leaders. My role involved designing and developing the website, helping shape a smooth and scalable user experience.</p>
            <p style={{ marginBottom: '1em', textAlign: 'justify' }}>I also helped grow the community through social media campaigns and digital storytelling. Alongside the team, I planned and ran events that brought in high-quality leads and meaningful connections.</p>
            <p style={{ marginBottom: '0', textAlign: 'justify' }}>🗺️ Like a mapmaker charting new terrain, I translated bold ideas into real tools that serve a growing tribe of innovators across Africa.</p>
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
    }, 700);
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
