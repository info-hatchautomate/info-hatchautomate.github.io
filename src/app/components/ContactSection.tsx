import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  {
    name: 'Andrea Camila Galván Torres',
    role: 'Directora de Emprendimiento',
    email: 'andrea.galvan@zapopan.gob.mx',
  },
  {
    name: 'Miriam Suro',
    role: 'Jefa de Innovación',
    email: 'Miriam.suro@zapopan.gob.mx',
  },
  {
    name: 'Eduardo Montes',
    role: 'Coordinador de Reto Zapopan',
    email: 'eduardo.montes@zapopan.gob.mx',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Contáctanos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Team members */}
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{contact.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {contact.role.includes('Reto Zapopan') ? (
                      <>
                        Coordinador de <span className="text-[#FF007A]">Reto Zapopan</span>
                      </>
                    ) : (
                      contact.role
                    )}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-turquoise-400 hover:text-turquoise-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Phone and Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Teléfono</p>
                  <p>33 3818 2200 ext. 2852 y 2871</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Mutuo+Naciones+Unidas,+Av.+Naciones+Unidas+5573,+Zapopan,+Jal."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-pink-500 mt-1 group-hover:text-pink-400 transition-colors" />
                <div>
                  <p className="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">Ubicación</p>
                  <p className="group-hover:underline">Mutuo Naciones Unidas, Piso 3</p>
                  <p className="group-hover:underline">Av. Naciones Unidas 5573, Zapopan, Jal.</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">¿Tienes más dudas? Envíanos un mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise-500 transition-colors"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-slate-300 mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise-500 transition-colors"
                      placeholder="Tu apellido"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise-500 transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise-500 transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-turquoise-500 transition-colors resize-none"
                    placeholder="Cuéntanos más detalles..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enviar mensaje
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
