import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const stories = [
  {
    name: 'Billpocket',
    generation: 'Primera Generación',
    description: 'Billpocket es la plataforma que ofrece a los emprendedores mexicanos herramientas que les permiten aceptar pagos con tarjeta de crédito, débito y vales de despensa de la forma más fácil, rápida y segura.',
    color: '#fd8106',
    link: 'https://billpocket.com',
  },
  {
    name: 'Abeja Reyna',
    generation: 'Quinta Generación',
    description: 'Abeja Reyna es la marca de productos de miel para el cuidado de las personas, impulsa la apicultura y cuida a las abejas.',
    color: '#5eccca',
    link: 'https://www.abejareyna.mx',
  },
  {
    name: 'Skinedge',
    generation: 'Decimocuarta Generación',
    description: 'Skinedge es una clínica dermatológica especializada en el cuidado avanzado de la piel, donde la experiencia médica se une con la tecnología de vanguardia.',
    color: '#ff007a',
    link: 'https://www.skinedge.mx/',
  },
  {
    name: 'Boletomovil',
    generation: 'Tercera Generación',
    description: 'Boletomóvil es la forma más fácil para comprar boletos.',
    color: '#7f11fe',
    link: 'https://boletomovil.com',
  },
  {
    name: 'Gricha',
    generation: 'Séptima Generación',
    description: 'Gricha desarrolla alimentos con proteína de grillo, hechos con ingredientes reales.',
    color: '#ffd102',
    link: 'https://gricha.mx',
  },
];

export function SuccessStoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380; // Width of card + gap
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
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-turquoise-500/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Ellos ya lo lograron
          </h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            Conoce a algunos emprendedores destacados que transformaron su idea en un negocio exitoso con <span className="text-[#FF007A]">Reto Zapopan</span>.
          </p>
        </motion.div>

        {/* Stories Carousel */}
        <div className="relative">
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
            <div className="flex gap-6 min-w-max px-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group w-[340px] flex-shrink-0"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: story.color }}
                />

                {/* Generation badge */}
                <div className="mb-6">
                  <span
                    className="inline-block px-3 py-1 text-sm font-semibold rounded-full"
                    style={{ backgroundColor: `${story.color}20`, color: story.color }}
                  >
                    {story.generation}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{story.name}</h3>
                <p className="text-base text-slate-400 leading-relaxed mb-6">{story.description}</p>

                {/* Learn more link */}
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold transition-all group-hover:gap-3"
                  style={{ color: story.color }}
                >Conoce más<ArrowRight className="w-4 h-4" /></a>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                  style={{ backgroundColor: `${story.color}10` }}
                />
              </motion.div>
            ))}
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 p-12 lg:p-16 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Tú puedes ser el siguiente
            </h3>
            
            <p className="text-base text-slate-400 max-w-3xl mx-auto mb-8">
              Cada generación, cientos de emprendedores aplican y solo 40 equipos serán seleccionados. Si tienes una startup con tracción o una idea validada, este es tu momento.
            </p>

            {/* Key benefits */}
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
              <div className="text-left p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-base text-slate-300">Ideación y escalabilidad intensiva de 4 meses con mentores expertos</p>
              </div>
              <div className="text-left p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-base text-slate-300">Bolsa acumulada de $825,000 y hasta $350,000 MXN en financiamiento</p>
              </div>
              <div className="text-left p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-base text-slate-300">Oportunidades de internacionalización y conexión con ecosistemas globales</p>
              </div>
              <div className="text-left p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-base text-slate-300">Comunidad de +500 egresados, coworking en Mutuo y perks exclusivos</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <p className="text-base text-slate-300">
                Cierre: <span className="font-semibold text-white">6 de junio de 2026</span>
              </p>
              <a
                href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center gap-2"
              >
                Postúlate ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
