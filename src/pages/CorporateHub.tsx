import { Link } from 'react-router-dom';

export default function CorporateHub() {
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
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-[#0f0f0f]">
          <div className="max-w-container-max mx-auto flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Our Ecosystem</h2>
              <span className="font-label-mono text-label-mono text-on-surface-variant hidden md:block">02 // BRANDS</span>
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
                    <button className="mt-4 self-start font-data-display text-data-display text-secondary-fixed flex items-center gap-2 hover:gap-4 transition-all duration-300 uppercase">
                      Visit SmartSportz.in <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
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
                    <button className="mt-4 self-start font-data-display text-data-display text-white flex items-center gap-2 hover:gap-4 transition-all duration-300 uppercase">
                      Visit VIBE CREW <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Corporate Values */}
        <section className="py-stack-xl px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30 bg-[#0A0A0A]">
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

        {/* 5. Final CTA */}
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
    </div>
  );
}
