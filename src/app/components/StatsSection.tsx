import { motion } from 'motion/react';

const stats = [
  { number: '14', label: 'Generaciones', color: '#fd8106' },
  { number: '+892', label: 'Startups impulsadas', color: '#5eccca' },
  { number: '+2,000', label: 'Emprendedores formados', color: '#ff007a' },
  { number: '+50,000', label: 'Empleos generados', color: '#7f11fe' },
];

export function StatsSection() {
  return (
    <section className="relative py-8 lg:py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-turquoise-500/5 rounded-full blur-3xl" />

      {/* Abstract lines in background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(94, 204, 202, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(94, 204, 202, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center text-center px-8 py-8 lg:py-10"
            >
              {/* Vertical divider - hide on first item and on mobile for odd items */}
              {index > 0 && (
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-24 lg:h-32 w-px bg-turquoise-500/30 ${
                    index % 2 === 0 ? 'hidden lg:block' : ''
                  }`}
                />
              )}

              {/* Number */}
              <div
                className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tabular-nums tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm lg:text-base text-slate-300 font-medium tracking-wide min-h-[2.5rem] flex items-center font-[Lufga]">
                {stat.label}
              </div>

              {/* Subtle glow effect behind number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-turquoise-500/5 rounded-full blur-2xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
