import { motion } from 'motion/react';
import { Wine, Utensils, Clock, Calendar, Heart, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';

export default function Menu() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="bg-brand-ink text-brand-cream relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/chicken-pasta.jpg" 
            alt="Delicious Pasta" 
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">Our Offerings</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              The <span className="italic text-brand-gold">Menu</span>
            </h1>
            <p className="font-sans text-brand-pearl max-w-[500px] mx-auto text-lg leading-relaxed">
              Curated flavors, crafted with soul. Experience our daily selections and weekly specialties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24">
          
          {/* Column 1: Weekly Specials */}
          <motion.div {...fadeIn} className="col-span-1 lg:col-span-2">
            <div className="flex flex-col items-center mb-16 text-center">
              <Calendar className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1} />
              <h2 className="font-serif text-3xl md:text-4xl text-brand-gold italic">Weekly Specials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">Soulfood Sunday & Monday</h3>
                <p className="text-brand-pearl text-sm mb-4">2 meats 3 sides | Premium meats lamb and oxtails</p>
                <div className="font-mono text-brand-gold text-sm mt-auto">$15.99 | $18.99</div>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">Taco Tuesday</h3>
                <p className="text-brand-pearl text-sm mb-4">3 Fajita tacos | 3 Enchiladas</p>
                <p className="text-brand-smoke text-xs italic mb-4">Both come with rice & beans</p>
                <div className="font-mono text-brand-gold text-sm mt-auto">$15.99</div>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">Wing Whiskey Wednesday</h3>
                <ul className="text-brand-pearl text-sm space-y-2 mb-4 w-full">
                  <li className="flex justify-between"><span>Turkey & Hamburgers</span><span className="font-mono text-brand-gold">$11.99</span></li>
                  <li className="flex justify-between"><span>6pcs Wings</span><span className="font-mono text-brand-gold">$10.99</span></li>
                  <li className="text-brand-smoke text-xs italic">($1.00 individual wings)</li>
                </ul>
              </div>

              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-2">Steak & Shrimp Thursday</h3>
                <p className="text-brand-pearl text-sm mb-4">Steak, Shrimp, 1 Side & Salad</p>
                <div className="font-mono text-brand-gold text-sm mt-auto">$18.99 - $26.99</div>
              </div>
              
              <div className="border border-brand-line p-8 flex flex-col items-start hover:border-brand-gold transition-colors md:col-span-2">
                <h3 className="font-sans text-lg uppercase tracking-wider mb-4">Fried Fish & Shrimp Friday</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  <ul className="text-brand-pearl text-sm space-y-3 w-full">
                    <li className="flex justify-between border-b border-brand-line/50 pb-2"><span>Fish / Po' Boys</span><span className="font-mono text-brand-gold">$13.99 - $17.99</span></li>
                    <li className="flex justify-between border-b border-brand-line/50 pb-2"><span>4pcs Fish</span><span className="font-mono text-brand-gold">$14.99</span></li>
                    <li className="flex justify-between border-b border-brand-line/50 pb-2"><span>Shrimp Po' Boy</span><span className="font-mono text-brand-gold">$13.99</span></li>
                    <li className="flex justify-between border-b border-brand-line/50 pb-2"><span>Salmon Po' Boy</span><span className="font-mono text-brand-gold">$15.99</span></li>
                    <li className="flex justify-between"><span>Fish Po' Boy</span><span className="font-mono text-brand-gold">$13.99</span></li>
                  </ul>
                  <div className="flex flex-col justify-end space-y-3 p-6 bg-brand-violet/50">
                    <div className="flex justify-between text-sm"><span>Extra side</span><span className="font-mono text-brand-gold">$5.00</span></div>
                    <div className="flex justify-between text-sm"><span>Add 4 pcs Shrimp</span><span className="font-mono text-brand-gold">$5.00</span></div>
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
                <h2 className="font-serif text-3xl">Everday Menu <span className="text-brand-smoke text-xl italic">- 3pm -</span></h2>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Meats</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    <li>Grilled Chicken</li>
                    <li>Grilled Salmon</li>
                    <li>Grilled Shrimp</li>
                    <li>Fish</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Pairs</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    <li>Pasta</li>
                    <li>Bun + Sub-Sandwich</li>
                    <li>Salad</li>
                    <li>2x Sides</li>
                    <li>Baked Potato</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 aspect-[4/3] w-full overflow-hidden">
                <img src="/mixed-plate.jpg" alt="Mixed Plate" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
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
                    <li>Oxtails</li>
                    <li>Turkey Wings</li>
                    <li>Lamb Chops</li>
                    <li>Meat Loaf</li>
                    <li>Fried Chicken</li>
                    <li>Smothered Chicken</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Sides</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    <li>Greens</li>
                    <li>Yams</li>
                    <li>Green Beans</li>
                    <li>Mac and Cheese</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square w-full overflow-hidden">
                  <img src="/oxtails.jpg" alt="Oxtails" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="aspect-square w-full overflow-hidden">
                  <img src="/lamb-chops.jpg" alt="Lamb Chops" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
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
                    <li>Shrimp</li>
                    <li>Sausage</li>
                    <li>Fish</li>
                    <li>Salmon Croquet</li>
                    <li>Bacon</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-brand-gold mb-4">Pairs</h3>
                  <ul className="space-y-3 font-sans text-brand-pearl">
                    <li>Grits</li>
                    <li>Waffle</li>
                    <li>Eggs</li>
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
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  Cheese Cakes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  Cookies
                </li>
              </ul>
            </motion.div>

            {/* Design elements */}
            <motion.div {...fadeIn} className="bg-brand-violet border border-brand-line p-10 flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-brand-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl mb-4 italic">Visit Us</h3>
              <p className="text-brand-pearl font-sans mb-6">Experience our menu live. Join us in our Houston location for the complete KD Avenue vibe.</p>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">
                6951 McHard Rd, Houston
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
