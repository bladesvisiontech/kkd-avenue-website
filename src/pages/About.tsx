import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pb-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/interior-wide.jpg"
            alt="KKD Avenue Interior"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1000px] w-full mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">Our Story</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              The story behind the <span className="italic text-brand-gold">Avenue</span>
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              People book events with humans, not logos. At the heart of KKD is a commitment to creating memories effortlessly without sacrificing aesthetic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-[120px] border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src="/exterior-sign.jpg"
                alt="Founder of KKD Avenue"
                loading="lazy"
                className="w-full h-full object-cover grayscale transition-transform duration-[0.8s] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute left-6 bottom-6 bg-brand-ink/80 backdrop-blur-[4px] p-4 border border-brand-line">
                 <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-brand-gold mb-1">Founder</div>
                 <div className="font-serif text-[18px]">Luquenna</div>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-tight mb-8">
                Created to <em className="font-normal italic text-brand-gold">elevate</em> the Houston event scene.
              </h2>
              <div className="space-y-6 text-brand-pearl leading-[1.65] font-light text-[15px]">
                <p>
                  KKD Avenue was born out of a desire to see Houston's event scene elevated without the typical stress. For years, Luquenna noticed a gap in the market — you could find a beautiful space, but you'd have to bring your own caterer. Or you could find great food, but the ambiance fell flat.
                </p>
                <p>
                  She envisioned a single, cohesive ecosystem where modern design, immersive programming, and exceptional culinary experiences existed under one roof. An all-in-one approach where you simply show up, and the team handles the rest.
                </p>
                <p>
                  Today, KKD Avenue stands as a testament to that vision — a Black-owned luxury event space that doesn't just host events, but curates unforgettable experiences for the modern Houstonian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Differentiators */}
      <section className="bg-brand-violet py-[120px] border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="text-center mb-20">
             <div className="tag-mono text-brand-gold mb-4">Philosophy</div>
             <h2 className="font-serif text-[42px] leading-tight">What sets us apart.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border border-brand-line">
            {[
               { id: "01", title: "All-In-One", desc: "Space, decor, catering, and programming. You show up — we handle absolutely everything." },
               { id: "02", title: "Elevated Atmosphere", desc: "Aesthetic-first design meant to be photographed, remembered, and felt." },
               { id: "03", title: "Hospitality", desc: "Our team and chef ensure your guests are catered to from the first sip to the last bite." },
            ].map((v) => (
               <div key={v.id} className="p-10 border-b md:border-b-0 md:border-r border-brand-line last:border-b-0 last:border-r-0 hover:bg-brand-ink transition-colors">
                  <div className="font-mono text-[32px] text-brand-smoke mb-6">{v.id}</div>
                  <h3 className="font-serif text-[24px] mb-4">{v.title}</h3>
                  <p className="text-brand-pearl text-[14px] leading-[1.6]">{v.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-[120px]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="tag-mono text-brand-gold mb-4">Venue Architecture</div>
              <h2 className="font-serif text-[clamp(36px,4vw,60px)] leading-[1.1] mb-6">Designed to <em className="text-brand-gold italic">adapt.</em></h2>
              <p className="text-brand-pearl leading-[1.65] font-light max-w-[400px]">
                Located strategically in the heart of Houston, KKD Avenue boasts versatile floor plans, customizable lighting, and integrated premium sound. Whether you're hosting an intimate gathering of 20 or a full-scale celebration, the space transforms to match your vision.
              </p>
            </div>
            <div className="md:col-span-7 aspect-[4/3] bg-brand-violet overflow-hidden relative border border-brand-line">
               <img src="/interior-wide.jpg" alt="Event space interior" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
