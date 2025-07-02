import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="hidden sm:block">
            <Logo variant="horizontal" size={6} />
          </span>
          <span className="sm:hidden">
            <Logo variant="icon" size={8} />
          </span>
        </Link>

        <button
          className="inline-flex items-center sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={\`\${open ? "block" : "hidden"} absolute left-0 top-full w-full bg-white sm:static sm:block sm:w-auto sm:bg-transparent\`}>
          <ul className="flex flex-col gap-4 p-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:p-0">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
            <li><Link to="/servicios" className="nav-link">Servicios</Link></li>
            <li><Link to="/proyectos" className="nav-link">Proyectos</Link></li>
            <li><Link to="/cursos" className="nav-link">Cursos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}