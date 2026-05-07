import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Reemplaza este número con el número de WhatsApp real
    const phoneNumber = '523351252813'; // Formato: código de país + número sin espacios ni guiones
    const message = encodeURIComponent('Hola, me interesa conocer más sobre Reto Zapopan');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Necesitas ayuda? Escríbenos
      </span>
    </motion.button>
  );
}
