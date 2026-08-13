import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      'Organization of cross-discipline tournaments linking physical performance trials with digital game matches.'
    ]
  },
  '02': {
    num: '02',
    title: 'Global Connect',
    icon: 'public',
    desc: 'Building a seamless community network from local hubs to international arenas.',
    points: [
      'Establishing tactical urban gaming lounges across metropolitan hubs starting from Bengaluru and expanding to NA and EU.',
      'Implementing high-bandwidth decentralized networks to sync telemetry data from sports fields directly to our broadcast servers.',
      'Connecting global fan communities through interactive loyalty platforms and restricted drop drops.'
    ]
  },
  '03': {
    num: '03',
    title: 'Venture Growth',
    icon: 'trending_up',
    desc: 'Strategic investments driving the next generation of sports tech.',
    points: [
      'Funding active-wear start-ups experimenting with smart fabrics and sustainable technical materials.',
      'Venture backing for next-generation sports statistics platforms and advanced real-time performance analytics.',
      'Strategic infrastructure investments in cloud gaming networks and physical sports arenas.'
    ]
  },
  '04': {
    num: '04',
    title: 'Cultural Export',
    icon: 'checkroom',
    desc: 'Taking Indian design and technical innovation to the forefront of global streetwear culture.',
    points: [
      'Bringing classic Indian weaves and aesthetics into premium industrial streetwear silhouettes.',
      'Exporting high-stakes tournament concepts engineered in Bengaluru to international athletic federations.',
      'Fostering collaborations between Indian design houses and international digital creators.'
    ]
  }
};

export default function CorporateHub() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCard = activeId ? directiveDetails[activeId] : null;

  return (
    <div className="antialiased overflow-x-hidden flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-outline-variant/30">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Background"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              src="/images/sports-cricket.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]" />
            {/* Dynamic Overlay Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#c3f400 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto flex flex-col gap-stack-lg items-start md:items-center text-left md:text-center mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-secondary-fixed/30 bg-surface/50 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest">
                Global Ecosystem Initiated
              </span>
            </div>

            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface uppercase max-w-5xl leading-tight">
              Building The <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed to-tertiary-fixed">
                Future Of Sports
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Creating a global sports ecosystem through high-stakes sporting events, advanced technology integrations, and performance-driven tactical apparel.
            </p>

            <div className="flex flex-col sm:flex-row gap-stack-md mt-stack-md w-full sm:w-auto">
              <Link
                to="/brands"
                className="bg-secondary-fixed text-on-secondary-fixed font-headline-md text-[18px] font-bold px-8 py-4 hover:bg-tertiary-fixed transition-colors duration-300 flex items-center justify-center gap-2 uppercase"
              >
                Explore Our Brands <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white font-headline-md text-[18px] font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 uppercase"
              >
                Get in Touch
              </Link>
            </div>

            {/* Tactical Data Readout */}
            <div className="hidden md:flex absolute bottom-8 left-margin-desktop font-label-mono text-label-mono text-on-surface-variant gap-8 opacity-70">
              <div className="flex flex-col"><span>SYS.STATUS</span><span className="text-secondary-fixed">ONLINE</span></div>
              <div className="flex flex-col"><span>LOCATION</span><span>BENGALURU_HQ</span></div>
              <div className="flex flex-col"><span>SECTOR</span><span>SPORTS_TECH</span></div>
            </div>
          </div>
        </section>

        {/* 2. Introduction Section */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop border-b border-outline-variant/30 bg-[#0A0A0A]">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-5 flex flex-col gap-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
                We Are Building More Than a <span className="text-secondary-fixed">Sports Brand</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We are engineering an entire ecosystem. A convergence of elite athletic competition, cultural streetwear, and global community building.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-gutter lg:pl-12">
              <div className="glass-panel p-6 flex flex-col gap-4 border-t-2 border-t-secondary-fixed hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stadium</span>
                <h3 className="font-headline-md text-[20px] text-white uppercase">Sports Events</h3>
                <p className="font-label-mono text-label-mono text-on-surface-variant">High-stakes tournaments designed for the modern athlete.</p>
              </div>
              <div className="glass-panel p-6 flex flex-col gap-4 border-t-2 border-t-tertiary-fixed hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>checkroom</span>
                <h3 className="font-headline-md text-[20px] text-white uppercase">Sportswear</h3>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Tactical, performance-driven lifestyle apparel.</p>
              </div>
              <div className="glass-panel p-6 flex flex-col gap-4 border-t-2 border-t-white hover:-translate-y-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <h3 className="font-headline-md text-[20px] text-white uppercase">Global Vision</h3>
                <p className="font-label-mono text-label-mono text-on-surface-variant">Scaling from India to establish a worldwide footprint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Ecosystem (Bento Grid) */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-[#0f0f0f] border-b border-outline-variant/30">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Our Ecosystem</h2>
              <span className="font-label-mono text-label-mono text-on-surface-variant hidden md:block">01 // BRANDS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter h-auto lg:h-[600px]">
              {/* SmartSportz.in Card */}
              <div className="relative group overflow-hidden border border-[#262626] bg-[#1A1A1A] flex flex-col h-full min-h-[400px]">
                <div className="absolute inset-0 z-0">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity"
                    style={{
                      backgroundImage: "url('/images/sports-football.png')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>
                <div className="relative z-10 p-stack-lg flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-lg text-[40px] text-white font-extrabold uppercase tracking-tight">SMARTSPORTZ.IN</h3>
                    <div className="px-3 py-1 border border-secondary-fixed text-secondary-fixed font-label-mono text-[10px] uppercase">Events Division</div>
                  </div>
                  <div className="flex flex-col gap-6 mt-auto">
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                      Organizing premier sports events and tournaments that push the boundaries of athletic competition and technological integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Cricket', 'Football', 'Badminton', 'Volleyball', 'Tennis', 'Chess'].map((sport) => (
                        <span key={sport} className="font-label-mono text-[11px] px-2 py-1 border border-[#444748] text-white uppercase bg-black/50">
                          {sport}
                        </span>
                      ))}
                    </div>
                    <Link to="/brands" className="mt-4 self-start font-data-display text-data-display text-secondary-fixed flex items-center gap-2 hover:gap-4 transition-all duration-300 uppercase">
                      Visit SmartSportz.in <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* VIBE CREW Card */}
              <div className="relative group overflow-hidden border border-[#262626] bg-[#1A1A1A] flex flex-col h-full min-h-[400px]">
                <div className="absolute inset-0 z-0">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity"
                    style={{
                      backgroundImage: "url('/images/apparel-tshirt.png')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>
                <div className="relative z-10 p-stack-lg flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-lg text-[40px] text-white font-extrabold uppercase tracking-tight">VIBE CREW</h3>
                    <div className="px-3 py-1 border border-tertiary-fixed text-tertiary-fixed font-label-mono text-[10px] uppercase">Lifestyle Division</div>
                  </div>
                  <div className="flex flex-col gap-6 mt-auto">
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                      Engineered sportswear and tactical lifestyle accessories designed for peak performance and unapologetic street aesthetic.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Shoes', 'T-Shirts', 'Shorts & Trousers', 'Watches', 'Accessories'].map((item) => (
                        <span key={item} className="font-label-mono text-[11px] px-2 py-1 border border-[#444748] text-white uppercase bg-black/50">
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link to="/brands" className="mt-4 self-start font-data-display text-data-display text-white flex items-center gap-2 hover:gap-4 transition-all duration-300 uppercase">
                      Visit VIBE CREW <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Unified Vision & Mission Section */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] border-b border-outline-variant/30">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Ecosystem Core Philosophy</h2>
              <span className="font-label-mono text-label-mono text-on-surface-variant hidden md:block">02 // UNIFIED_DIRECTIVES</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Vision Card */}
              <div className="glass-panel p-stack-lg border border-[#262626] relative overflow-hidden group hover:border-secondary-fixed transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 font-data-display text-[100px] leading-none text-white select-none">
                  VISION
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">visibility</span>
                  <h3 className="font-headline-md text-headline-md text-white uppercase">A Connected Playground</h3>
                </div>
                <p className="font-body-md text-body-lg text-on-surface-variant mb-6">
                  To merge physical athletic grit with digital supremacy, building a seamless sports ecosystem where pro-players, server-side athletes, and design-minded enthusiasts exist on the same competitive canvas.
                </p>
                <div className="border-t border-[#262626] pt-6 mt-auto">
                  <span className="font-label-mono text-xs text-secondary-fixed uppercase block mb-3">// BRAND_INTEGRATIONS</span>
                  <ul className="space-y-2 font-body-md text-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-fixed">■</span>
                      <span><strong>SmartSportz.in</strong>: Interactive arenas merging biometric stats and live broadcasting loops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-fixed">■</span>
                      <span><strong>VIBE CREW</strong>: High-durability sportswear optimized for thermal regulation in both servers and courts.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mission Card */}
              <div className="glass-panel p-stack-lg border border-[#262626] relative overflow-hidden group hover:border-tertiary-fixed transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 font-data-display text-[100px] leading-none text-white select-none">
                  MISSION
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-tertiary-fixed text-4xl">rocket_launch</span>
                  <h3 className="font-headline-md text-headline-md text-white uppercase">Empower the Vanguard</h3>
                </div>
                <p className="font-body-md text-body-lg text-on-surface-variant mb-6">
                  To design, engineer, and deploy high-stakes competitive frameworks and tactical utility wear that enables the vanguard to move, perform, and live better—on the court, in the server, and on the street.
                </p>
                <div className="border-t border-[#262626] pt-6 mt-auto">
                  <span className="font-label-mono text-xs text-tertiary-fixed uppercase block mb-3">// MISSION_DELIVERABLES</span>
                  <ul className="space-y-2 font-body-md text-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-fixed">■</span>
                      <span>Incubating emerging talent pools and constructing local smart gaming infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-fixed">■</span>
                      <span>Exporting Indian textile design and technical telemetry innovation directly to global markets.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Core Directives Bento (From original Vision page) */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-xl bg-[#0f0f0f] border-b border-outline-variant/30">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Core Directives</h2>
              <span className="font-label-mono text-label-mono text-on-surface-variant hidden md:block">03 // OPERATIONAL_DIRECTIVES</span>
            </div>
            
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

        {/* 6. Clients & Partners Section (Featuring Brillaris) */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] border-b border-outline-variant/30">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Proving Grounds // Clients &amp; Partners</h2>
              <span className="font-label-mono text-label-mono text-on-surface-variant hidden md:block">04 // VALIDATION</span>
            </div>

            {/* Brillaris Spotlight Card */}
            <div className="glass-panel p-stack-lg border-l-4 border-l-secondary-fixed flex flex-col lg:flex-row gap-gutter items-center">
              <div className="lg:w-2/3 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-secondary-fixed text-secondary-fixed font-label-mono text-xs uppercase self-start">
                  Premier Integration Profile
                </div>
                <h3 className="font-headline-lg text-[32px] sm:text-[40px] text-white font-extrabold uppercase tracking-tight">
                  BRILLARIS
                </h3>
                <p className="font-body-md text-body-lg text-on-surface-variant">
                  Brillaris, the elite sports scouting and national athletics tournament group, has partnered with VC Sports to fully outfit their national badminton and cricket championship leagues.
                </p>
                <p className="font-body-md text-sm text-on-surface-variant mt-2 border-l border-outline-variant/30 pl-4">
                  Over 1,200 active league competitors are fully equipped with custom VIBE CREW utility uniforms integrated with SmartSportz sensor networks. Real-time telemetry data is synced directly to Brillaris coaching dashboards and live streaming streams.
                </p>
              </div>

              {/* Testimonial Quote */}
              <div className="lg:w-1/3 glass-panel p-6 border border-[#262626] bg-[#161616] relative flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary-fixed text-5xl opacity-20 absolute top-2 right-2">format_quote</span>
                <p className="font-body-md text-sm text-white italic relative z-10 leading-relaxed mb-6">
                  "The real-time telemetry overlays completely overhauled our athletic evaluation. VIBE CREW's compression design keeps our competitors at optimal thermal efficiency under intense broadcasts."
                </p>
                <div className="mt-auto">
                  <h4 className="font-label-mono text-xs text-white uppercase">Dr. Ananya Nair</h4>
                  <p className="font-label-mono text-[10px] text-on-surface-variant uppercase">Director of Performance, Brillaris</p>
                </div>
              </div>
            </div>

            {/* Small logos of other partners */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter mt-8 text-center items-center">
              {[
                { name: 'SIGMA ARENAS', desc: 'SMART FACILITY GROUP' },
                { name: 'GAMMA DIGITAL', desc: 'BROADCAST PARTNER' },
                { name: 'DELTA SPORTS', desc: 'DISTRIBUTION HUB' },
                { name: 'OMEGA VENTURES', desc: 'STRATEGIC EQUITY' }
              ].map((p) => (
                <div key={p.name} className="glass-panel py-6 px-4 border border-[#262626] flex flex-col justify-center gap-1 hover:bg-[#1A1A1A] transition-colors">
                  <span className="font-headline-md text-[18px] text-white tracking-widest uppercase">{p.name}</span>
                  <span className="font-label-mono text-[9px] text-on-surface-variant uppercase">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Corporate Values */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop border-b border-outline-variant/30 bg-[#0f0f0f]">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex flex-col items-center text-center gap-4 mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">What We Stand For</h2>
              <div className="w-24 h-1 bg-secondary-fixed" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                { num: '01.', color: 'text-secondary-fixed', border: 'border-l-secondary-fixed', title: 'Global Ambition', desc: 'Building a brand ecosystem that transcends borders, originating from India to dominate global markets.', offset: '' },
                { num: '02.', color: 'text-white', border: 'border-l-white', title: 'Sports First', desc: 'Athletic integrity is at the core of every product we engineer and every event we host.', offset: 'lg:translate-y-8' },
                { num: '03.', color: 'text-tertiary-fixed', border: 'border-l-tertiary-fixed', title: 'Innovation', desc: 'Relentless pursuit of technological advancement in sportswear materials and event broadcasting.', offset: '' },
                { num: '04.', color: 'text-[#8e9192]', border: 'border-l-[#444748]', title: 'Community', desc: 'Fostering a tribal loyalty among athletes, gamers, and streetwear enthusiasts.', offset: 'lg:translate-y-8' },
              ].map(({ num, color, border, title, desc, offset }) => (
                <div key={title} className={`glass-panel p-8 flex flex-col gap-4 border-l-4 ${border} h-full ${offset} neon-border-hover transition-all duration-300`}>
                  <span className={`font-label-mono ${color}`}>{num}</span>
                  <h4 className="font-headline-md text-[22px] text-white uppercase">{title}</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-secondary-fixed relative overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
              backgroundPosition: '0 0, 10px 10px',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl">
            <h2 className="font-headline-xl text-[64px] md:text-headline-xl text-black uppercase leading-none">
              Let's Build The Future Of Sports Together
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-black text-white font-headline-md text-[18px] font-bold px-10 py-5 hover:bg-surface-variant transition-colors duration-300 uppercase">
                Partner With Us
              </button>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-black text-black font-headline-md text-[18px] font-bold px-10 py-5 hover:bg-black hover:text-white transition-colors duration-300 uppercase"
              >
                Contact Us
              </Link>
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
                [ Back to Dashboard ]
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
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
