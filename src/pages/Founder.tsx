export default function Founder() {
  return (
    <main className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-xl min-h-[716px] items-center">
        <div className="md:col-span-7 flex flex-col justify-center pr-0 md:pr-12">
          <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest mb-stack-md block">
            Leadership // Vision
          </span>
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-stack-lg uppercase leading-none">
            VC Vinoth
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
            "Building brands that move with the world." The architect behind the convergence of high-stakes venture capital, competitive gaming infrastructure, and premium streetwear.
          </p>
          <div className="flex flex-col gap-stack-sm mt-stack-md">
            <div className="flex items-center gap-4">
              <span className="w-12 h-1 bg-secondary-fixed inline-block" />
              <span className="font-label-mono text-label-mono uppercase">CEO &amp; Founder, SmartSportz.in</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-1 bg-white inline-block" />
              <span className="font-label-mono text-label-mono uppercase">Creative Director, VIBE CREW</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative h-[500px] md:h-full w-full">
          <div className="absolute inset-0 bg-primary-container border border-[#262626] overflow-hidden group">
            <img
              className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              src="/images/founder-vc-vinoth.jpg"
              alt="VC Vinoth - Founder"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary-fixed opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary-fixed opacity-50" />
        </div>
      </section>

      {/* Ambition Section */}
      <section className="mb-stack-xl">
        <h2 className="font-headline-lg text-headline-lg mb-stack-lg uppercase">Global Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* SmartSportz.in Card */}
          <div className="md:col-span-2 bg-surface-container-high border border-[#262626] p-stack-lg relative overflow-hidden group hover:border-secondary-fixed transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl">sports_esports</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-stack-md uppercase">SmartSportz.in Expansion</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-lg">
              Engineering the infrastructure for the next generation of competitive gaming. Scaling digital arenas and physical hubs across major metropolitan centers globally.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center border-b border-[#1A1A1A] py-2">
                <span className="font-body-md text-body-md text-on-surface">Target Markets</span>
                <span className="font-data-display text-data-display text-secondary-fixed">NA, EU, APAC</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1A1A1A] py-2">
                <span className="font-body-md text-body-md text-on-surface">Infrastructure</span>
                <span className="font-data-display text-data-display text-secondary-fixed">Web3 &amp; Cloud</span>
              </div>
            </div>
          </div>

          {/* VIBE CREW Card */}
          <div className="bg-surface-container-high border border-[#262626] p-stack-lg relative overflow-hidden group hover:border-secondary-fixed transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-white text-4xl">checkroom</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-stack-md uppercase">VIBE CREW</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                Redefining streetwear through tactical utility and premium materials. Global drops engineered for exclusivity.
              </p>
            </div>
            <button className="font-data-display text-data-display text-left hover:text-secondary-fixed transition-colors flex items-center gap-2">
              View Lookbook <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-stack-xl border-y border-outline-variant/30 text-center my-stack-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-stack-sm opacity-50 block mx-auto">
            format_quote
          </span>
          <h3 className="font-headline-lg text-headline-lg uppercase leading-tight mb-stack-md">
            "Building brands that move with the world."
          </h3>
          <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
            — VC Vinoth
          </p>
        </div>
      </section>
    </main>
  );
}
