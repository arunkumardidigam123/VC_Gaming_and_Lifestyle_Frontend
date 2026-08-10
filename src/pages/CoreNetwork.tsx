export default function CoreNetwork() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-stack-xl max-w-container-max mx-auto pt-[80px]">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-40 mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxL2ZkY3EmuJQg2xGlfhQzIcdd796Pp32yoGVVUrrUq0HiFiWTrzL2IU1MgfCMNZQhqVYgRnybFELUW-7prGNRFW6cPGgEIy0p6pj-dnaCO3oH7oiG3_5ZzRvKMqL4-TrUDD5BhcJqrAk9uSsV86CbbC1EGy85uMnCKssE5bFHwdI47JSW-RQoKEP7-JhZEvz79S9qBrSKHrVAwN28nL_PVpzS01GSk3gOReysGssfTF7Y7Rg2ghyh')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-stack-md md:w-2/3">
          <div className="inline-block border border-white/20 px-3 py-1 mb-4">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
              System Online
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-secondary">
            THE FUTURE OF PLAY AND WEAR.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Investing in the next generation of digital culture. A convergence of venture capital, gaming, and premium apparel.
          </p>
          <div className="mt-stack-lg flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-secondary-fixed text-primary-container font-headline-md text-headline-md font-bold px-8 py-4 hover:bg-tertiary-fixed-dim transition-colors w-full sm:w-auto">
              ACCESS PORTAL
            </button>
            <button className="border border-white text-secondary font-headline-md text-headline-md font-bold px-8 py-4 hover:bg-white hover:text-primary-container transition-colors w-full sm:w-auto">
              VIEW MANIFESTO
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-xl max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-stack-lg border-b border-surface-container-highest pb-4">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-secondary">
            THE NETWORK
          </h2>
          <a href="#" className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary flex items-center gap-2">
            VIEW_ALL <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="glass-panel group cursor-pointer relative overflow-hidden h-[400px] flex flex-col justify-end p-6 border border-[#262626] hover:border-secondary-fixed transition-colors">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity mix-blend-luminosity z-0"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4Qmq0LsnUpzqijZor6WEoAxK59_FCh4lLMD3bgPjfrvcG1DCI6ZPmxGJxJCVALDlOVhaufFMvwywvkwzU_5o35Wagr4am9FZGM99dajTFK-7dFGhP6j-llqSpXb0sfSV3cGB7Tq8t624f55-xoxShl_1vtBjLZZtYiIZ0zzyk-apZaY9oKdlJ2kNRXWA7S2ec12Vcz-jDuKtmWoDTO-mIEYBmgIXxUoLarf6uv-UsdfmIiONcY1Q-')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
            <div className="relative z-20">
              <div className="inline-block border border-secondary-fixed px-2 py-1 mb-3">
                <span className="font-label-mono text-label-mono text-secondary-fixed">APPAREL</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-secondary mb-2">Neon Syndicate</h3>
              <div className="flex items-center gap-4 border-t border-[#262626] pt-3 mt-3">
                <span className="font-label-mono text-label-mono text-on-surface-variant">SERIES_A</span>
                <span className="font-data-display text-data-display text-secondary ml-auto">$12.5M</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel group cursor-pointer relative overflow-hidden h-[400px] flex flex-col justify-end p-6 border border-[#262626] neon-border transition-colors">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity mix-blend-luminosity z-0"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf6cdAi8gvyOmPzWf2tMa92QwQjEUDXUL1Psyf0lGw_pyhiNUSFGoD-j4hzpQJ-bkoUgXFY-6M7A3tO0Fn3_CV7tOOGKLUi6cQBmEzeyfdFigj7Jv58-7r0zFUoSw4GvepcqpAwp4C9cKvv5j6osscEpgjdlLnUYCoNWGaiawc4yZJhTJpP0ZlFGYSPosSegi7MZzZgrT0snW0DgKJAW2lsmwCcl9Oc4wG-di4LSaQcZc_afZVktbf')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
            <div className="relative z-20">
              <div className="flex justify-between items-start mb-3">
                <div className="inline-block border border-secondary-fixed px-2 py-1">
                  <span className="font-label-mono text-label-mono text-secondary-fixed">GAME</span>
                </div>
                <span className="font-label-mono text-label-mono text-secondary-fixed animate-pulse">ACTIVE_MINT</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-secondary mb-2">Void Runners</h3>
              <div className="flex items-center gap-4 border-t border-[#262626] pt-3 mt-3">
                <span className="font-label-mono text-label-mono text-on-surface-variant">SEED</span>
                <span className="font-data-display text-data-display text-secondary ml-auto">$4.2M</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel group cursor-pointer relative overflow-hidden h-[400px] flex flex-col justify-end p-6 border border-[#262626] hover:border-secondary-fixed transition-colors">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity mix-blend-luminosity z-0"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSuy62hgU7csbnk45mIyuDFUtCzaUYuguyM_k-T_QwMDAp4nPow8blAeyzT6M8WXgwFTXtmdqgCwlKncrRktuqlRBq_f-d7UkibpFmdWV7iFY6plm6xqqz0X_3ntcoKM1W9vh9HcJxHJfIGQyo50B8gP_caGxO1Uy-NsTSnFBfyNsO5k59F4B_JKHSDn8K6K7FVbwYVXjgCpbz_7IKvuZ9RwoOpvqo3UzAZK0pqWucd0M2OYG-vEsp')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
            <div className="relative z-20">
              <div className="inline-block border border-secondary-fixed px-2 py-1 mb-3">
                <span className="font-label-mono text-label-mono text-secondary-fixed">E-SPORTS</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-secondary mb-2">Echelon</h3>
              <div className="flex items-center gap-4 border-t border-[#262626] pt-3 mt-3">
                <span className="font-label-mono text-label-mono text-on-surface-variant">SERIES_B</span>
                <span className="font-data-display text-data-display text-secondary ml-auto">$28.0M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-xl max-w-container-max mx-auto bg-surface-container-low border-y border-surface-container-highest">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-secondary mb-stack-lg text-center">
          NETWORK UTILITY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start p-6 border border-white/10 bg-[#1A1A1A]">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4">deployed_code</span>
            <h4 className="font-headline-md text-headline-md text-secondary mb-2">Exclusive Drops</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Priority access to limited-edition apparel capsules and in-game digital assets before public release.
            </p>
          </div>
          <div className="flex flex-col items-start p-6 border border-white/10 bg-[#1A1A1A]">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4">key</span>
            <h4 className="font-headline-md text-headline-md text-secondary mb-2">Early Access</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Participate in closed alpha testing for upcoming titles within the CORE_NETWORK portfolio.
            </p>
          </div>
          <div className="flex flex-col items-start p-6 border border-white/10 bg-[#1A1A1A]">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4">gavel</span>
            <h4 className="font-headline-md text-headline-md text-secondary mb-2">Governance Rights</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Voting power on future investments, protocol upgrades, and ecosystem treasury allocations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-xl max-w-container-max mx-auto text-center">
        <div className="glass-panel p-8 md:p-16 border border-[#262626] max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-secondary mb-4">
            JOIN THE FLEET
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-lg">
            Enter your terminal ID (email) to receive secure transmission regarding upcoming drops and investment rounds.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="ENTER_EMAIL_ADDRESS"
              className="flex-grow bg-[#1A1A1A] border-0 border-b border-white focus:border-secondary-fixed focus:ring-0 font-label-mono text-label-mono text-secondary px-4 py-4 rounded-none placeholder-on-surface-variant outline-none"
            />
            <button
              type="button"
              className="bg-secondary-fixed text-primary-container font-headline-md text-headline-md font-bold px-8 py-4 hover:bg-tertiary-fixed-dim transition-colors whitespace-nowrap"
            >
              REGISTER
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
