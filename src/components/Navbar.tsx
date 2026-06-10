import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#work' },
  { label: 'تواصل', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-brand-black/90 backdrop-blur-xl py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="font-display text-[9px] font-medium text-white/50 uppercase tracking-[0.2em]">
              Production
            </span>
            <span className="w-[1px] h-3 bg-brand-orange/60" />
            <span className="font-display text-[13px] font-semibold tracking-[0.25em] text-white uppercase">
              VIDA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[12px] text-white/45 hover:text-white/90 transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[10px] font-body text-white/60 border border-white/10 hover:border-brand-orange/40 hover:text-brand-orange transition-all duration-500"
          >
            ابدأ مشروعك
          </a>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden text-white/60"
            aria-label="فتح القائمة"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-brand-black/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-700 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-6 left-6 text-white/50"
          aria-label="إغلاق القائمة"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-body text-base text-white/60 hover:text-white transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
