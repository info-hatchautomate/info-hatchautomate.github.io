import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Gift, Users, Award, Building, Globe, Network, CalendarCheck, ExternalLink } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: '$825,000 MXN en premios',
    description: 'Apoyo a fondo perdido, sin participación accionaria. Impulsa tu startup y compite por capital para escalar tu idea.',
    color: '#fd8106',
  },
  {
    icon: TrendingUp,
    title: 'Financiamiento',
    description: 'Hasta $350,000 MXN en crédito y acercamiento a Fondos de Inversión.',
    color: '#5eccca',
  },
  {
    icon: Gift,
    title: 'Perks y Beneficios',
    description: 'Acceso a descuentos exclusivos en software y otros servicios.',
    color: '#ff007a',
  },
  {
    icon: Users,
    title: 'Demo Day',
    description: 'Presenta ante inversionistas y fondos de VC en LATAM.',
    color: '#7f11fe',
  },
  {
    icon: Award,
    title: 'Experiencia Reto Zapopan',
    description: 'Programa personalizado a la medida de tu startup con acompañamiento, capacitación y mentorías especializadas.',
    color: '#ffd102',
  },
  {
    icon: Building,
    title: 'Coworking',
    description: 'Espacio en Mutuo Naciones Unidas.',
    color: '#5eccca',
  },
  {
    icon: Globe,
    title: 'Internacionalización',
    description: 'Posibilidad de expandir tu startup al mundo.',
    color: '#ff007a',
  },
  {
    icon: Network,
    title: 'Comunidad',
    description: 'Red de egresados y acceso a Reto Zapopan Hub.',
    color: '#7f11fe',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />

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
            Beneficios del programa
          </h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">Un programa 100% enfocado en impulsar el crecimiento de tu emprendimiento, sin costo ni participación accionaria.</p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title.includes('Reto Zapopan') ? (
                  <>
                    Experiencia <span className="text-[#FF007A]">Reto Zapopan</span>
                  </>
                ) : (
                  benefit.title
                )}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                {benefit.description.includes('Reto Zapopan') ? (
                  <>
                    Red de egresados y acceso a <span className="text-[#FF007A]">Reto Zapopan</span> Hub.
                  </>
                ) : benefit.description.includes('Mutuo Naciones Unidas') ? (
                  <>
                    Espacio en <a href="https://www.google.com/maps/place/Mutuo+Naciones+Unidas/@20.6887349,-103.4313156,17z/data=!3m1!4b1!4m6!3m5!1s0x8428aff1e8967d33:0xdda93c0f7848e3e3!8m2!3d20.6887349!4d-103.4287407!16s%2Fg%2F11fjx_q1p_?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-turquoise-400 hover:text-turquoise-300 underline transition-colors">Mutuo Naciones Unidas</a>.<br />
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2j0Rd-cyS1crutPQ-C4KYUpvABcvvAD_bYHQ5tQOJUbAoOFDyGGfDXtl8KNMOpYbWYmL7GY0N2?fbclid=IwY2xjawRXjv1leHRuA2FlbQIxMABicmlkETFxZnprelR6Q2ZDZEhCY3lDc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoWykw_XBPlLrkl18aPnTFZfu-rC8QG7U8qTd_T5Otppfrt3uQDP8I8vGY_P_aem_4VE3MSL6ZiqOxNDfWMI5jQ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-turquoise-400 hover:text-turquoise-300 underline transition-colors"><CalendarCheck className="w-4 h-4" />Reserva tu espacio</a>.
                  </>
                ) : (
                  benefit.description
                )}
              </p>

              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                style={{ backgroundColor: `${benefit.color}10` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Convocatoria Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://redwoodventuresmx-my.sharepoint.com/personal/nikole_montoya_redwoodcapital_partners/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fnikole%5Fmontoya%5Fredwoodcapital%5Fpartners%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FConvocatoria%20RZ%20actualizada%202%2Epdf&parent=%2Fpersonal%2Fnikole%5Fmontoya%5Fredwoodcapital%5Fpartners%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-lg rounded-xl transition-all shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 group"
          >
            <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Convocatoria oficial (PDF)</span>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </a>
          <p className="mt-4 text-base text-slate-400">
            Para mayor detalle, consulta las bases de la convocatoria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
