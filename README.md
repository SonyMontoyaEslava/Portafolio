# Portafolio de Sony Montoya Eslava

- Node.js 18 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Estructura

- `index.html`: entrada del proyecto Vite.
- `src/App.jsx`: composición principal del portafolio.
- `src/components/`: hero, perfil, experiencia, educación, habilidades y contacto.
- `src/data/profile.js`: contenido del CV separado del layout.
- `src/hooks/`: lógica de navegación activa y animaciones.
- UI: `framer-motion`, `lucide-react`, `@fontsource/inter` y `@fontsource/space-grotesk`.