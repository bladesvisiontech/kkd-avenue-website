import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { usePreview } from '../context/PreviewContext';

const EMAILJS_SERVICE  = 'service_guhuv0j';
const EMAILJS_TEMPLATE = 'template_9njmvud';
const EMAILJS_KEY      = 'lS6PL8fdArt6pklTe';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('private');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const { site: siteData } = usePreview();
  const { contact, hours, hero } = siteData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY);
      setStatus('sent');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image ?? '/interior-bar.webp'}
            alt="KKD Avenue Bar"
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
              {hero.title} <span className="italic text-brand-gold">{hero.titleEm}</span> {hero.titleSuffix}
            </h1>
            <p className="font-sans text-brand-pearl max-w-[600px] mx-auto text-lg leading-relaxed">
              {hero.subtitle}
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
                        <a href={contact.addressUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                          {contact.address}<br/>{contact.city}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <Phone size={20} className="text-brand-smoke mt-1 shrink-0 stroke-[1]" />
                    <div>
                      <p className="font-serif text-[20px] mb-1">Phone</p>
                      <a href={contact.phoneUrl} className="text-brand-pearl text-[14px] hover:text-brand-gold transition-colors">{contact.phone}</a>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <Mail size={20} className="text-brand-smoke mt-1 shrink-0 stroke-[1]" />
                    <div>
                      <p className="font-serif text-[20px] mb-1">Email</p>
                      <a href={`mailto:${contact.email}`} className="text-brand-pearl text-[14px] hover:text-brand-gold transition-colors">{contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-8 border-b border-brand-line pb-4 flex items-center gap-2"><Clock size={14} className="stroke-[1]" /> Hours of Operation</h3>
                <ul className="space-y-4 text-[14px]">
                  {hours.map((h, i) => (
                    <li key={i} className="flex justify-between items-baseline border-b border-brand-line/50 pb-2">
                      <span className="text-brand-pearl">{h.label}</span>
                      <span className={`font-mono text-[10px] uppercase text-right ${h.highlight ? 'text-brand-cream' : 'text-brand-smoke'}`}>
                        {h.value}{h.note && <><br/><span className="text-brand-gold italic">{h.note}</span></>}
                      </span>
                    </li>
                  ))}
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
                    type="button"
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

              {status === 'sent' ? (
                <div className="text-center py-16 relative z-10">
                  <div className="text-brand-gold text-[48px] mb-4">✓</div>
                  <h4 className="font-serif text-[24px] mb-3">Message Received</h4>
                  <p className="text-brand-pearl">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <input type="hidden" name="inquiry_type" value={inquiryType} />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">First Name</label>
                      <input type="text" name="first_name" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Last Name</label>
                      <input type="text" name="last_name" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Email Address</label>
                      <input type="email" name="email" required className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Phone Number</label>
                      <input type="tel" name="phone" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                    </div>
                  </div>

                  {inquiryType === 'private' && (
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Estimated Guest Count</label>
                        <select name="guest_count" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent text-brand-pearl text-[15px] appearance-none">
                          <option className="bg-brand-violet text-brand-cream">10 - 20 guests</option>
                          <option className="bg-brand-violet text-brand-cream">20 - 50 guests</option>
                          <option className="bg-brand-violet text-brand-cream">50+ guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Preferred Date</label>
                        <input type="date" name="preferred_date" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-pearl text-[15px]" />
                      </div>
                    </div>
                  )}

                  {inquiryType === 'table' && (
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Number of Guests (Max 8)</label>
                        <input type="number" name="guest_count" min="1" max="8" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-cream text-[15px]" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Date</label>
                        <input type="date" name="preferred_date" className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors text-brand-pearl text-[15px]" />
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <label className="block font-mono text-[10px] uppercase text-brand-smoke tracking-[0.16em] mb-2">Additional Details</label>
                    <textarea name="message" rows={3} className="w-full border-b border-brand-line py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors resize-none text-brand-cream text-[15px]"></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 font-mono text-[11px]">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full border border-brand-gold px-8 py-4 bg-brand-gold text-brand-ink font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-transparent hover:text-brand-gold transition-colors text-center inline-block disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
