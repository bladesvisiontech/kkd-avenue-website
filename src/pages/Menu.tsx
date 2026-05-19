import { motion } from 'motion/react';
import { Wine, Utensils, Clock, Calendar, Heart, MapPin, Coffee } from 'lucide-react';
import { usePreview } from '../context/PreviewContext';

export default function Menu() {
  const { menu: menuData } = usePreview();
  const { hero, specials, everyday, soulFood, brunch, desserts } = menuData;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  return (
    <div className="bg-brand-ink text-brand-cream relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/chicken-pasta.webp"
            alt="Delicious Pasta"
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
            <p className="font-sans text-brand-pearl max-w-[500px] mx-auto text-lg leading-relaxed">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24">

          {/* Weekly Specials */}
          <motion.div {...fadeIn} className="col-span-1 lg:col-span-2">
            <div className="flex flex-col items-center mb-16 text-center">
              <Calendar className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1} />
              <h2 className="font-serif text-3xl md:text-4xl text-brand-gold italic">Weekly Specials</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">{specials.sundayMonday.day}</h3>
                <p className="text-brand-pearl text-sm mb-4">{specials.sundayMonday.description}</p>
                <div className="font-mono text-brand-gold text-sm mt-auto">{specials.sundayMonday.price}</div>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">{specials.tuesday.day}</h3>
                <p className="text-brand-pearl text-sm mb-2">{specials.tuesday.items.join(' | ')}</p>
                {specials.tuesday.note && <p className="text-brand-smoke text-xs italic mb-4">{specials.tuesday.note}</p>}
                <div className="font-mono text-brand-gold text-sm mt-auto">{specials.tuesday.price}</div>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">{specials.wednesday.day}</h3>
                <ul className="text-brand-pearl text-sm space-y-2 mb-4 w-full">
                  {specials.wednesday.items.map((item, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-mono text-brand-gold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">{specials.thursday.day}</h3>
                <p className="text-brand-pearl text-sm mb-4">{specials.thursday.description}</p>
                <div className="font-mono text-brand-gold text-sm mt-auto">{specials.thursday.price}</div>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors md:col-span-2">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-4">{specials.friday.day}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  <ul className="text-brand-pearl text-sm space-y-3 w-full">
                    {specials.friday.items.map((item, i) => (
                      <li key={i} className="flex justify-between border-b border-brand-line/50 pb-2">
                        <span>{item.name}</span>
                        <span className="font-mono text-brand-gold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col justify-end space-y-3 p-6 bg-brand-violet/50">
                    {specials.friday.extras.map((extra, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{extra.name}</span>
                        <span className="font-mono text-brand-gold">{extra.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column: Everyday Menu & Soul Food */}
          <div className="space-y-24">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-10 border-b border-brand-line pb-4">
                <Clock className="w-6 h-6 text-brand-gold" strokeWidth={1} />
                <h2 className="font-serif text-3xl">Everyday Menu <span className="text-brand-smoke text-xl italic">- 3pm -</span></h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Meats</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {everyday.meats.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Pairs</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {everyday.pairs.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-10 aspect-[4/3] w-full overflow-hidden">
                <img src="/mixed-plate.webp" alt="Mixed Plate" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-10 border-b border-brand-line pb-4">
                <Heart className="w-6 h-6 text-brand-gold" strokeWidth={1} />
                <h2 className="font-serif text-3xl">Soul Food <span className="text-brand-smoke text-xl italic">- Sunday/Mon -</span></h2>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Entrées</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {soulFood.entrees.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Sides</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {soulFood.sides.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square w-full overflow-hidden">
                  <img src="/oxtails.webp" alt="Oxtails" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="aspect-square w-full overflow-hidden">
                  <img src="/lamb-chops.webp" alt="Lamb Chops" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Brunch & Desserts */}
          <div className="space-y-24">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-10 border-b border-brand-line pb-4">
                <Coffee className="w-6 h-6 text-brand-gold" strokeWidth={1} />
                <h2 className="font-serif text-3xl">Brunch <span className="text-brand-smoke text-xl italic">- Sundays 12-3 -</span></h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Mains</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {brunch.mains.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Pairs</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    {brunch.pairs.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-10 border-b border-brand-line pb-4">
                <Utensils className="w-6 h-6 text-brand-gold" strokeWidth={1} />
                <h2 className="font-serif text-3xl">Desserts</h2>
              </div>
              <ul className="space-y-4 font-sans text-brand-pearl text-lg">
                {desserts.map((d, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="bg-brand-violet border border-brand-line p-10 flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-brand-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl mb-4 italic">Visit Us</h3>
              <p className="text-brand-pearl font-sans mb-6">Experience our menu live. Join us in our Houston location for the complete KKD Avenue vibe.</p>
              <a href="https://www.google.com/maps/place/KKD+AVENUE/@29.5811523,-95.4652429,17z" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold hover:text-brand-cream transition-colors">
                6951 McHard Rd, Houston ↗
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
