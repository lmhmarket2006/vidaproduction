import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Camera, Palette, Share2, Globe, Sparkles, Clapperboard } from 'lucide-react';

const services = [
  {
    icon: Clapperboard,
    title: 'إنتاج فيديو سينمائي',
    description: 'إنتاج فيديو تجاري بجودة سينمائية عالية يروي قصة علامتك.',
  },
  {
    icon: Camera,
    title: 'تصوير تجاري',
    description: 'تصوير احترافي للمنتجات والأطعمة والمعمار.',
  },
  {
    icon: Palette,
    title: 'هوية بصرية',
    description: 'أنظمة هوية بصرية متكاملة تشمل الشعار والخطوط والألوان.',
  },
  {
    icon: Share2,
    title: 'محتوى سوشيال ميديا',
    description: 'محتوى مصمم لجذب الجمهور وتنمية حضور علامتك.',
  },
  {
    icon: Globe,
    title: 'تصميم مواقع وتطبيقات الويب',
    description: 'تصميم واجهات احترافية وتجارب مستخدم سلسة تعكس هوية علامتك الرقمية.',
  },
  {
    icon: Sparkles,
    title: 'موشن جرافيك & AI',
    description: 'رسوم متحركة وتصميم حركي مدعوم بالذكاء الاصطناعي يحول المفاهيم إلى حياة.',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-brand-charcoal/30" />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-5 h-[1px] bg-brand-orange/50" />
            <span className="font-display text-[9px] text-white/30 uppercase tracking-[0.4em]">
              خدماتنا
            </span>
          </div>
          <h2
            className={`font-body text-xl md:text-2xl font-medium text-white/85 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            ما <span className="text-brand-orange/70">نقدمه</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group p-8 bg-brand-black hover:bg-brand-charcoal/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms' }}
              >
                <Icon
                  size={16}
                  className="text-brand-orange/40 mb-5 group-hover:text-brand-orange/70 transition-colors duration-500"
                />
                <h3 className="font-body text-[14px] font-medium text-white/70 mb-2 group-hover:text-white/90 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-body text-[13px] text-white/25 leading-[1.9]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
