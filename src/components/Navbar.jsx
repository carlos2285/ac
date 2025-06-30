import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-lightest-blue/95 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Analítica Consultores" className="w-10 h-10" />
          <span className="font-semibold text-primary-navy whitespace-nowrap">
            ANALÍTICA&nbsp;CONSULTORES
          </span>
        </a>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-secondary-gray hover:text-primary-navy after:block after:h-0.5 after:bg-primary-navy after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-primary-navy"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-lightest-blue space-y-4 px-6 py-4"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-secondary-gray hover:text-primary-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
