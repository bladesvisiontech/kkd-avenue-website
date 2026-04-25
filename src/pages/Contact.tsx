import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('private');

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/interior-bar.jpg"
            alt="KKD Avenue Bar" 
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
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-gold">Inquiries</span>
              <span className="w-8 h-[1px] bg-brand-gold"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              Let's <span className="italic text-brand-gold">Connect</span>
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              We review every inquiry within 24 hours. Start planning your next memorable experience here.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-16">
               <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-8 border-b border-brand-line pb-4">Direct Contact</h3>
                  <div className="space-y-8">
                     <div className="flex gap-5 items-start">
                       <MapPin size={20} className="text-brand-smoke mt-1 shrink-0 stroke-[1]" />
                       <div>
                         <p className="font-serif text-[20px] mb-1">Local Address</p>
                         <p className="text-brand-pearl text-[14px]">
                            <a href="https://www.google.com/maps/place/KKD+AVENUE/@29.5811523,-95.4652429,17z/data=!3m1!4b1!4m6!3m5!1s0x8640ed25f70920ab:0x61440e55a20060d9!8m2!3d29.5811477!4d-95.462668!16s%2Fg%2F11wy9b843k" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                            6951 McHard Rd<br/>Houston, TX 77053
                            </a>
                         </p>
                       </div>
                     </div>
                     <div className="flex gap-5 items-start">
                       <Phone size={20} className="text-brand-smoke mt-1 shrink-0 stroke-[1]" />
                       <div>
                         <p className="font-serif text-[20px] mb-1">Phone</p>
                         <a href="tel:+17134879908" className="text-brand-pearl text-[14px] hover:text-brand-gold transition-colors">(713) 487-9908</a>
                       </div>
                     </div>
                     <div className="flex gap-5 items-start">
                       <Mail size={20} className="text-brand-smoke mt-1 shrink-0 stroke-[1]" />
                       <div>
                         <p className="font-serif text-[20px] mb-1">Email</p>
                         <a href="mailto:queen@kkdavenuehtx.com" className="text-brand-pearl text-[14px] hover:text-brand-gold transition-colors">queen@kkdavenuehtx.com</a>
                       </div>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-8 border-b border-brand-line pb-4 flex items-center gap-2"><Clock size={14} className="stroke-[1]" /> Hours of Operation</h3>
                  <ul className="space-y-4 text-[14px]">
                     <li className="flex justify-between items-baseline border-b border-brand-line/50 pb-2"><span className="text-brand-pearl">Mon - Wed</span> <span className="font-mono text-[10px] uppercase text-brand-smoke">Private Events</span></li>
                     <li className="flex justify-between items-baseline border-b border-brand-line/50 pb-2"><span className="text-brand-pearl">Thu - Sat</span> <span className="font-mono text-[10px] text-brand-cream">5:00 PM — 12:00 AM</span></li>
                     <li className="flex justify-between items-baseline border-b border-brand-line/50 pb-2"><span className="text-brand-pearl">Sunday</span> <span className="font-mono text-[10px] text-brand-cream uppercase text-right">11 AM — 4 PM <br/><span className="text-brand-gold italic">Brunch</span></span></li>
                  </ul>
               </div>
            </div>

            {/* Smart Form */}
            <div className="lg:col-span-8 bg-brand-violet border border-brand-line p-8 md:p-14 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,rgba(184,148,86,0.1)__0%,transparent_70%)] pointer-events-none"></div>

               <h3 className="text-[28px] font-serif mb-10 relative z-10">What can we help you with?</h3>
               
               <div className="flex flex-wrap gap-3 mb-12 relative z-10">
                  {[
                    { id: 'table', label: 'Book a Table' },
                    { id: 'private', label: 'Private Event' },
                    { id: 'catering', label: 'Catering' },
                    { id: 'other', label: 'Other/Press' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setInquiryType(type.id)}
                      className={`px-5 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-all border ${
                        inquiryType === type.id 
                          ? 'bg-brand-gold border-brand-gold text-brand-ink shadow-[0_0_10px_rgba(184,148,86,0.3)]' 
                          : 'bg-transparent border-brand-line text-brand-pearl hover:border-brand-gold hover:text-brand-gold'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
               </div>

               <form action="https://formsubmit.co/queen@kkdavenuehtx.com" method="POST" className="space-y-8 relative z-10">
                  <input type="hidden" name="_subject" value="New Inquiry from KKD Avenue Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="Inquiry Type" value={inquiryType} />

                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                       <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">First Name</label>
                       <input type="text" name="First Name" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                     </div>
                     <div>
                       <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Last Name</label>
                       <input type="text" name="Last Name" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                     </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                       <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Email Address</label>
                       <input type="email" name="email" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                     </div>
                     <div>
                       <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Phone Number</label>
                       <input type="tel" name="Phone" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                     </div>
                  </div>

                  {/* Conditional Fields based on Inquiry Type */}
                  {inquiryType === 'private' && (
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                       <div>
                         <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Estimated Guest Count</label>
                         <select name="Guest Count" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent text-brand-pearl text-[15px] appearance-none" style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23B8B3BF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem top 50%", backgroundSize: "0.65rem auto" }}>
                           <option className="bg-brand-violet text-brand-cream">10 - 20 guests</option>
                           <option className="bg-brand-violet text-brand-cream">20 - 50 guests</option>
                           <option className="bg-brand-violet text-brand-cream">50+ guests</option>
                         </select>
                       </div>
                       <div>
                         <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Preferred Date</label>
                         <input type="date" name="Preferred Date" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-pearl text-[15px] custom-date-input" />
                         <style>{"\
                           .custom-date-input::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; cursor: pointer; transition: 0.2s; }\
                           .custom-date-input::-webkit-calendar-picker-indicator:hover { opacity: 1; filter: invert(0.8) sepia(1) saturate(5) hue-rotate(10deg); }\
                         "}</style>
                       </div>
                    </div>
                  )}

                  {inquiryType === 'table' && (
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                       <div>
                         <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Number of Guests (Max 8)</label>
                         <input type="number" name="Guest Count" min="1" max="8" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                       </div>
                       <div>
                         <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Date</label>
                         <input type="date" name="Preferred Date" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-pearl text-[15px] custom-date-input" />
                       </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Additional Details</label>
                    <textarea name="Details" rows={3} className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors resize-none text-brand-cream text-[15px]"></textarea>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="w-full border border-brand-gold px-8 py-4 bg-brand-gold text-brand-ink font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-transparent hover:text-brand-gold transition-colors text-center inline-block">
                      Send Request
                    </button>
                  </div>
               </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
