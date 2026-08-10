import { useState } from 'react';

interface DirectiveDetail {
  num: string;
  title: string;
  icon: string;
  desc: string;
  points: string[];
}

const directiveDetails: Record<string, DirectiveDetail> = {
  '01': {
    num: '01',
    title: 'Unifying Gaming & Active Lifestyles',
    icon: 'sports_esports',
    desc: 'Bridging the gap between digital competition and physical endurance. Creating apparel and platforms that serve the modern hybrid athlete.',
    points: [
      'Design of elite hybrid sportswear optimized for thermal regulation in both high-intensity physical training and stationary competitive gaming setups.',
      'Deployment of biological feedback sensors into Vibe Crew performance threads to monitor stamina, heart rate, and fatigue levels.',
      'Organization of cross-discipline tournaments linking physical performance trials with digital game matches.',
    ],
  },
  '02': {
    num: '02',
    title: 'Global Connect',
    icon: 'public',
    desc: 'Building a seamless community network from local hubs to international arenas.',
    points: [
      'Establishing tactical urban gaming lounges across metropolitan hubs starting from Bengaluru and expanding to NA and EU.',
      'Implementing high-bandwidth decentralized networks to sync telemetry data from sports fields directly to our broadcast servers.',
      'Connecting global fan communities through interactive loyalty platforms and restricted drop drops.',
    ],
  },
  '03': {
    num: '03',
    title: 'Venture Growth',
    icon: 'trending_up',
    desc: 'Strategic investments driving the next generation of sports tech.',
    points: [
      'Funding active-wear start-ups experimenting with smart fabrics and sustainable technical materials.',
      'Venture backing for next-generation sports statistics platforms and advanced real-time performance analytics.',
      'Strategic infrastructure investments in cloud gaming networks and physical sports arenas.',
    ],
  },
  '04': {
    num: '04',
    title: 'Cultural Export',
    icon: 'checkroom',
    desc: 'Taking Indian design and technical innovation to the forefront of global streetwear culture.',
    points: [
      'Bringing classic Indian weaves and aesthetics into premium industrial streetwear silhouettes.',
      'Exporting high-stakes tournament concepts engineered in Bengaluru to international athletic federations.',
      'Fostering collaborations between Indian design houses and international digital creators.',
    ],
  },
};

export default function Vision() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCard = activeId ? directiveDetails[activeId] : null;

  return (
    <div className="bg-primary-container min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow pt-24 pb-stack-xl relative z-10">
        {/* Hero Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-xl relative overflow-hidden bg-grid">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
              <p className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest mb-stack-md glow-text">
                Strategic Directive // Global Expansion
              </p>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-lg uppercase leading-none">
                From <span className="text-secondary-fixed">India</span>
                <br />to the World.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-outline-variant pl-4">
                We are engineering a global lifestyle paradigm. Rooted in Bengaluru's tech ecosystem, we export a high-performance fusion of gaming culture, venture precision, and premium apparel to international markets.
              </p>
            </div>
            <div className="col-span-1 md:col-span-4 mt-stack-lg md:mt-0 relative h-[400px]">
              <div
                className="bg-cover bg-center w-full h-full glass-panel neon-border absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/images/sports-cricket.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent z-10" />
              <div className="absolute bottom-stack-md left-stack-md z-20">
                <div className="font-data-display text-data-display text-secondary-fixed mb-1">[SYS.MAP_ACTIVE]</div>
                <div className="font-label-mono text-label-mono text-on-surface">LOC: BENGALURU -&gt; GLOBAL</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Core Pillars */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-xl">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg uppercase border-b border-outline-variant pb-4">
              Core Directives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
              {/* Card 1 */}
              <div
                onClick={() => setActiveId('01')}
                className="glass-panel p-stack-md flex flex-col justify-between group hover:neon-border transition-all md:col-span-2 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">sports_esports</span>
                  <span className="font-data-display text-data-display text-outline-variant border border-outline-variant px-2 py-1">01</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase group-hover:text-secondary-fixed transition-colors">
                    Unifying Gaming &amp; Active Lifestyles
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Bridging the gap between digital competition and physical endurance. Creating apparel and platforms that serve the modern hybrid athlete.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => setActiveId('02')}
                className="glass-panel p-stack-md flex flex-col justify-between group hover:neon-border transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">public</span>
                  <span className="font-data-display text-data-display text-outline-variant border border-outline-variant px-2 py-1">02</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase group-hover:text-secondary-fixed transition-colors">Global Connect</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Building a seamless community network from local hubs to international arenas.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => setActiveId('03')}
                className="glass-panel p-stack-md flex flex-col justify-between group hover:neon-border transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">trending_up</span>
                  <span className="font-data-display text-data-display text-outline-variant border border-outline-variant px-2 py-1">03</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase group-hover:text-secondary-fixed transition-colors">Venture Growth</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strategic investments driving the next generation of sports tech.
                  </p>
                </div>
              </div>

              {/* Card 4 Image */}
              <div
                onClick={() => setActiveId('04')}
                className="glass-panel relative overflow-hidden group md:col-span-2 cursor-pointer border border-[#262626] hover:border-secondary-fixed transition-colors"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity"
                  src="/images/apparel-shorts.png"
                  alt="Cultural Export"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-transparent p-stack-md flex flex-col justify-end">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase group-hover:text-secondary-fixed transition-colors">Cultural Export</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Taking Indian design and technical innovation to the forefront of global streetwear culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Modal Overlay - Full Screen Takeover */}
      {activeCard && (
        <div className="fixed inset-0 z-50 bg-background overflow-y-auto pt-28 px-margin-mobile md:px-margin-desktop pb-stack-xl flex flex-col">
          <div className="max-w-container-max w-full mx-auto flex-grow flex flex-col gap-stack-lg">
            {/* Back Navigation Bar */}
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
              <button
                onClick={() => setActiveId(null)}
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-fixed transition-colors flex items-center gap-2 uppercase"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                [ Back to Vision ]
              </button>
              <span className="font-data-display text-data-display text-secondary-fixed border border-secondary-fixed px-3 py-1">
                SYS.DIR_{activeCard.num}
              </span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mt-4 flex-grow">
              {/* Left Side: Branding / Identity */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-fixed text-6xl">
                    {activeCard.icon}
                  </span>
                  <span className="font-data-display text-3xl font-extrabold text-white">
                    {activeCard.num}
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-white uppercase leading-tight">
                  {activeCard.title}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-secondary-fixed pl-4 mt-4">
                  {activeCard.desc}
                </p>
              </div>

              {/* Right Side: Detailed Strategy */}
              <div className="md:col-span-7 glass-panel p-stack-lg flex flex-col gap-6 border border-[#262626]">
                <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest border-b border-[#262626] pb-2">
                  // DEPLOYMENT_STRATEGY_TELEMETRY
                </span>
                <ul className="flex flex-col gap-6">
                  {activeCard.points.map((pt, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-data-display text-secondary-fixed mt-1">0{i + 1}.</span>
                      <p className="font-body-md text-body-lg text-on-surface">
                        {pt}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Close Action */}
            <div className="border-t border-outline-variant/30 pt-6 mt-auto flex justify-end">
              <button
                onClick={() => setActiveId(null)}
                className="btn-primary px-8 py-4 font-label-mono text-label-mono uppercase font-bold"
              >
                Return to Vision
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
