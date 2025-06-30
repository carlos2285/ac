const services = [
  {
    icon: '📊',
    title: 'Análisis de Datos',
    desc: 'Transformamos datos complejos en información clara y accionable. Identificamos patrones, tendencias y oportunidades ocultas en tu información.',
  },
  {
    icon: '🎯',
    title: 'Estrategia Basada en Datos',
    desc: 'Desarrollamos estrategias sólidas fundamentadas en evidencia empírica, conectando insights con objetivos de negocio específicos.',
  },
  {
    icon: '🔍',
    title: 'Investigación de Mercado',
    desc: 'Investigamos el contexto real donde operan tus clientes y competidores, proporcionando una visión integral del mercado.',
  },
  {
    icon: '⚡',
    title: 'Optimización de Procesos',
    desc: 'Analizamos y mejoramos tus procesos organizacionales mediante metodologías analíticas y comprensión del comportamiento humano.',
  },
  {
    icon: '📈',
    title: 'Business Intelligence',
    desc: 'Implementamos soluciones de inteligencia de negocio que facilitan la toma de decisiones informadas en tiempo real.',
  },
  {
    icon: '🎨',
    title: 'Visualización de Datos',
    desc: 'Creamos dashboards y visualizaciones intuitivas que comunican insights complejos de manera clara y comprensible.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary-navy mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-secondary-gray max-w-xl mx-auto">
            Integramos datos, contexto y personas para generar insights que
            impulsan decisiones estratégicas efectivas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-lightest-blue p-8 rounded-xl border border-light-blue/30 text-center hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-navy text-white text-2xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-navy mb-2">
                {s.title}
              </h3>
              <p className="text-secondary-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
