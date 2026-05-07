import { motion } from 'motion/react';
import { FileText, UserPlus, Search, Edit, Upload, Send, ExternalLink } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Revisa las bases',
    description: 'Consulta la convocatoria completa antes de iniciar tu postulación.',
    link: 'Ver convocatoria',
    color: '#fd8106',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Regístrate',
    description: 'Crea tu cuenta en la plataforma oficial de postulación.',
    link: 'Ir a la plataforma',
    color: '#5eccca',
  },
  {
    number: '03',
    icon: Search,
    title: 'Ingresa a Reto Zapopan',
    description: 'Busca y accede a Reto Zapopan 15° Generación dentro de la plataforma.',
    link: 'Ver convocatoria 2026',
    color: '#ff007a',
  },
  {
    number: '04',
    icon: Edit,
    title: 'Registra tu proyecto',
    description: 'Llena el formulario completo. Sé lo más detallado posible.',
    color: '#7f11fe',
  },
  {
    number: '05',
    icon: Upload,
    title: 'Adjunta tu Pitch Deck',
    description: 'Máximo 10 diapositivas. Consulta el manual de Pitch Deck.',
    link: 'Ver manual de Pitch Deck',
    color: '#ffd102',
  },
  {
    number: '06',
    icon: Send,
    title: 'Haz clic en "Enviar"',
    description: 'No basta con guardar. Las aplicaciones incompletas se descalifican. ¡No olvides enviar tu postulación!',
    color: '#fd8106',
  },
];

export function HowToApplySection() {
  return (
    <section id="como-postularse" className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-turquoise-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            ¿Cómo postularse?
          </h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">La postulación es 100% en línea. Sigue estos 6 pasos.</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              {/* Number badge */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 border-slate-950 text-[20px] text-[24px]"
                style={{ backgroundColor: step.color, color: '#000000' }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${step.color}20` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title.includes('Reto Zapopan') ? (
                  <>
                    Ingresa a <span className="text-[#FF007A]">Reto Zapopan</span>
                  </>
                ) : (
                  step.title
                )}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed mb-4">
                {step.description.includes('Reto Zapopan') ? (
                  <>
                    Busca y accede a <span className="text-[#FF007A]">Reto Zapopan</span> 15° Generación dentro de la plataforma.
                  </>
                ) : (
                  step.description
                )}
              </p>

              {/* Link if available */}
              {step.link && (
                <a
                  href={
                    step.title === 'Regístrate'
                      ? 'https://redbean.charly.io/spar/programs/RetoZapopan2026'
                      : step.title === 'Adjunta tu Pitch Deck'
                      ? 'https://redwoodventuresmx.sharepoint.com/sites/Marketing/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FMarketing%2FDocumentos%20compartidos%2FDise%C3%B1o%202026%2FRedbean%2FReto%20Zapopan%2FManual%20de%20Pitch%20Deck%20Reto%20Zapopan%2015a%20Generacio%CC%81n%2Epdf&parent=%2Fsites%2FMarketing%2FDocumentos%20compartidos%2FDise%C3%B1o%202026%2FRedbean%2FReto%20Zapopan&p=true&ga=1'
                      : step.title === 'Revisa las bases' || step.title.includes('Reto Zapopan')
                      ? 'https://redwoodventuresmx-my.sharepoint.com/personal/nikole_montoya_redwoodcapital_partners/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fnikole%5Fmontoya%5Fredwoodcapital%5Fpartners%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FConvocatoria%20RZ%20actualizada%202%2Epdf&parent=%2Fpersonal%2Fnikole%5Fmontoya%5Fredwoodcapital%5Fpartners%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1'
                      : '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline transition-colors"
                  style={{ color: step.color }}
                >
                  {step.link}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                style={{ backgroundColor: `${step.color}10` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            Postúlate
          </a>
          <p className="mt-6 text-base text-slate-400">
            ¿Necesitas ayuda? Visítanos en{' '}
            <a
              href="https://maps.google.com/?q=Mutuo+Naciones+Unidas,+Av.+Naciones+Unidas+5573,+Zapopan,+Jal."
              target="_blank"
              rel="noopener noreferrer"
              className="text-turquoise-400 hover:text-turquoise-300 underline transition-colors"
            >
              Mutuo Naciones Unidas
            </a>{' '}
            o{' '}
            <a
              href="https://wa.me/523351252813?text=Hola,%20necesito%20ayuda%20con%20mi%20postulación%20a%20Reto%20Zapopan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-turquoise-400 hover:text-turquoise-300 underline transition-colors"
            >
              escríbenos en el chat
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
