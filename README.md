# Analítica Consultores – Starter con Logo grande y Router listo

## Cómo usar

```bash
git clone <tu-fork>.git
cd analitica-consultores
npm install   # instala react-router-dom, lucide-react, tailwind, etc.
npm run dev   # servidor local
npm run build # para producción (lo que usa AWS Amplify)
```

1. La carpeta **public/logos/** contiene las dos variantes de logo (ícono y horizontal).
2. `src/components/Logo.jsx` y `Navbar.jsx` integran el logo y lucide-react.
3. `src/main.jsx` envuelve la app con `BrowserRouter` para que `<Link>` funcione.
4. `tailwind.config.js` define un color `primary` para subrayados y acentos.
5. `package.json` incluye `react-router-dom`, eliminando el error de Vite/Amplify.

Sube todo a GitHub y Amplify debería compilar sin errores. 🚀