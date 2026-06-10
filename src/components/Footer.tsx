import { Instagram, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <span className="font-display text-[8px] font-medium text-white/25 uppercase tracking-[0.2em]">
              Production
            </span>
            <span className="w-[1px] h-2.5 bg-brand-orange/30" />
            <span className="font-display text-[11px] font-semibold tracking-[0.25em] text-white/60 uppercase">
              VIDA
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/vidaproduction.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors duration-500"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://www.behance.net/vidaagency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors duration-500"
            >
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-[9px] text-white/15">
            {new Date().getFullYear()} VIDA Production
          </p>
        </div>
      </div>
    </footer>
  );
}
