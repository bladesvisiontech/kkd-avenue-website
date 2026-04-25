import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "social",
      title: "Social",
      titleEm: "Experiences",
      subtitle: "Date nights, girls' nights, and themed evenings.",
      description: "For those looking to enjoy a curated vibe without the commitment of a full buyout. Reserve a table, enjoy chef-crafted menus, and soak in our signature ambiance.",
      image: "/interior-roses.jpg",
      cta: "Reserve a Table ↗",
      link: "/contact"
    },
    {
      id: "private",
      title: "Private",
      titleEm: "Events",
      subtitle: "Birthdays, showers, corporate, and intimate celebrations.",
      description: "Our bread and butter. We provide an all-inclusive experience including the venue, custom decor, catering, and staff. Host the perfect event without lifting a finger.",
      image: "/interior-bar.jpg",
      cta: "Request Quote ↗",
      link: "/pricing"
    },
    {
      id: "catering",
      title: "Luxury",
      titleEm: "Catering",
      subtitle: "The KKD culinary experience at your location.",
      description: "Want the food without the space? Our chef-driven catering services bring elevated menus to you. Available for service zones across the Greater Houston area.",
      image: "/mixed-plate.jpg",
      cta: "View Menus ↗",
      link: "/pricing"
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2000" 
            alt="Catering and Service" 
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">Our Services</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              How we <span className="italic text-brand-gold">serve</span> you
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              From a curated table for two to a full venue buyout for fifty. Choose the experience that fits your occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section>
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14 py-[120px] space-y-[160px]">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] overflow-hidden bg-brand-violet border border-brand-line relative">
                  <div className="absolute top-4 left-4 bg-brand-ink/80 border border-brand-gold text-brand-gold font-mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 z-10 backdrop-blur-sm">
                    0{index + 1}
                  </div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.1] mb-2">{service.title} <br/><em className="text-brand-gold italic font-normal">{service.titleEm}</em></h2>
                <h3 className="font-mono text-[12px] tracking-[0.12em] text-brand-pearl uppercase border-b border-brand-line pb-4 mb-6">{service.subtitle}</h3>
                <p className="text-brand-pearl leading-[1.7] mb-10 text-[15px] max-w-[480px]">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="inline-flex font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-cream hover:border-brand-cream transition-colors"
                >
                  {service.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-brand-violet py-[120px] text-center border-t border-brand-line">
        <h2 className="font-serif text-[42px] mb-6">Not sure what you need?</h2>
        <p className="text-brand-pearl mb-10 max-w-[400px] mx-auto">Get in touch and our concierge team will guide you to the perfect package.</p>
        <Link to="/contact" className="inline-flex items-center justify-center border border-brand-gold text-brand-gold font-mono text-[11px] tracking-[0.16em] uppercase px-8 py-4 transition-all hover:bg-brand-gold hover:text-brand-ink">
          Contact Concierge
        </Link>
      </section>
    </div>
  );
}
