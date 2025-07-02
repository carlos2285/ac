# Logo + Navbar package for Analítica Consultores (React + TailwindCSS)

## Estructura
```
public/
  logos/
    ac-icon-blue.png
    ac-horizontal-blue.png
src/
  components/
    Logo.jsx
    Navbar.jsx
```

## Instrucciones rápidas

1. Copia la carpeta `public` y `src/components` dentro de tu proyecto React (Vite o CRA).
2. Asegúrate de tener **TailwindCSS** y **lucide-react** instalados:
   ```bash
   npm i -D tailwindcss postcss autoprefixer
   npm i lucide-react
   ```
3. Agrega la clase utilitaria de enlace en tu CSS global si quieres el subrayado animado:
   ```css
   .nav-link {
     @apply relative px-1.5 font-semibold text-slate-700 transition;
   }
   .nav-link::after {
     content: "";
     @apply absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all;
   }
   .nav-link:hover::after,
   .nav-link:focus::after {
     @apply w-full;
   }
   ```
4. Importa y utiliza `<Navbar />` en tu componente raíz (`App.jsx`) o layout.
5. Despliega y verifica que el logo se muestre más grande y nítido.

## Personalización

- Ajusta el tamaño con el prop `size` en rem (`size={6}` ≈ 96 px de alto).
- Cambia el logo a la variante `"icon"` o `"horizontal"`.
- Añade logos blancos si usas secciones de fondo oscuro:
  - `ac-icon-white.png`
  - `ac-horizontal-white.png`

¡Listo! 🚀