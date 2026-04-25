import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Pricing() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543007631-283050fb3c3c?auto=format&fit=crop&q=80&w=2000" 
            alt="Table Setting" 
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">Investment</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              Pricing <span className="italic text-brand-gold">&amp;</span> Packages
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              Transparent packages for our social experiences, and tailored custom quotes for full private events.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          
          {/* Pricing Layout */}
          <div className="grid lg:grid-cols-2 gap-0 border border-brand-line mb-32">
            
            {/* Social Packages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-brand-line bg-brand-violet relative"
            >
              <div className="font-mono text-[10px] text-brand-gold uppercase tracking-[0.18em] border border-brand-gold inline-block px-3 py-1 mb-8">Public Packages</div>
              <h3 className="text-[36px] font-serif mb-4">Social Experiences</h3>
              <p className="text-brand-pearl text-[14px] leading-[1.6] mb-10 h-10">Perfect for date nights, girls' nights out, or small celebrations without renting the full venue.</p>
              
              <div className="mb-10 text-brand-smoke font-mono text-[10px] uppercase tracking-[0.16em] border-t border-brand-line pt-6">
                Starting from <span className="text-[32px] font-serif italic text-brand-cream leading-none tracking-normal ml-2 lowercase block mt-2">$150 <span className="text-[14px] text-brand-smoke ml-1">/ couple</span></span>
              </div>

              <div className="space-y-4 mb-14">
                {['Reserved curated seating', 'Welcome cocktails or mocktails', '3-course chef\'s tasting menu', 'Immersive ambient lighting & music'].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-baseline border-b border-brand-line/50 pb-3">
                    <span className="text-brand-gold text-[16px]">◆</span>
                    <span className="text-brand-cream text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="block w-full py-4 text-center border border-brand-gold text-brand-gold font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-brand-gold hover:text-brand-ink transition-colors">
                Reserve a Table
              </Link>
            </motion.div>

            {/* Private Events */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 md:p-14 bg-brand-ink relative overflow-hidden"
            >
              {/* background radial */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(184,148,86,0.1)__0%,transparent_50%)] pointer-events-none"></div>

              <div className="font-mono text-[10px] text-brand-ink bg-brand-gold uppercase tracking-[0.18em] border border-brand-gold inline-block px-3 py-1 mb-8 shadow-[0_0_15px_rgba(184,148,86,0.2)] relative z-10">Custom Quotes</div>
              <h3 className="text-[36px] font-serif mb-4 relative z-10 text-brand-gold italic">Private Events</h3>
              <p className="text-brand-pearl text-[14px] leading-[1.6] mb-10 h-10 relative z-10">Full venue buyouts, bespoke design, and tailored catering for up to 50 guests.</p>
              
              <div className="mb-10 text-brand-smoke font-mono text-[10px] uppercase tracking-[0.16em] border-t border-brand-line pt-6 relative z-10">
                Starting from <span className="text-[32px] font-serif text-brand-gold italic leading-none tracking-normal ml-2 block mt-2">$2,500</span>
              </div>

              <div className="space-y-4 mb-14 relative z-10">
                {['Private use of the entire space', 'Custom aesthetic design & layout', 'Dedicated event staff & chef', 'Pre-event tasting & consultation', 'Premium audio & visual setup'].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-baseline border-b border-brand-line/50 pb-3">
                    <span className="text-brand-pearl text-[16px]">◆</span>
                    <span className="text-brand-cream text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="block w-full py-4 text-center bg-brand-gold text-brand-ink font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-brand-cream hover:text-brand-ink transition-colors relative z-10 shadow-[0_0_20px_rgba(184,148,86,0.15)]">
                Request a Quote
              </Link>
            </motion.div>

          </div>

          {/* FAQ Section */}
          <div className="max-w-[800px] mx-auto border border-brand-line p-10 md:p-14 bg-brand-violet">
            <div className="tag-mono text-brand-gold text-center mb-4">Details</div>
            <h2 className="text-[32px] font-serif text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-10">
              <div className="border-b border-brand-line pb-8">
                <h3 className="font-serif text-[20px] mb-3">Do you require a deposit?</h3>
                <p className="text-brand-pearl text-[14px] leading-[1.6]">Yes, a 50% non-refundable retainer is required to secure your date for private events. The remaining balance is due 14 days prior to your event.</p>
              </div>
              <div className="border-b border-brand-line pb-8">
                <h3 className="font-serif text-[20px] mb-3">Can we bring our own catering or alcohol?</h3>
                <p className="text-brand-pearl text-[14px] leading-[1.6]">Part of the KKD Avenue experience is our exceptional in-house catering and bar service. Outside food and beverages are generally not permitted, but we can accommodate special dietary restrictions and custom menu requests.</p>
              </div>
              <div>
                <h3 className="font-serif text-[20px] mb-3">What is the capacity of the venue?</h3>
                <p className="text-brand-pearl text-[14px] leading-[1.6]">Our space is designed for intimate to mid-sized elevated gatherings. We comfortably accommodate up to 50 guests for a seated dinner and 75 for cocktail-style events.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
