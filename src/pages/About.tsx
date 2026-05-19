import { motion } from 'motion/react';
import { usePreview } from '../context/PreviewContext';

export default function About() {
  const { about } = usePreview();
  const { hero, founder, values, space } = about;

  return (
    <div className="pb-24">

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/interior-wide.webp"
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">{hero.tag}</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              {hero.title} <span className="italic text-brand-gold">{hero.titleEm}</span>
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              {hero.subtitle}
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
                src={founder.image ?? '/exterior-sign.webp'}
                alt="Founder of KKD Avenue"
                loading="lazy"
                className="w-full h-full object-cover grayscale transition-transform duration-[0.8s] group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute left-6 bottom-6 bg-brand-ink/80 backdrop-blur-[4px] p-4 border border-brand-line">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-brand-gold mb-1">{founder.tag}</div>
                <div className="font-serif text-[18px]">{founder.name}</div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-tight mb-8">
                {founder.title} <em className="font-normal italic text-brand-gold">{founder.titleEm}</em> {founder.titleSuffix}
              </h2>
              <div className="space-y-6 text-brand-pearl leading-[1.65] font-light text-[15px]">
                {founder.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Differentiators */}
      <section className="bg-brand-violet py-[120px] border-b border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="text-center mb-20">
            <div className="tag-mono text-brand-gold mb-4">{values.tag}</div>
            <h2 className="font-serif text-[42px] leading-tight">{values.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-brand-line">
            {values.items.map((v) => (
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
              <div className="tag-mono text-brand-gold mb-4">{space.tag}</div>
              <h2 className="font-serif text-[clamp(36px,4vw,60px)] leading-[1.1] mb-6">
                {space.title} <em className="text-brand-gold italic">{space.titleEm}</em>
              </h2>
              <p className="text-brand-pearl leading-[1.65] font-light max-w-[400px]">
                {space.desc}
              </p>
            </div>
            <div className="md:col-span-7 aspect-[4/3] bg-brand-violet overflow-hidden relative border border-brand-line">
              <img src="/interior-wide.webp" alt="Event space interior" loading="lazy" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
