import { motion } from 'motion/react';
import { OrbitalDecoration } from './components/OrbitalDecoration';
import { Navbar } from './components/Navbar';
import { StatsSection } from './components/StatsSection';
import { WhoWeSeekSection } from './components/WhoWeSeekSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowToApplySection } from './components/HowToApplySection';
import { TimelineSection } from './components/TimelineSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoCarousel } from './components/PhotoCarousel';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Sparkles, ArrowRight, PlayCircle, FileText } from 'lucide-react';
import gobiernoJaliscoLogo from '../imports/escudo_zapopan_sinfondo.png';

// Editable content
const content = {
  logoText: "TU MARCA",
  heroQuote: "Aquí va mi frase principal o descripción corta del proyecto, manteniendo el estilo de cita grande y elegante.",
  overviewTitleLeft: "Información General",
  overviewItems: [
    { label: "Industria", value: "Aquí va la industria" },
    { label: "Categoría", value: "Aquí va la categoría" },
    { label: "Año", value: "2025" },
    { label: "Ubicación", value: "Aquí va la ubicación" },
  ],
  overviewTitleRight: "Información General",
  overviewDescription: "Aquí va la descripción general del proyecto. Debe ocupar varias líneas y mantener una lectura limpia, elegante y muy parecida a la composición visual de la referencia.",
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-turquoise-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-6">

          {/* Hero content */}
          <div className="max-w-6xl mx-auto text-center mt-20 lg:mt-32 mb-20">
            {/* Left column - text content */}
            <div className="space-y-8">
              {/* Value prop badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-turquoise-500/10 border border-white/10 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <span className="font-medium text-slate-200 font-[Lufga] text-[20px]">Convocatoria 15ª Generación Abierta</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >Lleva tu <span className="italic">startup </span><span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">a otro nivel</span> en 120 días<br /></motion.h1>

              {/* Supporting paragraph */}
              <motion.p
                className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >Aceleramos startups de alto impacto con mentoría, financiamiento y conexión con inversionistas.</motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="https://redbean.charly.io/spar/programs/RetoZapopan2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center gap-2"
                >
                  Aplica ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="#beneficios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#beneficios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-5 h-5" />
                  Beneficios
                </a>
              </motion.div>

              {/* Trust indicators */}
            </div>

            {/* Dashboard visual - centered below */}
            
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <StatsSection />

      {/* EDITORIAL SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 py-16 lg:py-20 px-8 lg:px-16 max-w-[1800px] mx-auto">
        
          {/* LEFT COLUMN - Logo + Decorative Graphics */}
          <motion.div 
            className="relative flex flex-col justify-between min-h-[300px] lg:min-h-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Orbital decoration */}
            <div className="relative flex-1 hidden lg:block">
              <PhotoCarousel />
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Main Content */}
          <motion.div
            className="flex flex-col justify-center gap-6 lg:gap-8 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Hero Quote */}
            <div className="space-y-4">
              <blockquote className="font-medium leading-tight tracking-tight text-[36px]">¿Qué es Reto Zapopan?</blockquote>
            </div>

            {/* Overview Grid */}
            <div className="pt-6 border-t border-white/5 max-w-3xl mx-auto">

              {/* Description */}
              <div className="space-y-4 text-center">

                <motion.p
                  className="text-base lg:text-lg leading-relaxed text-slate-300 text-justify"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                ><span className="font-bold text-[#FF007A]">Reto Zapopan</span> es una iniciativa del Gobierno de Zapopan y una de las aceleradoras&nbsp;&nbsp;más grandes&nbsp;&nbsp;de América Latina, que impulsa startups de base tecnológica, con alto impacto y gran potencial de crecimiento y escalabilidad.</motion.p>
              </div>

              {/* Gobierno Jalisco Logo */}
              <div className="mt-8 flex justify-center">
                <img
                  src={gobiernoJaliscoLogo}
                  alt="Gobierno de Jalisco"
                  className="h-16 w-auto opacity-80"
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* Mobile orbital decoration — usar absolute (no fixed) para evitar
            flashes blancos en iPhone al scrollear entre secciones */}
        <div className="hidden lg:block absolute bottom-0 left-0 opacity-30 pointer-events-none">
          <OrbitalDecoration />
        </div>

        {/* Subtle background glow — absolute en vez de fixed para iOS */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* WHO WE SEEK SECTION */}
      <WhoWeSeekSection />

      {/* BENEFITS SECTION */}
      <BenefitsSection />

      {/* HOW TO APPLY SECTION */}
      <HowToApplySection />

      {/* TIMELINE SECTION */}
      <TimelineSection />

      {/* SUCCESS STORIES SECTION */}
      <SuccessStoriesSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}