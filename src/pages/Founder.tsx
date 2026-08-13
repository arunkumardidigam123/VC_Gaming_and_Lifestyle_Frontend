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
            The visionary behind a lifestyle empire that fuses premium streetwear with competitive gaming culture. VC Vinoth's mission is simple yet bold — put the VIBE CREW brand on every street corner and turn every neighbourhood into an arena.
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

      {/* Vision Stats Bar */}
      <section className="mb-stack-xl grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {[
          { value: "500+", label: "Tournaments Conducted", icon: "emoji_events" },
          { value: "50K+", label: "Players Engaged", icon: "group" },
          { value: "30+", label: "Cities Reached", icon: "location_on" },
          { value: "∞", label: "Brand Ambition", icon: "rocket_launch" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-high border border-[#262626] p-stack-lg flex flex-col items-center text-center hover:border-secondary-fixed transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </span>
            <span className="font-data-display text-data-display text-3xl md:text-4xl text-white leading-none mb-1">
              {stat.value}
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider text-xs">
              {stat.label}
            </span>
          </div>
        ))}
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

      {/* VIBE CREW Clothing Brand Vision */}
      <section className="mb-stack-xl">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-secondary-fixed text-4xl">style</span>
          <h2 className="font-headline-lg text-headline-lg uppercase">Clothing for the People</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Mission Statement */}
          <div className="bg-surface-container-high border border-[#262626] p-stack-lg relative overflow-hidden hover:border-secondary-fixed transition-colors duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-fixed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest block mb-stack-sm">
              // The Mission
            </span>
            <h3 className="font-headline-md text-headline-md mb-stack-md uppercase">Fashion Without Barriers</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md leading-relaxed">
              VC Vinoth's core belief is that premium streetwear shouldn't be locked behind velvet ropes. VIBE CREW is built to reach everyday people — the student grinding for exams, the athlete hustling at the local court, the gamer pulling all-nighters. Every piece is designed to be worn by real people in real moments.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              From metro cities to tier-2 towns, the goal is to make VIBE CREW the uniform of an entire generation — accessible in price, uncompromising in quality, and unmistakable in identity.
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "diversity_3",
                title: "Community-First Drops",
                desc: "Every new collection launch is tied to a community event — meetups, gaming cafés, pop-up markets — so the clothes arrive in people's hands, not just in carts.",
              },
              {
                icon: "attach_money",
                title: "Accessible Pricing",
                desc: "Premium quality at prices that don't price out the youth. VC Vinoth is personally committed to keeping every VIBE CREW staple within reach.",
              },
              {
                icon: "public",
                title: "National & Global Reach",
                desc: "Starting from India and expanding outward — VIBE CREW aims to be in 100+ cities within 3 years through local brand ambassadors and organic community growth.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-high border border-[#262626] p-stack-md flex gap-4 items-start hover:border-secondary-fixed transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-2xl mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </span>
                <div>
                  <h4 className="font-body-lg text-body-lg text-on-surface mb-1 uppercase tracking-wide">{pillar.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming & Tournaments Vision */}
      <section className="mb-stack-xl">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-secondary-fixed text-4xl">sports_esports</span>
          <h2 className="font-headline-lg text-headline-lg uppercase">Play More. Compete Everywhere.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
          {/* Main Vision Block */}
          <div className="md:col-span-3 bg-surface-container-high border border-[#262626] p-stack-lg relative overflow-hidden group hover:border-secondary-fixed transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <span className="material-symbols-outlined text-secondary-fixed" style={{ fontSize: "8rem" }}>emoji_events</span>
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest block mb-stack-sm">
                // The Gaming Vision
              </span>
              <h3 className="font-headline-md text-headline-md mb-stack-md uppercase">Tournaments for Everyone — Not Just the Elite</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-stack-md">
                VC Vinoth envisions a world where competitive gaming isn't limited to professional studios or big esports arenas. Through SmartSportz.in, he is building a tournament ecosystem that runs in every city, every college, and every gaming café in the country. Whether you're a casual player or a ranked competitor, there's a tournament with your name on it.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The vision is straightforward: normalise gaming as a sport, celebrate every level of competition, and make prize pools, recognition, and community accessible to millions — not just thousands.
              </p>
            </div>
          </div>
        </div>

        {/* Tournament Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            {
              icon: "location_city",
              title: "City-Level Circuits",
              desc: "Monthly tournaments running across 30+ cities, structured as qualifying circuits that feed into regional and national championships.",
            },
            {
              icon: "school",
              title: "College & Campus Leagues",
              desc: "Dedicated college gaming leagues in partnership with institutions, giving students an official competitive platform and career pathway.",
            },
            {
              icon: "videogame_asset",
              title: "Multi-Game Format",
              desc: "From mobile titles like BGMI & Free Fire to PC games like Valorant & CS2 — every player's game has a competitive home.",
            },
            {
              icon: "live_tv",
              title: "Live Streaming & Coverage",
              desc: "Every tournament broadcast live — bringing spectator culture to grassroots gaming and helping players build their personal brands.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container-high border border-[#262626] p-stack-lg flex flex-col gap-3 hover:border-secondary-fixed transition-colors duration-300 group"
            >
              <span className="material-symbols-outlined text-secondary-fixed text-3xl group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </span>
              <h4 className="font-body-lg text-body-lg text-on-surface uppercase tracking-wide">{pillar.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Intersection — Where Fashion Meets Gaming */}
      <section className="mb-stack-xl bg-surface-container-high border border-[#262626] p-stack-xl relative overflow-hidden group hover:border-secondary-fixed transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-fixed/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest block mb-stack-sm">
              // The Convergence
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-stack-md leading-tight">
              Where Streetwear Meets the Arena
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-stack-md">
              VC Vinoth's master vision unites both worlds. Tournament participants wear VIBE CREW. Brand launches happen at gaming events. The community that plays together, dresses together. It's not just cross-promotion — it's the birth of an entirely new lifestyle category.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every VIBE CREW collection release is accompanied by a community gaming event. Every major SmartSportz.in tournament features exclusive VIBE CREW merchandise drops. Two brands. One identity. One movement.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Tournament × Fashion Drops", value: "Every Major Event" },
              { label: "Exclusive Player Merch", value: "Limited Editions" },
              { label: "Brand Ambassadors", value: "Top-Ranked Players" },
              { label: "Lifestyle Integration", value: "24/7 Culture" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center border-b border-[#1A1A1A] py-3">
                <span className="font-body-md text-body-md text-on-surface-variant">{item.label}</span>
                <span className="font-data-display text-data-display text-secondary-fixed">{item.value}</span>
              </div>
            ))}
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
            "I want every kid to wear our brand, pick up a controller, and know that this world was built for them."
          </h3>
          <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
            — VC Vinoth, Founder
          </p>
        </div>
      </section>
    </main>
  );
}
