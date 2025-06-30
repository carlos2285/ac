import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-8" />
            <span className="font-semibold">ANALÍTICA CONSULTORES</span>
          </div>
          <p className="opacity-80">
            Transformamos datos en decisiones estratégicas que impulsan el
            crecimiento y la innovación.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Enlaces</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#inicio" className="hover:opacity-100">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:opacity-100">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:opacity-100">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:opacity-100">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <h4 className="font-semibold mb-3">Contacto</h4>
          <p className="opacity-80">
            hola@analiticaconsultores.com
            <br />
            +503&nbsp;7489&nbsp;6363
          </p>
          <p className="opacity-50 mt-6">
            &copy; {new Date().getFullYear()} Analítica Consultores
          </p>
        </div>
      </div>
    </footer>
  );
}
