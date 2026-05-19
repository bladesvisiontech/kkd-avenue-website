import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { usePreview } from '../context/PreviewContext';

export default function Portfolio() {
  const { gallery: galleryData } = usePreview();
  const { hero, items } = galleryData;

  return (
    <div className="pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image ?? '/facade-1.webp'}
            alt="KKD Avenue Exterior"
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

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 min-h-[50vh]">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group flex flex-col"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-brand-violet relative border border-brand-line">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[radial-gradient(ellipse_at_center,rgba(74,44,90,0.4),var(--color-brand-ink)_70%)] py-[120px] border-t border-brand-line text-center">
        <h2 className="text-[clamp(36px,5vw,56px)] font-serif mb-6 leading-tight">Imagine your <br/><em className="italic text-brand-gold font-normal">event</em> here.</h2>
        <Link to="/contact" className="inline-flex items-center justify-center bg-brand-gold text-brand-ink font-mono text-[11px] tracking-[0.16em] uppercase px-8 py-4 transition-colors hover:bg-brand-cream mt-4">
          Let's Plan It
        </Link>
      </section>
    </div>
  );
}
