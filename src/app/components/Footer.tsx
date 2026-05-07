import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import escudoZapopan from '../../imports/escudo_zapopan_sinfondo-1.png';

const allies = [
  'Gobierno de Zapopan',
  'Endeavor México',
  'ITESO',
  'Tec de Monterrey',
  'UdeG',
  'INADEM',
  'Mutuo',
  '500 Global',
  'COMECYT',
  'NAFIN',
];

const sections = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Cómo postularse', href: '#como-postularse' },
  { name: 'Fechas', href: '#fechas' },
  { name: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/RetoZapopanOficial' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/retozapopan/' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-turquoise-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Allies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-6 text-center">
            Aliados institucionales
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 lg:gap-6 animate-scroll">
              {[...allies, ...allies].map((ally, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0"
                >
                  {ally}
                </span>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `
            }} />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FF007A]">Reto Zapopan</h3>
            <p className="text-slate-400 mb-6">
              El programa de aceleración de startups del Gobierno de Zapopan.
            </p>
            <a
              href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              Inscríbete ahora
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-6">Secciones</h4>
            <ul className="space-y-3">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={section.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(section.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-6">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <img
                src={escudoZapopan}
                alt="Escudo Zapopan"
                className="h-20 w-auto opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 <span className="text-[#FF007A]">Reto Zapopan</span> · Gobierno de Zapopan</p>
            <a href="https://www.zapopan.gob.mx/v3/avisodeprivacidad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
