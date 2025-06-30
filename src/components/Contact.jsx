import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary-navy mb-4">
            Conversemos
          </h2>
          <p className="text-secondary-gray max-w-xl mx-auto">
            ¿Listo para transformar tus datos en decisiones estratégicas?
            Contáctanos y exploremos juntos las posibilidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className="block font-medium text-primary-navy mb-1"
              >
                Nombre
              </label>
              <input
                id="nombre"
                required
                className="w-full px-4 py-3 border-2 border-light-blue/50 rounded-md focus:border-primary-navy outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-primary-navy mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-light-blue/50 rounded-md focus:border-primary-navy outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="empresa"
                className="block font-medium text-primary-navy mb-1"
              >
                Empresa
              </label>
              <input
                id="empresa"
                className="w-full px-4 py-3 border-2 border-light-blue/50 rounded-md focus:border-primary-navy outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block font-medium text-primary-navy mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-light-blue/50 rounded-md focus:border-primary-navy outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-navy text-white py-3 px-8 rounded-md border-2 border-primary-navy hover:bg-transparent hover:text-primary-navy transition"
            >
              Enviar Mensaje
            </button>

            {submitted && (
              <p className="text-green-600 font-medium">
                ¡Gracias! Recibimos tu mensaje.
              </p>
            )}
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-lightest-blue p-6 rounded-md">
              <span className="w-12 h-12 flex items-center justify-center bg-primary-navy text-white rounded-full">
                📧
              </span>
              <div>
                <h4 className="font-semibold text-primary-navy">Email</h4>
                <p>hola@analiticaconsultores.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-lightest-blue p-6 rounded-md">
              <span className="w-12 h-12 flex items-center justify-center bg-primary-navy text-white rounded-full">
                📱
              </span>
              <div>
                <h4 className="font-semibold text-primary-navy">Teléfono</h4>
                <p>+503 7489 6363</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
