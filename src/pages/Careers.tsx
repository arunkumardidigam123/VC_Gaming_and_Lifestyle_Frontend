import { useState } from 'react';

interface JobRole {
  id: string;
  title: string;
  division: 'VIBE CREW' | 'SMARTSPORTZ.IN';
  location: string;
  type: string;
  desc: string;
  requirements: string[];
}

const openRoles: JobRole[] = [
  {
    id: 'ROLE_01',
    title: 'Senior Textile Engineer',
    division: 'VIBE CREW',
    location: 'BENGALURU HQ (ON-SITE)',
    type: 'FULL-TIME',
    desc: 'Design and engineer next-generation technical sportswear. You will integrate smart biometric tracking sensors and adaptive thermal regulation fabrics into Vibe Crew’s active silhouettes.',
    requirements: [
      '5+ years experience in technical sportswear design or smart textiles.',
      'Deep understanding of performance fabrics, bonding, and flatlock engineering.',
      'Strong research background in sustainable activewear materials.'
    ]
  },
  {
    id: 'ROLE_02',
    title: 'Lead Tournament Coordinator',
    division: 'SMARTSPORTZ.IN',
    location: 'BENGALURU HQ (HYBRID)',
    type: 'FULL-TIME',
    desc: 'Coordinate high-stakes national and regional sporting events. Work closely with our broadcast teams and telemetry engineers to ensure real-time biometric and performance statistics are synced live.',
    requirements: [
      '3+ years experience in sports tournament production or esports operations.',
      'Excellent logistics coordinator with a proven track record of handling live crowds.',
      'Familiarity with production switchers, live-streaming stacks, and telemetry systems.'
    ]
  },
  {
    id: 'ROLE_03',
    title: 'Full-Stack Developer (Telemetry Systems)',
    division: 'SMARTSPORTZ.IN',
    location: 'REMOTE / BENGALURU',
    type: 'CONTRACT / FULL-TIME',
    desc: 'Build and maintain our low-latency telemetry APIs. You will develop real-time WebSockets connections, spectator polling hubs, and web-based biometric graphical overlay interfaces.',
    requirements: [
      'Strong command of React, TypeScript, Node.js, and low-latency databases.',
      'Experience with WebSockets, WebRTC, or live broadcast integration.',
      'Passion for sports statistics, gaming dashboards, and clean data visualizations.'
    ]
  },
  {
    id: 'ROLE_04',
    title: 'Visual Brand Designer',
    division: 'VIBE CREW',
    location: 'BENGALURU HQ (HYBRID)',
    type: 'FULL-TIME',
    desc: 'Direct the visual identity of Vibe Crew across digital and physical lookbooks. You will construct packaging design, apparel graphics, marketing assets, and interactive Web3 digital fashion models.',
    requirements: [
      'Exceptional portfolio displaying premium typography, packaging, and digital branding.',
      'Proficiency with 3D renderers (Blender, Clo3D) and classic vector design suites.',
      'Pulse on contemporary global streetwear trends and gaming culture.'
    ]
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', resume: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleApply = (role: JobRole) => {
    setSelectedRole(role);
    setSubmitSuccess(false);
    setFormData({ name: '', email: '', resume: '', note: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate terminal compile/submit output
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Hero Section */}
        <header className="mb-stack-xl border-b border-surface-variant pb-stack-lg">
          <p className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest mb-4">
            [ TALENT_ACQUISITION ]
          </p>
          <h1 className="font-headline-xl text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[80px] break-all leading-none mb-stack-sm text-white">
            JOIN_THE_VANGUARD
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            We are building a global sports ecosystem from Bengaluru. We recruit elite engineers, designers, and organizers who operate at peak utility and thrive under high-stakes conditions.
          </p>
        </header>

        {/* Bento Grid: Benefits */}
        <section className="mb-stack-xl">
          <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6">// Core_Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-panel p-6 border-l-2 border-secondary-fixed">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">location_city</span>
              <h3 className="font-headline-md text-[20px] text-white uppercase mb-2">Bengaluru HQ</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Work in our high-tech facility featuring dedicated gaming pods, athletic performance spaces, and collaborative laboratories.
              </p>
            </div>
            <div className="glass-panel p-6 border-l-2 border-tertiary-fixed">
              <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-4">apparel</span>
              <h3 className="font-headline-md text-[20px] text-white uppercase mb-2">Gear Stipends</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Get premium annual allocations for VIBE CREW lookbook collections and hardware upgrades for your setup.
              </p>
            </div>
            <div className="glass-panel p-6 border-l-2 border-white">
              <span className="material-symbols-outlined text-white text-4xl mb-4">volunteer_activism</span>
              <h3 className="font-headline-md text-[20px] text-white uppercase mb-2">Health &amp; Performance</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Comprehensive health insurance, fitness memberships, and access to elite physical recovery coaches.
              </p>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-2">// Active_Openings</h2>
            
            {openRoles.map((role) => (
              <div 
                key={role.id}
                className="glass-panel p-stack-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-secondary-fixed transition-colors duration-300"
              >
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className="font-label-mono text-[11px] px-2 py-0.5 border border-outline-variant text-secondary-fixed">
                      {role.division}
                    </span>
                    <span className="font-label-mono text-[11px] px-2 py-0.5 border border-[#444748] text-on-surface-variant">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-white uppercase">{role.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mt-2 max-w-2xl">{role.desc}</p>
                </div>
                <button 
                  onClick={() => handleApply(role)}
                  className="btn-primary px-6 py-3 self-stretch md:self-auto text-center font-label-mono text-label-mono uppercase"
                >
                  APPLY_NOW
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 glass-panel p-stack-md border border-[#262626] flex flex-col gap-6 sticky top-28">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">// General_Inquiries</span>
            <h3 className="font-headline-md text-[20px] text-white uppercase">Don't see your role?</h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              We are constantly tracking elite talent in biomechanics, product logistics, and live interactive broadcasting. Drop your details, and we’ll trigger a connection if there is a match.
            </p>
            <a 
              href="mailto:careers@vcsports.in"
              className="btn-secondary px-6 py-3 text-center font-label-mono text-label-mono uppercase"
            >
              SEND_SPECULATIVE_CV
            </a>
          </div>
        </section>
      </main>

      {/* Interactive Application Terminal Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-margin-mobile">
          <div className="glass-panel w-full max-w-2xl border border-secondary-fixed/50 flex flex-col overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-surface-container-high px-6 py-3 border-b border-surface-variant flex justify-between items-center font-label-mono text-label-mono text-on-surface-variant">
              <span>SYS.APPLY // {selectedRole.id}</span>
              <button 
                onClick={() => setSelectedRole(null)}
                className="hover:text-white transition-colors"
              >
                [X] CLOSE
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-stack-lg flex flex-col gap-6 bg-background">
              <div>
                <span className="font-label-mono text-secondary-fixed text-xs uppercase block mb-1">Applying for:</span>
                <h2 className="font-headline-md text-headline-md text-white uppercase">{selectedRole.title}</h2>
                <span className="font-label-mono text-xs text-on-surface-variant uppercase">{selectedRole.division} // {selectedRole.location}</span>
              </div>

              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-label-mono">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface-variant uppercase">Full_Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. ANAV SHARMA"
                      className="bg-surface border border-outline-variant p-3 text-white focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface-variant uppercase">Secure_Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anav@domain.com"
                      className="bg-surface border border-outline-variant p-3 text-white focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface-variant uppercase">Resume_Portfolio_URI</label>
                    <input 
                      type="url" 
                      required 
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      placeholder="e.g. https://portfolio.anav.dev/cv.pdf"
                      className="bg-surface border border-outline-variant p-3 text-white focus:outline-none focus:border-secondary-fixed"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-on-surface-variant uppercase">Cover_Note // Key_Qualifications</label>
                    <textarea 
                      rows={3} 
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Briefly state your alignment with our directive..."
                      className="bg-surface border border-outline-variant p-3 text-white focus:outline-none focus:border-secondary-fixed resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-4 font-bold text-center mt-2 flex justify-center items-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        UPLOADING_CREDENTIALS...
                      </>
                    ) : (
                      'TRANSMIT_APPLICATION'
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col gap-6 py-8 items-center text-center font-label-mono">
                  <span className="material-symbols-outlined text-[#c3f400] text-6xl animate-bounce">terminal</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-md text-headline-md text-white uppercase">[SYS.SUCCESS] TRANSMISSION COMPLETE</h3>
                    <p className="font-body-md text-sm text-on-surface-variant max-w-md mt-2">
                      Your credentials have been securely transmitted to the VC Sports leadership cache. Candidate identifier assigned: <span className="text-secondary-fixed">VC_CANDIDATE_{Math.floor(1000 + Math.random() * 9000)}</span>.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedRole(null)}
                    className="btn-secondary px-8 py-3 uppercase mt-4"
                  >
                    Close Terminal
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
