import { Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = 'service_guhuv0j';
const EMAILJS_TEMPLATE = 'template_9njmvud';
const EMAILJS_KEY      = 'lS6PL8fdArt6pklTe';

export default function Shop() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        inquiry_type: 'Store Notify Me',
        first_name: 'Store Subscriber',
        last_name: '',
        email,
        phone: '',
        message: `Please notify me when the KKD Avenue Store launches: ${email}`,
      }, EMAILJS_KEY);
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[url('/interior-roses.webp')] bg-cover bg-center relative">
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
            {status === 'sent' ? (
              <p className="text-brand-gold font-mono text-[12px] tracking-[0.16em] uppercase">You're on the list ✓</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-brand-ink border border-brand-line px-5 py-4 w-full text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm placeholder:text-brand-smoke"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-brand-gold text-brand-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-brand-cream transition-colors whitespace-nowrap border border-brand-gold hover:border-brand-cream disabled:opacity-50"
                >
                  {status === 'sending' ? '...' : 'Notify'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-mono text-[10px] mt-2">Something went wrong. Try again.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
