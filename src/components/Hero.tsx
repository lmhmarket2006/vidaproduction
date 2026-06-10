import { useEffect, useState } from 'react';
import { whatsappUrl } from '../lib/whatsapp';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Cinematic background image from projects */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-cover opacity-20 transition-all duration-[2500ms] ease-out ${
            loaded ? 'scale-100' : 'scale-105'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/75 to-brand-black" />
      </div>

      {/* Animated glow / shimmer */}
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-brand-orange/[0.06] rounded-full blur-[130px] animate-shimmer pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-[360px] h-[360px] bg-brand-orange-light/[0.05] rounded-full blur-[110px] animate-shimmer-slow pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Small accent */}
        <div
          className={`w-8 h-[1px] bg-brand-orange/50 mx-auto mb-7 transition-all duration-1200 ease-out ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Tag */}
        <p
          className={`font-display text-[10px] text-white/35 uppercase tracking-[0.5em] mb-5 transition-all duration-1000 delay-300 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          وكالة إعلامية
        </p>

        {/* Main title */}
        <h1
          className={`font-body text-5xl md:text-[72px] lg:text-[88px] font-semibold leading-[1.2] text-white/95 mb-6 transition-all duration-1000 delay-500 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          فيدا
        </h1>

        {/* Subtitle */}
        <p
          className={`font-display text-[15px] md:text-[17px] text-white/50 max-w-lg mx-auto mb-4 tracking-[0.15em] leading-[1.8] transition-all duration-1000 delay-700 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          dir="ltr"
        >
          Cinematic Video & Photography
          <br />
          <span className="text-brand-orange/85">for Commercial Brands</span>
        </p>

        {/* Location */}
        <p
          className={`font-display text-[10px] text-white/30 uppercase tracking-[0.4em] mb-9 transition-all duration-1000 delay-[800ms] ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          dir="ltr"
        >
          KSA • Egypt
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <a
            href="#work"
            className="px-7 py-2.5 bg-brand-orange/90 text-white text-[11px] font-body hover:bg-brand-orange transition-colors duration-500"
          >
            شاهد أعمالنا
          </a>
          <a
            href={whatsappUrl('مرحباً، أرغب بالتواصل معكم بخصوص مشروع.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 border border-white/10 text-white/50 text-[11px] font-body hover:border-white/25 hover:text-white/70 transition-all duration-500"
          >
            تواصل معنا
          </a>
        </div>
      </div>

      {/* Subtle scroll hint */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/15 mx-auto" />
      </div>
    </section>
  );
}
