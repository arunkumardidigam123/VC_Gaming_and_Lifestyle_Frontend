export default function About() {
  return (
    <div className="grid-bg overflow-x-hidden">
      <main className="pt-32 pb-stack-xl max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section className="mb-stack-xl relative pb-stack-lg border-b border-outline-variant/30">
          <div className="absolute inset-0 z-[-1] opacity-50 pointer-events-none">
            <div
              className="w-full h-full bg-cover bg-center grayscale opacity-40"
              style={{
                backgroundImage: "url('/images/sports-cricket.png')",
              }}
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-8">
              <p className="font-label-mono text-label-mono text-secondary-fixed uppercase mb-4 tracking-widest">
                [ ORIGIN_STORY ]
              </p>
              <h1 className="font-headline-xl text-headline-xl uppercase mb-stack-md leading-none text-white hidden md:block">
                Engineered in<br />Bengaluru.
              </h1>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile uppercase mb-stack-md leading-none text-white block md:hidden">
                Engineered in<br />Bengaluru.
              </h1>
            </div>
            <div className="md:col-span-4 flex items-end">
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l border-secondary-fixed pl-4">
                We are a high-stakes convergence of venture capital, competitive gaming, and premium technical apparel. Building a global sports ecosystem from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Stats Bento */}
        <section className="mb-stack-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Mission Card */}
            <div className="md:col-span-8 glass-panel p-stack-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/10 blur-3xl rounded-full" />
              <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-8">_Mission_Directive</p>
              <h2 className="font-headline-lg text-headline-lg uppercase text-white mb-stack-md hidden md:block">
                Building a Global<br />Sports Ecosystem
              </h2>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-white mb-stack-md block md:hidden">
                Building a Global<br />Sports Ecosystem
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8">
                Our mandate is clear: bridge the gap between physical athleticism and digital supremacy. We invest in, incubate, and design for the modern athlete—whether they dominate on the court or the server.
              </p>
              <button className="font-data-display text-data-display text-secondary-fixed hover:text-white transition-colors flex items-center gap-2">
                READ MANIFESTO <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Secondary Cards */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <div className="glass-panel p-stack-md flex-1 flex flex-col justify-center neon-border-active">
                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-2">HQ_Location</p>
                <h3 className="font-headline-md text-headline-md text-white uppercase"> 3rd FLOOR, GAMMA BLOCK, SIGMA TECH PARK</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Varthuru Kodi, Bengaluru, India</p>
              </div>
              <div className="glass-panel p-stack-md flex-1 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: "url('/images/sports-volleyball.png')",
                  }}
                />
                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-2 relative z-10">Sector_Focus</p>
                <h3 className="font-headline-md text-headline-md text-white uppercase relative z-10">
                  Gaming x<br />Apparel
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Data/List Section: Operations */}
        <section className="mb-stack-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5">
              <h3 className="font-headline-lg text-headline-md xl:text-headline-lg uppercase text-white mb-stack-sm leading-tight break-normal">
                Core Operations
              </h3>
            </div>
            <div className="md:col-span-7 border-t border-outline-variant/30">
              {[
                { title: 'Venture Capital', desc: 'Strategic investments in emerging sports tech.' },
                { title: 'Esports Integration', desc: 'Infrastructure and apparel for elite gaming orgs.' },
                { title: 'Technical Apparel', desc: 'Performance wear designed for absolute utility.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="py-6 border-b border-outline-variant/30 flex justify-between items-center group hover:bg-surface-container-high transition-colors px-4 -mx-4 cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-headline-md text-headline-md text-white uppercase">{item.title}</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{item.desc}</span>
                  </div>
                  <div className="font-data-display text-data-display text-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">north_east</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
