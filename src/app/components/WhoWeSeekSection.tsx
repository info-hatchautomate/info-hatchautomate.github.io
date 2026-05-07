import { motion } from 'motion/react';
import { Lightbulb, Rocket, Sparkles } from 'lucide-react';

const tracks = [
  {
    icon: Lightbulb,
    title: 'Ideación',
    subtitle: 'Desarrolla y Valida tu Modelo de Negocio',
    description: 'Para equipos con una idea o MVP que buscan validar su modelo de negocio, definir su producto y conseguir sus primeros clientes.',
    color: '#5eccca',
  },
  {
    icon: Rocket,
    title: 'Escalabilidad',
    subtitle: 'Acelera y expande tu negocio',
    description: 'Para startups en operación con tracción inicial que quieren escalar rápidamente con mentoría intensiva, capital y conexión con inversionistas.',
    color: '#ff007a',
  },
];

const sectors = [
  { name: 'Startups IA-first', description: 'IA aplicada a industrias.' },
  { name: 'Healthtech / Biotech', description: 'Diagnóstico, descubrimiento y delivery.' },
  { name: 'Foodtech / Agtech', description: 'Agroindustria y tecnología alimentaria.' },
  { name: 'Energía y sostenibilidad / Cleantech', description: 'Energías renovables y climate tech.' },
  { name: 'SaaS B2B', description: 'Software empresarial escalable.' },
  { name: 'GovTech', description: 'Servicios para gobierno y servicios públicos.' },
  { name: 'FinTech', description: 'Soluciones financieras y tecnología de pagos.' },
];

export function WhoWeSeekSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-turquoise-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            ¿A quién buscamos?
          </h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">Buscamos emprendedores ambiciosos con ideas de alto impacto y ganas de transformar su industria.</p>
        </motion.div>

        {/* Tracks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 lg:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${track.color}20` }}
              >
                <track.icon className="w-7 h-7" style={{ color: track.color }} />
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: track.color }}>
                {track.title}
              </h3>
              <p className="text-base font-semibold text-slate-200 mb-4">{track.subtitle}</p>
              <p className="text-base text-slate-300 leading-relaxed">{track.description}</p>

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                style={{ backgroundColor: `${track.color}10` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl lg:text-3xl font-bold">Sectores prioritarios</h3>
          </div>

          <p className="text-base text-slate-300 mb-8">Priorizamos startups de base tecnológica en etapas de desarrollo en los siguientes sectores, <span className="font-bold">sin limitar la participación a otras industrias con alto potencial </span><span className="font-semibold text-white">de base tecnológica</span>.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
              >
                <h4 className="font-semibold text-white mb-2">{sector.name}</h4>
                <p className="text-base text-slate-400">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
