import { motion } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const events = [
  { date: '6 abril 2026', event: 'Apertura de convocatoria' },
  { date: '6 junio 2026', event: 'Cierre de convocatoria' },
  { date: '22 junio 2026', event: 'Preseleccionados (160 equipos)' },
  { date: '8 julio 2026', event: '40 equipos seleccionados anunciados' },
  { date: '11 julio 2026', event: 'Bootcamp de arranque' },
  { date: 'Nov 2026', event: 'Demo Day, Premiación y Cierre' },
];

export function TimelineSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="fechas" className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
            Fechas clave
          </h2>
          <p className="text-base text-slate-400 italic">
            Las fechas pueden ajustarse conforme avance el programa.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div ref={scrollContainerRef} className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="relative min-w-max mx-auto px-8">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-turquoise-500 to-purple-500 opacity-30 -translate-y-1/2" />

            <div className="flex items-start gap-8">
              {events.map((item, index) => {
                const colors = ['#FD8106', '#5ECCCA', '#FF007A', '#7F11FE', '#FFD102', '#FD8106'];
                const color = colors[index % colors.length];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Timeline dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-slate-950 z-10 mb-4" style={{ backgroundColor: color }} />

                    {/* Event card */}
                    <div className="w-64">
                      <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group text-center">
                        <div className="flex items-center gap-3 mb-3 justify-center">
                          <Calendar className="w-5 h-5" style={{ color }} />
                          <span className="text-sm font-bold uppercase tracking-wider" style={{ color }}>
                            {item.date}
                          </span>
                        </div>
                        <p className="text-base text-slate-200 leading-relaxed">{item.event}</p>

                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                          style={{ backgroundColor: `${color}10` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `
          }} />
        </div>
      </div>
    </section>
  );
}
