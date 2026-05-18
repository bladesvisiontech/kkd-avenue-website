import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Shop', path: '/shop' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-24 font-sans bg-brand-ink text-brand-cream">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-ink/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-brand-line/50' 
            : 'bg-gradient-to-b from-brand-ink/90 to-transparent backdrop-blur-[2px]'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between mx-auto">
          <Link to="/" className="flex items-center gap-3 font-serif text-[20px] tracking-wide text-brand-cream relative z-10 block shrink-0">
            <img src="/logo.png" alt="KKD Avenue" className="h-[36px] lg:h-[46px] w-auto object-contain" />
          </Link>
          
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center font-mono text-[10px] lg:text-[11px] tracking-[0.16em] uppercase text-brand-pearl">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-brand-gold transition-colors whitespace-nowrap"
                style={location.pathname === link.path ? { color: 'var(--color-brand-gold)' } : {}}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border border-brand-gold text-brand-gold px-5 py-2.5 hover:bg-brand-gold hover:text-brand-ink transition-colors ml-4 whitespace-nowrap"
            >
              Reserve
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 border border-brand-line bg-transparent text-brand-gold shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-[18px] h-[1px] bg-brand-gold transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
            <span className={`block w-[18px] h-[1px] bg-brand-gold transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-[18px] h-[1px] bg-brand-gold transition-transform duration-300 ${mobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-brand-ink/70 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-[85%] max-w-[360px] h-screen bg-brand-violet border-l border-brand-gold z-40 flex flex-col pt-[100px] px-9 pb-9 transition-transform duration-350 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col">
          {[...navLinks, {name: 'Contact', path: '/contact'}].map((link, i) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="font-serif text-[32px] py-[18px] border-b border-brand-line text-brand-cream tracking-tight flex items-baseline justify-between"
            >
              <span>{link.name}</span>
              <span className="font-mono text-[10px] text-brand-gold tracking-[0.2em]">{`0${i + 1}`}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <div className="font-mono text-[11px] text-brand-gold tracking-[0.16em] uppercase mb-2">Follow</div>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/kkdavenue/" target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl text-brand-gold hover:text-brand-cream transition-colors">@kkdavenue</a>
            <a href="https://www.tiktok.com/@kkdavenue" target="_blank" rel="noopener noreferrer" className="font-serif italic text-xl text-brand-gold hover:text-brand-cream transition-colors">TikTok</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-violet pt-20 pb-10 border-t border-brand-line">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="flex items-center gap-3 font-serif text-[28px] text-brand-cream">
                <img src="/logo.png?v=3" alt="KKD Avenue" className="h-[48px] w-auto object-contain" />
              </Link>
              <p className="text-brand-pearl text-sm max-w-[340px] leading-[1.6] mt-4">
                <a href="https://www.google.com/maps/place/KKD+AVENUE/@29.5811523,-95.4652429,17z/data=!3m1!4b1!4m6!3m5!1s0x8640ed25f70920ab:0x61440e55a20060d9!8m2!3d29.5811477!4d-95.462668!16s%2Fg%2F11wy9b843k?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  6951 McHard Rd<br/>
                  Houston, TX 77053
                </a>
              </p>
            </div>
            
            <div>
              <h5 className="font-mono text-[10px] tracking-[0.18em] uppercase text-brand-gold mb-4">Explore</h5>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><Link to="/about" className="text-brand-pearl hover:text-brand-gold transition-colors">Our Story</Link></li>
                <li><Link to="/menu" className="text-brand-pearl hover:text-brand-gold transition-colors">Menu</Link></li>
                <li><Link to="/services" className="text-brand-pearl hover:text-brand-gold transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="text-brand-pearl hover:text-brand-gold transition-colors">Portfolio</Link></li>
                <li><Link to="/pricing" className="text-brand-pearl hover:text-brand-gold transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[10px] tracking-[0.18em] uppercase text-brand-gold mb-4">Connect</h5>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><Link to="/contact" className="text-brand-pearl hover:text-brand-gold transition-colors">Contact Us</Link></li>
                <li><Link to="/shop" className="text-brand-pearl hover:text-brand-gold transition-colors">Gift Cards & Shop</Link></li>
                <li><a href="https://www.instagram.com/kkdavenue/" target="_blank" rel="noopener noreferrer" className="text-brand-pearl hover:text-brand-gold transition-colors">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@kkdavenue" target="_blank" rel="noopener noreferrer" className="text-brand-pearl hover:text-brand-gold transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-line flex flex-col md:flex-row justify-center items-center font-mono text-[10px] tracking-[0.14em] uppercase text-brand-smoke gap-4">
            <span>&copy; MMXXIV KKD AVENUE · HOUSTON TX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
