import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpLeft, X } from 'lucide-react';
import { projects, categories, type Category, type Project } from '../data/projects';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.05);

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-5 h-[1px] bg-brand-orange/50" />
              <span className="font-display text-[9px] text-white/30 uppercase tracking-[0.4em]">
                أعمالنا
              </span>
            </div>
            <h2
              className={`font-body text-xl md:text-2xl font-medium text-white/85 transition-all duration-1000 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              أعمال <span className="text-brand-orange/70">مختارة</span>
            </h2>
          </div>

          {/* Filters */}
          <div
            className={`flex flex-wrap gap-1 mt-6 md:mt-0 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 font-body text-[10px] transition-all duration-500 ${
                  activeCategory === cat.key
                    ? 'bg-brand-orange/15 text-brand-orange'
                    : 'text-white/30 hover:text-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
              onOpen={(p) => setSelected(p)}
            />
          ))}
        </div>

        {/* Behance link */}
        <div
          className={`text-center mt-14 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://www.behance.net/vidaagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[11px] text-white/30 hover:text-brand-orange/70 transition-colors duration-500"
          >
            شاهد المزيد على Behance
            <ArrowUpLeft size={11} />
          </a>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-6 mx-3 bg-brand-charcoal border border-white/[0.05] animate-soft-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3.5 bg-brand-charcoal/95 backdrop-blur border-b border-white/[0.05]">
          <p className="font-body text-[13px] text-white/80">{project.title}</p>
          <div className="flex items-center gap-4">
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-[10px] text-white/35 hover:text-brand-orange/70 transition-colors duration-300"
            >
              فتح في Behance
              <ArrowUpLeft size={10} />
            </a>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300"
              aria-label="إغلاق"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Image gallery */}
        <div className="flex flex-col">
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} - ${i + 1}`}
              className="w-full h-auto block"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
  onOpen,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group relative block w-full aspect-[4/3] overflow-hidden bg-brand-charcoal cursor-pointer text-right transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: isVisible ? `${400 + index * 60}ms` : '0ms' }}
    >
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Info */}
      <div className="absolute bottom-0 right-0 left-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="font-body text-[11px] text-white/80">
          {project.title}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowUpLeft size={12} className="text-white/50" />
      </div>
    </button>
  );
}
