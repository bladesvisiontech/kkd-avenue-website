import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { usePreview } from '../context/PreviewContext';

export default function Pricing() {
  const { pricing: pricingData } = usePreview();
  const { hero, packages, faq } = pricingData;

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/interior-roses.webp"
            alt="KKD Avenue Setup"
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

      <section className="py-[100px]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">

          {/* Pricing Layout */}
          <div className="grid lg:grid-cols-2 gap-0 border border-brand-line mb-32">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 md:p-14 relative overflow-hidden ${
                  pkg.variant === 'dark'
                    ? 'bg-brand-ink'
                    : 'bg-brand-violet border-b lg:border-b-0 lg:border-r border-brand-line'
                }`}
              >
                {pkg.variant === 'dark' && (
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(184,148,86,0.1)__0%,transparent_50%)] pointer-events-none"></div>
                )}

                <div className={`font-mono text-[10px] uppercase tracking-[0.18em] border inline-block px-3 py-1 mb-8 relative z-10 ${
                  pkg.variant === 'dark'
                    ? 'text-brand-ink bg-brand-gold border-brand-gold shadow-[0_0_15px_rgba(184,148,86,0.2)]'
                    : 'text-brand-gold border-brand-gold'
                }`}>
                  {pkg.tag}
                </div>

                <h3 className={`text-[36px] font-serif mb-4 relative z-10 ${pkg.variant === 'dark' ? 'text-brand-gold italic' : ''}`}>
                  {pkg.title}
                </h3>
                <p className="text-brand-pearl text-[14px] leading-[1.6] mb-10 h-10 relative z-10">{pkg.description}</p>

                <div className="mb-10 text-brand-smoke font-mono text-[10px] uppercase tracking-[0.16em] border-t border-brand-line pt-6 relative z-10">
                  Starting from
                  <span className={`text-[32px] font-serif italic leading-none tracking-normal ml-2 block mt-2 ${pkg.variant === 'dark' ? 'text-brand-gold' : 'text-brand-cream'}`}>
                    {pkg.startingFrom}
                    {pkg.startingLabel && <span className="text-[14px] text-brand-smoke ml-1">{pkg.startingLabel}</span>}
                  </span>
                </div>

                <div className="space-y-4 mb-14 relative z-10">
                  {pkg.features.map((feature, fi) => (
                    <div key={fi} className="flex gap-4 items-baseline border-b border-brand-line/50 pb-3">
                      <span className={`text-[16px] ${pkg.variant === 'dark' ? 'text-brand-pearl' : 'text-brand-gold'}`}>◆</span>
                      <span className="text-brand-cream text-[15px]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={pkg.ctaLink}
                  className={`block w-full py-4 text-center font-mono text-[11px] tracking-[0.16em] uppercase transition-colors relative z-10 ${
                    pkg.variant === 'dark'
                      ? 'bg-brand-gold text-brand-ink hover:bg-brand-cream shadow-[0_0_20px_rgba(184,148,86,0.15)]'
                      : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-ink'
                  }`}
                >
                  {pkg.ctaLabel}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-[800px] mx-auto border border-brand-line p-10 md:p-14 bg-brand-violet">
            <div className="tag-mono text-brand-gold text-center mb-4">Details</div>
            <h2 className="text-[32px] font-serif text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-10">
              {faq.map((item, i) => (
                <div key={i} className={i < faq.length - 1 ? 'border-b border-brand-line pb-8' : ''}>
                  <h3 className="font-serif text-[20px] mb-3">{item.question}</h3>
                  <p className="text-brand-pearl text-[14px] leading-[1.6]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
