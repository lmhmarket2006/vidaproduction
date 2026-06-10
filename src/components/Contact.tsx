import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { whatsappUrl } from '../lib/whatsapp';

const projectTypeLabels: Record<string, string> = {
  video: 'إنتاج فيديو',
  photography: 'تصوير تجاري',
  branding: 'هوية بصرية',
  social: 'سوشيال ميديا',
  web: 'تصميم مواقع وتطبيقات الويب',
  full: 'باقة كاملة',
};

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: formData.name,
        email: formData.email,
        project_type: formData.project_type,
        message: formData.message,
      },
    ]);

    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      const message = `مرحباً، أرغب بالتواصل بخصوص مشروع.\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nنوع المشروع: ${projectTypeLabels[formData.project_type] ?? formData.project_type}\nالتفاصيل: ${formData.message}`;
      window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
      setStatus('sent');
      setFormData({ name: '', email: '', project_type: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-5 h-[1px] bg-brand-orange/50" />
            <span className="font-display text-[9px] text-white/30 uppercase tracking-[0.4em]">
              تواصل
            </span>
          </div>
          <h2
            className={`font-body text-xl md:text-2xl font-medium text-white/85 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            لنبدع <span className="text-brand-orange/70">معًا</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-body text-[15px] text-white/35 leading-[2] mb-10">
              مستعد لرفع مستوى علامتك التجارية؟ نود سماع تفاصيل مشروعك.
              تواصل معنا ولنصنع شيئًا استثنائيًا.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-brand-orange/40" />
                <span className="font-body text-[12px] text-white/40">السعودية ومصر</span>
              </div>

              <a
                href="https://www.instagram.com/vidaproduction.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram size={13} className="text-brand-orange/40" />
                <span className="font-body text-[12px] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                  @vidaproduction.studio
                </span>
              </a>

              <a
                href="https://www.behance.net/vidaagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <ExternalLink size={13} className="text-brand-orange/40" />
                <span className="font-body text-[12px] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                  Behance / Vida Agency
                </span>
              </a>
            </div>

            <div className="p-5 border border-white/[0.04] bg-white/[0.01]">
              <p className="font-body text-[11px] text-white/25 leading-relaxed">
                للحجز السريع والاستفسارات، راسلنا مباشرة على انستقرام.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="block font-body text-[10px] text-white/25 mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-2.5 bg-transparent border-b border-white/[0.06] text-[13px] text-white/70 font-body focus:outline-none focus:border-brand-orange/30 transition-colors duration-500 placeholder:text-white/15"
                  placeholder="اسمك الكامل"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] text-white/25 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-2.5 bg-transparent border-b border-white/[0.06] text-[13px] text-white/70 font-body focus:outline-none focus:border-brand-orange/30 transition-colors duration-500 placeholder:text-white/15"
                  placeholder="email@company.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] text-white/25 mb-2">
                  نوع المشروع
                </label>
                <select
                  required
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  className="w-full px-0 py-2.5 bg-transparent border-b border-white/[0.06] text-[13px] text-white/70 font-body focus:outline-none focus:border-brand-orange/30 transition-colors duration-500 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-brand-black text-white/50">اختر الخدمة</option>
                  <option value="video" className="bg-brand-black">إنتاج فيديو</option>
                  <option value="photography" className="bg-brand-black">تصوير تجاري</option>
                  <option value="branding" className="bg-brand-black">هوية بصرية</option>
                  <option value="social" className="bg-brand-black">سوشيال ميديا</option>
                  <option value="web" className="bg-brand-black">تصميم مواقع وتطبيقات الويب</option>
                  <option value="full" className="bg-brand-black">باقة كاملة</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-[10px] text-white/25 mb-2">
                  عن مشروعك
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-2.5 bg-transparent border-b border-white/[0.06] text-[13px] text-white/70 font-body focus:outline-none focus:border-brand-orange/30 transition-colors duration-500 resize-none placeholder:text-white/15"
                  placeholder="وصف مختصر..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 px-7 py-2.5 bg-brand-orange/90 text-white text-[11px] font-body hover:bg-brand-orange transition-colors duration-500 flex items-center gap-2 disabled:opacity-40"
              >
                {status === 'sending' && 'جاري الإرسال...'}
                {status === 'sent' && 'تم الإرسال'}
                {status === 'error' && 'حدث خطأ'}
                {status === 'idle' && (
                  <>
                    أرسل
                    <Send size={11} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
