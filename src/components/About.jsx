import logo from '../assets/logo.svg';

const values = [
  {
    icon: '📊',
    title: 'Datos',
    desc: 'Lo cuantitativo que mide y define',
  },
  {
    icon: '🌍',
    title: 'Contexto',
    desc: 'Lo que se vive y experimenta',
  },
  {
    icon: '👥',
    title: 'Personas',
    desc: 'Lo que se siente y no se dice',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-lightest-blue">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-primary-navy mb-6">
            Quiénes Somos
          </h2>
          <p className="text-secondary-gray mb-4">
            En Analítica Consultores entendemos que los datos por sí solos no
            cuentan toda la historia. Nuestra metodología integra tres elementos
            fundamentales que siempre están presentes en cada proyecto.
          </p>
          <p className="text-secondary-gray mb-6">
            Como el compás fragmentado de nuestro imagotipo, reconocemos que la
            realidad es compleja y no todo encaja perfectamente. Sin embargo, hay
            estructura, hay orden, hay una lógica interna que podemos descubrir
            y aprovechar.
          </p>

          <ul className="space-y-4">
            {values.map((v) => (
              <li
                key={v.title}
                className="flex items-center gap-4 bg-white p-4 rounded-md hover:translate-x-2 shadow transition"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-accent-green rounded-full text-primary-navy text-xl">
                  {v.icon}
                </span>
                <span>
                  <strong>{v.title}</strong> – {v.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-72" />
        </div>
      </div>
    </section>
  );
}
