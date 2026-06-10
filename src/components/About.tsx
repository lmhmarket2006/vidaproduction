import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Camera, Film, Users } from 'lucide-react';

const stats = [
  { number: '+50', label: 'مشروع' },
  { number: '+30', label: 'عميل' },
  { number: '+3', label: 'سنوات' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-14 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-5 h-[1px] bg-brand-orange/50" />
          <span className="font-display text-[9px] text-white/30 uppercase tracking-[0.4em]">
            من نحن
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="font-body text-2xl md:text-[28px] font-medium leading-[1.7] text-white/85 mb-8">
              نصنع تجارب
              <span className="text-brand-orange/70"> بصرية </span>
              تروي
              <br />
              قصة علامتك
            </h2>
            <p className="font-body text-[15px] text-white/35 leading-[2] mb-6">
              VIDA Production استوديو إنتاج إبداعي متخصص في الفيديو السينمائي
              والتصوير التجاري. نتعاون مع العلامات التجارية في السعودية ومصر
              لإنشاء محتوى بصري مؤثر.
            </p>
            <p className="font-body text-[13px] text-white/25 leading-[2] mb-12">
              من تصميم الهوية البصرية إلى الإنتاج التجاري الكامل، فريقنا يضيف
              لمسة سينمائية احترافية لكل مشروع. نؤمن بقوة السرد البصري في تحويل
              العلامات التجارية.
            </p>

            {/* Mini icons */}
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Film size={15} className="text-brand-orange/50" />
                <span className="font-body text-[9px] text-white/30">فيديو</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Camera size={15} className="text-brand-orange/50" />
                <span className="font-body text-[9px] text-white/30">تصوير</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users size={15} className="text-brand-orange/50" />
                <span className="font-body text-[9px] text-white/30">هوية</span>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative mb-10">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="تصوير سينمائي"
                  className="w-full h-full object-cover opacity-60 hover:opacity-75 transition-opacity duration-700"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between px-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-lg font-semibold text-brand-orange/70 mb-1">
                    {stat.number}
                  </div>
                  <div className="font-body text-[9px] text-white/25">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
