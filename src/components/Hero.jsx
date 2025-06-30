import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-lightest-blue to-white pt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy leading-tight mb-4">
            Decisiones que<br className="hidden md:block" />
            Transforman
          </h1>
          <p className="text-secondary-gray text-xl mb-6">
            Consultoría estratégica basada en datos
          </p>
          <p className="text-secondary-gray mb-8">
            Transformamos la complejidad de tus datos en insights claros y
            accionables. Conectamos los puntos entre información cuantitativa,
            contexto real y las personas que toman las decisiones.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary-navy text-white py-3 px-8 rounded-md border-2 border-primary-navy hover:bg-transparent hover:text-primary-navy transition"
          >
            Conversemos
          </a>
        </div>
        {/* Visual */}
        <div className="relative flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-72 opacity-10 absolute" />
          <div className="relative w-80 h-80">
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-2 h-2 bg-light-blue rounded-full"
                style={{
                  top: ['20%', '60%', '30%'][i],
                  left: ['10%', 'auto', '20%'][i],
                  right: ['auto', '15%', 'auto'][i],
                  bottom: ['auto', 'auto', '30%'][i],
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
