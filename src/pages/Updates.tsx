import { useState } from 'react';

interface UpdateItem {
  id: string;
  date: string;
  title: string;
  category: string;
  image: string;
  detail: string;
  points: string[];
}

const initialUpdates: UpdateItem[] = [
  {
    id: 'UPDATE_01',
    date: '2024.10.15',
    title: 'SmartSportz.in expands its sporting events',
    category: 'ESPORTS',
    image: '/images/sports-badminton.png',
    detail: 'SmartSportz.in is proud to announce the rollout of regional badminton league trials, following our successful launch in southern zones. These sporting events will combine traditional athletic tournaments with real-time match stats and interactive viewer polling hubs.',
    points: [
      'Registration opens next Monday for elite regional clubs.',
      'Integrating smart tracking sensors into active badminton rackets.',
      'Winners qualify for the national sports technology championships in December.',
    ],
  },
  {
    id: 'UPDATE_02',
    date: '2024.10.10',
    title: 'Vibe Crew prepares for new product launches',
    category: 'APPAREL',
    image: '/images/apparel-shoes.png',
    detail: "Vibe Crew continues to push technical sportswear boundary lines with the release of the upcoming 'Cyber-Volt' runner shoe collection. Built from high-durability fabrics, complete with reflective neon linings and reinforced custom cushioning.",
    points: [
      'Limited launch: Only 500 pairs generated for the initial drop.',
      'Reflective piping for enhanced visibility during night training runs.',
      'Eco-friendly materials constructed for maximum physical durability.',
    ],
  },
  {
    id: 'ANNOUNCEMENT',
    date: '2024.10.01',
    title: 'VC Sports And Life Style Pvt Ltd announces new partnership',
    category: 'CORPORATE',
    image: '/images/sports-football.png',
    detail: 'VC Sports And Life Style Pvt Ltd has established a new joint venture with international sports technology groups to deploy active game-broadcasting systems directly from Bengaluru HQ. This strategic partnership drives our global connect directive forward.',
    points: [
      'Joint investment pool focusing on advanced sports technology and hardware.',
      'Broadcast upgrades featuring real-time biometric overlay interfaces.',
      'Establishing regional training facilities with smart feedback tools.',
    ],
  },
];

const extraUpdates: UpdateItem[] = [
  {
    id: 'UPDATE_03',
    date: '2024.09.28',
    title: 'New volleyball capsule collection drops next week',
    category: 'APPAREL',
    image: '/images/sports-volleyball.png',
    detail: "The Vibe Crew 'Neon Eclipse' volleyball collection launches soon, featuring high-performance technical shorts, thermal shirts, and premium compression wear. Engineered for elite gameplay under extreme outdoor heat or indoor spotlights.",
    points: [
      'Sweat-wicking cooling fabric technology.',
      'Modular utility pockets designed for fitness trackers.',
      'High-stretch construction optimized for extreme physical motion.',
    ],
  },
  {
    id: 'UPDATE_04',
    date: '2024.09.20',
    title: 'Cricket tournament prize pool increased to $50,000',
    category: 'ESPORTS',
    image: '/images/sports-cricket.png',
    detail: 'The upcoming national cricket series will feature a total prize pool of $50,000. Registration opens next Monday for elite regional teams, who will match off in a double-elimination bracket inside our partner smart arenas.',
    points: [
      'Interactive viewer rewards program offering exclusive Vibe Crew drops.',
      'Double-elimination matches broadcasted in ultra-low latency.',
      'Grand finals hosted at the Whitefield smart arena.',
    ],
  },
  {
    id: 'UPDATE_05',
    date: '2024.09.12',
    title: 'Tech park facility upgrades: active hybrid gaming pods',
    category: 'CORPORATE',
    image: '/images/apparel-shorts.png',
    detail: 'Renovations have concluded for the hybrid gaming pods at the Sigma Tech Park HQ. The pods are now fully operational, equipped with bio-mechanical gaming chairs, premium technical cooling systems, and physical training zones.',
    points: [
      'Ergonomic active pods designed for pro players and partners.',
      'High-speed low-latency broadband setups direct-wired.',
      'Equipped with physical recovery zones and stretching equipment.',
    ],
  },
];

export default function Updates() {
  const [items, setItems] = useState<UpdateItem[]>(initialUpdates);
  const [hasMore, setHasMore] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleLoadMore = () => {
    setItems((prev) => [...prev, ...extraUpdates]);
    setHasMore(false);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <div className="crt-overlay" />
      <main className="flex-grow pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <header className="mb-stack-xl border-b border-surface-variant pb-stack-lg">
          <h1 className="font-headline-xl text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[80px] break-all leading-none mb-stack-sm text-secondary-fixed">
            COMMUNICATIONS_FEED
          </h1>
          <p className="font-data-display text-data-display text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>terminal</span>
            SYS.LOG // LATEST ANNOUNCEMENTS
          </p>
        </header>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {items.map((item, i) => (
            <article
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`glass-panel p-stack-lg flex flex-col group neon-border-hover transition-all duration-300 cursor-pointer border border-transparent${i === 2 && items.length === 3 ? ' lg:col-span-1 md:col-span-2' : ''
                }`}
            >
              <div className="mb-stack-md flex justify-between items-start">
                <span className="font-label-mono text-label-mono text-secondary-fixed border border-secondary-fixed px-2 py-1">
                  {item.id}
                </span>
                <span className="font-data-display text-data-display text-on-surface-variant">{item.date}</span>
              </div>
              <div className="h-48 bg-surface-container-low mb-stack-md relative overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
              </div>
              <h2 className="font-headline-md text-headline-md mb-stack-md flex-grow text-on-surface group-hover:text-secondary transition-colors">
                {item.title}
              </h2>
              <div className="mt-auto pt-stack-md border-t border-surface-variant flex justify-between items-center">
                <span className="font-label-mono text-label-mono text-on-surface-variant">CATEGORY: {item.category}</span>
                <span className="font-data-display text-data-display text-secondary-fixed group-hover:translate-x-2 transition-transform duration-300">
                  -&gt;
                </span>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-stack-xl flex justify-center">
            <button
              onClick={handleLoadMore}
              className="font-label-mono text-label-mono text-on-surface border border-outline-variant px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300 tracking-widest uppercase"
            >
              LOAD_MORE_DATA
            </button>
          </div>
        )}
      </main>

      {/* Details Modal Overlay - Full Screen Takeover */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-background overflow-y-auto pt-28 px-margin-mobile md:px-margin-desktop pb-stack-xl flex flex-col">
          <div className="max-w-container-max w-full mx-auto flex-grow flex flex-col gap-stack-lg">
            {/* Back Navigation Bar */}
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
              <button
                onClick={() => setActiveId(null)}
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-2 uppercase"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                [ Back to Feed ]
              </button>
              <span className="font-data-display text-data-display text-secondary-fixed border border-secondary-fixed px-3 py-1">
                SYS.{activeItem.id}
              </span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mt-4 flex-grow">
              {/* Left Side: Image & Meta */}
              <div className="md:col-span-6 flex flex-col gap-6">
                <span className="font-label-mono text-label-mono text-secondary-fixed">
                  TRANSMISSION_DATE // {activeItem.date}
                </span>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-white uppercase leading-tight">
                  {activeItem.title}
                </h2>
                {/* Feature Image */}
                <div className="h-80 w-full bg-surface-container-low overflow-hidden relative border border-surface-variant mt-2">
                  <img
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                    src={activeItem.image}
                    alt={activeItem.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
              </div>

              {/* Right Side: Detailed Log */}
              <div className="md:col-span-6 glass-panel p-stack-lg flex flex-col gap-6 border border-[#262626]">
                <p className="font-body-lg text-body-lg text-on-surface border-l-2 border-secondary-fixed pl-4">
                  {activeItem.detail}
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest border-b border-[#262626] pb-2">
                    // KEY_DETAILS_OVERVIEW
                  </span>
                  <ul className="flex flex-col gap-4">
                    {activeItem.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <span className="font-data-display text-secondary-fixed mt-1">0{idx + 1}.</span>
                        <p className="font-body-md text-body-lg text-on-surface">
                          {pt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Close Action */}
            <div className="border-t border-outline-variant/30 pt-6 mt-auto flex justify-between items-center">
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                DEPARTMENT: {activeItem.category}
              </span>
              <button
                onClick={() => setActiveId(null)}
                className="btn-primary px-8 py-4 font-label-mono text-label-mono uppercase font-bold"
              >
                Return to Updates
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
