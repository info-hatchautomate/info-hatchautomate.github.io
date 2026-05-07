import { motion } from 'motion/react';
import { Menu, X, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../imports/Logotipo_Primario_(Blanco).png';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Cómo postularse', href: '#como-postularse' },
  { name: 'Fechas', href: '#fechas' },
  { name: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer to June 6, 2026
  useEffect(() => {
    const targetDate = new Date('2026-06-06T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-slate-950/40 backdrop-blur-sm'
        }`}
        style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Reto Zapopan"
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation links - desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-300 hover:text-white transition-colors font-medium text-[15px]"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Countdown Timer - desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{timeLeft.days}</span>
                    <span className="text-[10px] text-slate-400 uppercase">días</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">hrs</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">min</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">seg</span>
                  </div>
                </div>
              </div>

              <a
                href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 text-[18px]"
              >
                Postúlate
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-75 animate-ping" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[72px] left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2 font-medium"
              >
                {link.name}
              </button>
            ))}

            {/* Countdown Timer - mobile */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{timeLeft.days}</span>
                    <span className="text-[10px] text-slate-400 uppercase">días</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">hrs</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">min</span>
                  </div>
                  <span className="text-slate-500">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-white tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-400 uppercase">seg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-orange-500/25 block text-center"
            >
              Inscríbete
              <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-75 animate-ping" />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
