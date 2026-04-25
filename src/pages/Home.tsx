import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="-mt-24">
      {/* 1. Full-screen Hero */}
      <section className="min-h-[100svh] grid md:grid-cols-2 items-stretch border-b border-brand-line">
        <div className="pt-[160px] pb-12 px-6 md:pl-12 lg:pl-20 md:pr-12 flex flex-col justify-between relative text-brand-cream z-10 bg-brand-ink md:bg-brand-ink overflow-hidden">
          {/* Video background — mobile only */}
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden absolute inset-0 w-full h-full object-cover object-center -z-10"
          />
          <div className="md:hidden absolute inset-0 bg-brand-ink/70 -z-10" />
          <div>
            <div className="tag-mono text-brand-gold mb-7 tracking-[0.2em] text-[10px]">HOUSTON &middot; TEXAS &middot; EST. MMXXIII</div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif font-medium text-[clamp(46px,6vw,120px)] leading-[0.9] tracking-[inherit] mb-10 text-brand-cream max-w-[800px]"
              style={{ letterSpacing: "-0.015em" }}
            >
              Where every <br/> gathering <br/> becomes an <br/><em className="italic font-normal text-brand-gold mr-3">experience.</em>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-[420px] text-[16px] leading-[1.6] text-brand-pearl mb-12 font-sans font-light"
            >
              Houston's premier destination for elevated private events and curated social nights.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center border border-brand-gold bg-brand-gold text-brand-ink font-mono text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 transition-colors hover:bg-transparent hover:text-brand-gold"
              >
                Book an Experience
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-brand-line text-brand-pearl hover:text-brand-cream font-mono text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 transition-all hover:bg-brand-violet hover:border-transparent"
              >
                Plan Your Event
              </Link>
            </motion.div>
          </div>
          
          <div className="flex justify-between items-end mt-16 pt-7 border-t border-brand-line max-w-[800px]">
            <div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-pearl mb-2">Focus</div>
              <div className="font-serif text-[17px] text-brand-gold">Private Events & Catering</div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex relative items-center justify-center bg-[#111] md:min-h-screen overflow-hidden">
          <video 
            src="/hero-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full border border-brand-gold/60 flex flex-col items-center justify-center text-brand-gold font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-center leading-[1.4] z-30 bg-brand-ink/60 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-brand-gold hover:text-brand-ink hover:border-brand-gold group cursor-pointer">
            Curated<em className="font-serif italic text-[18px] md:text-[20px] tracking-normal my-1 text-brand-gold group-hover:text-brand-ink block normal-case transition-colors">Vibes</em>Every Day
          </div>
        </div>
      </section>

      {/* 2. Audience Split Section */}
      <section className="py-[120px] border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid md:grid-cols-2 gap-0 border border-brand-line">
            <Link to="/services" className="group relative block overflow-hidden min-h-[460px] border-b md:border-b-0 md:border-r border-brand-line">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/interior-bar.jpg")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-brand-gold mb-3">01 · Social</div>
                <h2 className="font-serif text-[36px] md:text-[42px] leading-tight mb-4 group-hover:text-brand-gold transition-colors">Date Nights &amp;<br/><em className="italic text-brand-gold">Social Experiences</em></h2>
                <p className="text-brand-pearl mb-8 max-w-[320px] leading-relaxed">Curated vibes, premium drinks, and an atmosphere designed for connection.</p>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase border border-brand-gold px-5 py-2.5 text-brand-gold self-start group-hover:bg-brand-gold group-hover:text-brand-ink transition-all">Explore Vibe</div>
              </div>
            </Link>
            
            <Link to="/services" className="group relative block overflow-hidden min-h-[460px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/interior-wide.jpg")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-brand-gold mb-3">02 · Events</div>
                <h2 className="font-serif text-[36px] md:text-[42px] leading-tight mb-4 group-hover:text-brand-gold transition-colors">Private Events &amp;<br/><em className="italic text-brand-gold">Catering</em></h2>
                <p className="text-brand-pearl mb-8 max-w-[320px] leading-relaxed">Intimate celebrations to full-scale buyouts. You show up, we handle the rest.</p>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase border border-brand-gold px-5 py-2.5 text-brand-gold self-start group-hover:bg-brand-gold group-hover:text-brand-ink transition-all">Start Planning</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The KKD Experience Pillars */}
      <section className="py-[120px] bg-brand-violet border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-4">Our Pillars</div>
              <h2 className="font-serif text-[clamp(42px,5.5vw,80px)] leading-none" style={{ letterSpacing: "-0.025em" }}>
                The KKD <br/><em className="italic font-normal text-brand-gold">Experience.</em>
              </h2>
            </div>
            <p className="text-[16px] leading-[1.65] text-brand-pearl max-w-[460px]">
              Elevating Houston's event scene with unmatched attention to detail, design, and taste. We handle every element so you don't have to.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-line">
            {[
              { id: "01", title: "Custom Events", desc: "Turnkey bespoke celebrations down to the napery." },
              { id: "02", title: "Elevated Catering", desc: "Chef-driven menus designed to impress and indulge." },
              { id: "03", title: "Immersive Programming", desc: "From mixology to live entertainment, layered experiences." },
              { id: "04", title: "Curated Ambiance", desc: "Aesthetic spaces styled for luxury and photogenic moments." },
            ].map((pillar, i) => (
              <div key={i} className="p-8 border-b sm:border-b-0 sm:border-r border-brand-line last:border-b-0 last:border-r-0 sm:last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r relative min-h-[260px] flex flex-col justify-between hover:bg-brand-ink transition-colors group">
                <div className="font-mono text-[24px] text-brand-smoke group-hover:text-brand-gold transition-colors">{pillar.id}</div>
                <div>
                  <h3 className="font-serif text-[24px] leading-[1.1] mb-3 font-medium">{pillar.title}</h3>
                  <p className="text-[13px] leading-[1.55] text-brand-pearl font-sans">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio Gallery */}
      <section className="py-[120px] border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-4">Portfolio</div>
              <h2 className="font-serif text-[clamp(42px,5.5vw,80px)] leading-none" style={{ letterSpacing: "-0.025em" }}>
                Moments <br/>at <em className="italic font-normal text-brand-gold">KKD.</em>
              </h2>
            </div>
            <div className="flex justify-start md:justify-end">
              <Link to="/portfolio" className="inline-flex font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-cream hover:border-brand-cream transition-colors">
                View Gallery ↗
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6 md:col-span-3 aspect-[4/5] relative overflow-hidden group border border-brand-line">
              <img src="/5.jpg" alt="Moment 1" loading="lazy" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-3 aspect-[4/5] relative overflow-hidden group border border-brand-line">
              <img src="/6.jpg" alt="Moment 2" loading="lazy" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-3 aspect-[4/5] relative overflow-hidden group border border-brand-line">
              <img src="/7.jpg" alt="Moment 3" loading="lazy" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.04]" />
            </div>
            <div className="col-span-6 md:col-span-3 aspect-[4/5] relative overflow-hidden group border border-brand-line">
              <img src="/8.jpg" alt="Moment 4" loading="lazy" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.04]" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof / Quote */}
      <section className="py-[120px] text-center bg-[radial-gradient(ellipse_at_center,rgba(74,44,90,0.4),var(--color-brand-ink)_70%)] border-b border-brand-line">
        <div className="max-w-[900px] mx-auto px-6">
          <svg className="mx-auto mb-8 text-brand-gold w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 17h3l2-4V7h-6v6h3zM6 17h3l2-4V7H5v6h3z" />
          </svg>
          <h2 className="font-serif font-medium text-[clamp(28px,4vw,56px)] leading-[1.2] tracking-tight mb-8" style={{ letterSpacing: "-0.025em" }}>
            "We booked KKD for a private 30th birthday and it was flawless. They truly thought of everything — the aesthetics, the food, the vibe. <em className="italic font-normal text-brand-gold">Houston needed a place like this.</em>"
          </h2>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-pearl">
            — Jasmine T. <span className="text-brand-smoke mx-2">|</span> Private Event
          </p>
        </div>
      </section>

    </div>
  );
}
