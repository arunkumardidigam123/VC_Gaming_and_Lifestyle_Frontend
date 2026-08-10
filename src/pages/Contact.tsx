import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'partnership',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transmission sent! We will get back to you shortly.');
  };

  return (
    <div className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="scanline" />

      <main className="flex-grow pt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full mb-stack-xl">
        {/* Header */}
        <header className="mb-stack-xl mt-stack-lg border-l-4 border-secondary-fixed pl-stack-md">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-stack-sm">
            INITIATE CONTACT
          </h1>
          <p className="font-data-display text-data-display text-on-surface-variant uppercase tracking-widest">
            ESTABLISH SECURE CONNECTION // BENGALURU HQ
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Contact Form */}
          <div className="md:col-span-7 glass-panel p-stack-lg flex flex-col gap-stack-lg">
            <div className="flex justify-between items-end border-b border-surface-variant pb-stack-sm">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">Direct Link</h2>
              <span className="font-label-mono text-label-mono text-secondary-fixed">SYS.READY</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-unit">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                    Identification
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="ENTER NAME"
                    className="input-industrial"
                  />
                </div>
                <div className="flex flex-col gap-unit">
                  <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                    Comms Channel
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="input-industrial"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-unit mt-stack-sm">
                <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  Subject Category
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="input-industrial appearance-none"
                >
                  <option value="partnership">STRATEGIC PARTNERSHIP</option>
                  <option value="investment">INVESTMENT INQUIRY</option>
                  <option value="apparel">APPAREL ACQUISITION</option>
                  <option value="gaming">GAMING ASSETS</option>
                </select>
              </div>
              <div className="flex flex-col gap-unit mt-stack-sm">
                <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  Encrypted Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="TRANSMIT DATA..."
                  rows={4}
                  className="input-industrial resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary font-headline-md text-headline-md uppercase py-stack-sm px-stack-lg mt-stack-md self-start flex items-center gap-stack-sm"
              >
                Transmit <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* HQ Info */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            {/* Coordinates Card */}
            <div className="glass-panel p-stack-md neon-border-active flex flex-col gap-stack-sm">
              <div className="flex items-center gap-stack-sm text-secondary-fixed font-label-mono text-label-mono">
                <span className="material-symbols-outlined">my_location</span>
                <span>TARGET ACQUIRED</span>
              </div>
              <div className="font-data-display text-data-display text-on-surface">
                LAT: 12.9591° N<br />
                LON: 77.7474° E
              </div>
            </div>

            {/* HQ Details Card */}
            <div className="glass-panel p-stack-lg flex-grow flex flex-col justify-between relative overflow-hidden">
              <div className="z-10 relative">
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-stack-md border-b border-surface-variant pb-stack-sm">
                   3rd FLOOR, GAMMA BLOCK, SIGMA TECH PARK, VARTHURU KODI, BENGALURU
                </h3>
                <ul className="font-data-display text-data-display text-on-surface-variant flex flex-col gap-stack-sm">
                  {[
                    { label: 'LEVEL', value: 'ALPHA BLOCK', highlight: false },
                    { label: 'ZONE', value: 'WHITEFIELD', highlight: false },
                    { label: 'CITY', value: 'BENGALURU', highlight: false },
                    { label: 'STATUS', value: 'ACTIVE', highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <li key={label} className="flex justify-between border-b border-surface-container-highest pb-unit">
                      <span>{label}</span>
                      <span className={highlight ? 'text-secondary-fixed' : 'text-on-surface'}>{value}</span>
                    </li>
                  ))}
                </ul>

                {/* Contact Details */}
                <div className="mt-stack-lg flex flex-col gap-stack-sm border-t border-surface-variant pt-stack-md">
                  <a
                    href="tel:+919071995566"
                    className="flex items-center gap-stack-sm group hover:text-secondary-fixed transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">call</span>
                    <span className="font-data-display text-data-display text-on-surface group-hover:text-secondary-fixed transition-colors">
                      +91 9071995566
                    </span>
                  </a>
                  <a
                    href="mailto:vcsports&lifestyle@gmail.com"
                    className="flex items-center gap-stack-sm group hover:text-secondary-fixed transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">mail</span>
                    <span className="font-data-display text-data-display text-on-surface group-hover:text-secondary-fixed transition-colors break-all">
                      vcsports&amp;lifestyle@gmail.com
                    </span>
                  </a>
                </div>

                <div className="mt-stack-md">
                  <button className="font-data-display text-data-display text-on-surface hover:text-secondary-fixed transition-colors flex items-center gap-unit uppercase group">
                    Access Directions
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Abstract Tech Map Background */}
              <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2lmQsGHHVzsVEb-k-xCaCgysLiHGUFqKQFRHCnJ8DSqs7pW8lT_2EUWkzYjLDU8ZMrTAuTak1D_oqtdPz4y-hcF2_Njnrkr1i1DvTLAfPk6Fd4rwq9BR-_OeMUEqcG8PGxToeOClRQ_k_hrk5D2cQM1Eo9f70DCofPNaFAiiuZBpscdUyWVUcflfGlh7LeMPpuiUH1iRgZoNAbbobqNwEBDd5hXsEVuy5FMWy85ibJsHrxuvzgfxi')",
                }}
              >
                <div className="absolute inset-0 map-overlay" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
