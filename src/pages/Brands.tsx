import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Brands() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Wait a tiny bit for layout to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="bg-tactical-grid antialiased min-h-screen flex flex-col">
      <main className="flex-grow pt-[120px] pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Hero Section */}
        <section className="mb-stack-xl relative">
          <div className="flex flex-col md:flex-row gap-gutter items-end border-b border-surface-variant pb-stack-md">
            <div className="flex-1">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-stack-sm uppercase">
                Dual<br />Dynamics
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                VC SPORTS  &amp; LIFESTYLE PVT. LTD. orchestrates two primary vectors of cultural impact. SmartSportz.in engineers competitive physical frameworks, while VIBE CREW outfits the vanguard.
              </p>
            </div>
             <div className="hidden md:block w-1/3">
              <div
                className="bg-cover bg-center w-full h-48 border border-outline-variant grayscale opacity-70"
                style={{
                  backgroundImage: "url('/images/sports-badminton.png')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Brands Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-xl">
          {/* SMARTSPORTZ.IN Card */}
          <div className="md:col-span-7 glass-panel p-stack-lg relative overflow-hidden group" id="smartsportz.in">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-data-display text-[120px] leading-none text-white pointer-events-none transition-transform duration-500 group-hover:scale-110">
              01
            </div>
            <div className="flex justify-between items-start mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">SmartSportz.in</h2>
              <span className="font-label-mono text-label-mono px-2 py-1 border border-outline-variant text-secondary-fixed">
                EVENTS_&amp;_TOURNAMENTS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg relative z-10">
              <div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                  The architectural backbone of competitive engagement. SmartSportz.in designs and executes high-stakes tournaments that bridge physical athleticism with digital precision.
                </p>
                <ul className="font-data-display text-data-display text-on-surface space-y-2 mb-stack-md">
                  <li className="flex justify-between border-b border-surface-variant py-2">
                    <span>FOCUS</span>
                    <span className="text-right text-secondary-fixed">COMPETITIVE EVENTS</span>
                  </li>
                  <li className="flex justify-between border-b border-surface-variant py-2">
                    <span>SCALE</span>
                    <span className="text-right">GLOBAL / REGIONAL</span>
                  </li>
                  <li className="flex justify-between border-b border-surface-variant py-2">
                    <span>STATUS</span>
                    <span className="text-right">ACTIVE DEPLOYMENT</span>
                  </li>
                </ul>
              </div>
              <div className="h-full min-h-[200px] border border-outline-variant relative">
                <div
                  className="bg-cover bg-center absolute inset-0 w-full h-full mix-blend-luminosity opacity-80"
                  style={{
                    backgroundImage: "url('/images/sports-football.png')",
                  }}
                />
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 btn-primary px-6 py-3 uppercase">
              INITIALIZE PORTAL <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* VIBE CREW Card */}
          <div
            className="md:col-span-5 glass-panel p-stack-lg relative overflow-hidden group border-t-2 md:border-t-0 md:border-l-2 border-secondary-fixed"
            id="vibe-crew"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-data-display text-[120px] leading-none text-secondary-fixed pointer-events-none transition-transform duration-500 group-hover:scale-110">
              02
            </div>
            <div className="flex justify-between items-start mb-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">VIBE CREW</h2>
            </div>
            <div className="mb-stack-md">
              <span className="font-label-mono text-label-mono px-2 py-1 border border-outline-variant text-white">
                SPORTSWEAR_&amp;_LIFESTYLE
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg relative z-10">
              Tactical utility meets streetwear aesthetics. Premium performance gear engineered for the athletes of the new paradigm. High-durability materials constructed for both the arena and the street.
            </p>
            <div className="grid grid-cols-2 gap-unit mb-stack-lg">
              <div className="aspect-square bg-surface-container-high border border-outline-variant relative">
                <div
                  className="bg-cover bg-center absolute inset-0 w-full h-full opacity-60"
                  style={{
                    backgroundImage: "url('/images/apparel-shoes.png')",
                  }}
                />
              </div>
              <div className="aspect-square bg-surface-container-high border border-outline-variant relative">
                <div
                  className="bg-cover bg-center absolute inset-0 w-full h-full opacity-60"
                  style={{
                    backgroundImage: "url('/images/apparel-tshirt.png')",
                  }}
                />
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 btn-secondary px-6 py-3 uppercase">
              ACCESS LOOKBOOK <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
