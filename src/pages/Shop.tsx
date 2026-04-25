import { Gift } from 'lucide-react';
import { motion } from 'motion/react';

export default function Shop() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[url('/interior-roses.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-brand-ink/80 backdrop-blur-sm"></div>
      
      <div className="max-w-[700px] w-full mx-auto px-6 text-center py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-violet border border-brand-line p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 w-full left-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
          
          <Gift size={40} className="mx-auto text-brand-gold mb-8 stroke-[1.2]" />
          <h1 className="text-[clamp(36px,5vw,56px)] font-serif mb-4 leading-tight italic font-normal text-brand-gold">The Avenue Store</h1>
          <p className="text-brand-pearl text-[15px] leading-[1.6] mb-12 max-w-[400px] mx-auto">
            Gift the KKD Experience. Gift cards and signature take-away products are launching soon.
          </p>
          
          <div className="max-w-[400px] mx-auto">
            <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-brand-smoke mb-4">Get Notified on Launch</h3>
            <form action="https://formsubmit.co/queen@kkdavenuehtx.com" method="POST" className="flex flex-col sm:flex-row gap-3">
               <input type="hidden" name="_subject" value="KKD Avenue Store — Notify Me Request" />
               <input type="hidden" name="_captcha" value="false" />
               <input
                 type="email"
                 name="email"
                 required
                 placeholder="Your email address"
                 className="bg-brand-ink border border-brand-line px-5 py-4 w-full text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm placeholder:text-brand-smoke"
               />
               <button type="submit" className="bg-brand-gold text-brand-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-brand-cream transition-colors whitespace-nowrap border border-brand-gold hover:border-brand-cream">
                 Notify
               </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
