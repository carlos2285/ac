# Analítica Consultores – Fix: CommonJS PostCSS/Tailwind config

Soluciona el error **"Failed to load PostCSS config: Unexpected token 'export'"** que se presentó en Amplify.

## Cambios clave
- `postcss.config.js` y `tailwind.config.js` ahora usan `module.exports = {}` (CommonJS), completamente compatibles con Node 18 en AWS Amplify.