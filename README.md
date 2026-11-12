# Croak Webpage

Sitio web de Croak, un producto de monitoreo inteligente de calidad del agua para el hogar.

El proyecto contiene la landing principal, la página de `Nosotros`, assets reales del prototipo y la configuración necesaria para publicar en GitHub Pages.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- GitHub Pages

## Requisitos

Necesitas tener instalado:

- Node.js
- npm

Puedes revisar tus versiones con:

```bash
node -v
npm -v
```

## Instalación

Instala dependencias:

```bash
npm install
```

## Desarrollo local

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una URL local en la terminal. Normalmente será:

```text
http://localhost:5173/croak_webpage/
```

## Build de producción

Genera una versión optimizada en `dist/`:

```bash
npm run build
```

## Despliegue

El proyecto está configurado para publicarse en GitHub Pages.

Para publicar la versión actual:

```bash
npm run deploy
```

Ese comando ejecuta el build y sube `dist/` al branch `gh-pages`.

URL de producción:

[https://santiagocachoo.github.io/croak_webpage/](https://santiagocachoo.github.io/croak_webpage/)

Página de Nosotros:

[https://santiagocachoo.github.io/croak_webpage/#/nosotros](https://santiagocachoo.github.io/croak_webpage/#/nosotros)

## Scripts

- `npm run dev`: levanta el servidor local de Vite.
- `npm run build`: genera el build de producción en `dist/`.
- `npm run predeploy`: ejecuta el build antes de publicar.
- `npm run deploy`: publica `dist/` en GitHub Pages.
- `npm run model -- "/ruta/al/modelo.glb"`: optimiza un modelo 3D para la web (ver "Modelo 3D").

## Estructura del proyecto

```text
croak_webpage/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── config.ts
│   │   └── components/
│   │       ├── FAQ.tsx
│   │       ├── FinalCTA.tsx
│   │       ├── Footer.tsx
│   │       ├── InterestForm.tsx
│   │       ├── Navbar.tsx
│   ├── assets/
│   │   ├── croak_hero.webp
│   │   ├── croak_logo.webp
│   │   ├── croak_model_exploded.webp
│   │   ├── croak_model_side.webp
│   │   └── preview_app.webp
│   ├── hooks/
│   │   └── useStagger.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   └── HomePage.tsx
│   ├── styles/
│   │   ├── index.css
│   │   └── theme.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Cómo funciona la app

- `index.html` define el contenedor raíz.
- `src/main.tsx` monta React y envuelve la app con `HashRouter`.
- `src/app/App.tsx` define las rutas principales.
- `src/pages/HomePage.tsx` contiene la landing completa (hero, métricas, problema, prototipo, cómo funciona y app).
- `src/pages/AboutPage.tsx` compone la página de Nosotros.
- `src/app/components/` contiene las secciones reutilizables.
- `src/assets/` contiene imágenes locales del producto, logo y preview de app.
- `src/styles/index.css` importa Tailwind, fuentes y estilos globales.
- `src/styles/theme.css` contiene variables, estilos base, animaciones y sistema visual.

## Rutas

Se usa `HashRouter` porque el sitio se publica en GitHub Pages como sitio estático.

Rutas actuales:

- `/#/`: landing principal.
- `/#/nosotros`: página de Nosotros.

Esto evita errores 404 al refrescar o entrar directo a una ruta interna en GitHub Pages.

## Secciones principales

La landing está compuesta por:

- `Navbar`: navegación principal, con enlace a Nosotros y CTA.
- Secciones propias de la landing (en `HomePage.tsx`): hero, métricas, el problema, el prototipo, cómo funciona y app.
- `FAQ`: preguntas frecuentes con acordeón.
- `FinalCTA`: cierre de conversión.
- `Footer`: enlaces útiles, redes y contacto.

## Assets

Assets locales actuales:

- `croak_logo.webp`: logo de Croak.
- `croak_hero.webp`: imagen del dispositivo físico.
- `croak_model_exploded.webp`: modelo 3D con componentes internos visibles.
- `croak_model_side.webp`: vista lateral del modelo 3D.
- `preview_app.webp`: captura del prototipo de la app móvil.
- `croak_model.glb`: ensamble 3D (9 piezas) que usa el visor "Explorar en 3D".
- `public/og-image.jpg`: vista previa (1200×630) que aparece al compartir el enlace en WhatsApp o redes.

Los assets se importan desde componentes para que Vite los procese correctamente durante el build.

## Modelo 3D

La sección "El prototipo" tiene un botón **Explorar en 3D** que muestra el modelo de Onshape con [`<model-viewer>`](https://modelviewer.dev): se puede girar, acercar y, en celulares compatibles, ver en realidad aumentada ("Ver en tu espacio").

- El visor (`src/app/components/Model3DViewer.tsx`) solo se descarga cuando alguien toca el botón, así que no afecta la carga inicial.
- El modelo está en `src/assets/croak_model.glb`, comprimido con Draco.
- El decodificador Draco se sirve desde `public/draco/` (copiado de `three/examples/jsm/libs/draco/gltf/`), sin depender de un CDN. Si actualizan `three`, vuelvan a copiar esos dos archivos.

### De dónde sale el modelo

El modelo actual se generó desde el ensamble de SolidWorks (`ensamblaje completo.SLDASM`) **sin los archivos de las piezas**: SolidWorks guarda dentro del ensamble una copia de la malla de cada pieza, y `scripts/sldasm-to-glb.py` la extrae. Así el modelo trae las 9 piezas por separado (carcasa, electrodo de pH, sensor de turbidez, sensor TDS, empaques y roscas), el tubo transparente y la animación "Separar" que usa el botón **Separar piezas** del visor.

```bash
python3 scripts/sldasm-to-glb.py "/ruta/a/ensamblaje completo.SLDASM" /tmp/croak_ensamble.glb
npm run model -- /tmp/croak_ensamble.glb
```

En `scripts/sldasm-to-glb.py` están los nombres que se muestran, los colores de cada pieza y cuánto sube cada una en la vista separada. Las etiquetas y el encuadre de la vista separada están en `src/app/components/Model3DViewer.tsx` (`SENSOR_LABELS`, `EXPLODED_TARGET`).

El formato interno de SolidWorks no está documentado; el script se probó con este archivo (SolidWorks 2021). Si consiguen los `.SLDPRT` (con *Pack and Go*), lo más confiable es exportar el ensamble a GLB desde SolidWorks u Onshape.

### Actualizar el modelo desde Onshape

1. En Onshape: clic derecho en la pestaña del Part Studio o ensamble → *Export* → formato **GLB**.
2. Optimízalo para la web:

```bash
npm run model -- "/ruta/al/export.glb"
```

El script (`scripts/optimize-model.mjs`) une las caras que Onshape exporta por separado, simplifica la malla de forma casi imperceptible, corrige los colores (Onshape los guarda en sRGB y glTF los espera lineales; sin esto el modelo se ve deslavado) y comprime con Draco. Un export de ~1.5 MB queda en ~70 KB.

## Navegación actual

### Navbar

- `Nosotros`: abre la página de Nosotros.
- `Quiero Croak`: lleva al CTA final en la landing.

### Footer

- `Nosotros`: abre la página de Nosotros.
- `Quiero Croak`: abre correo para contacto comercial.
- `Contacto`: abre correo de contacto.
- `Prototipo de la app`: abre el prototipo interactivo externo de la app.
- Iconos sociales: YouTube, GitHub e Instagram.

## Contacto

Correo actual de contacto:

```text
croakfernando@gmail.com
```

## Flujo recomendado de trabajo

1. Actualiza tu rama local.
2. Crea una rama nueva o trabaja sobre la rama de diseño correspondiente.
3. Haz cambios pequeños y revisables.
4. Corre el build.
5. Revisa visualmente en local, especialmente móvil.
6. Haz commit con un mensaje claro.
7. Sube los cambios.
8. Despliega con `npm run deploy` cuando la versión esté lista.

## Comandos útiles de Git

Crear una rama:

```bash
git switch -c feature/nombre-del-cambio
```

Ver cambios:

```bash
git status
git diff
```

Crear commit:

```bash
git add .
git commit -m "feat: describe el cambio"
```

Subir rama:

```bash
git push -u origin feature/nombre-del-cambio
```

Forzar `main` con una rama local, si se quiere reemplazar `main` con esa versión:

```bash
git push origin nombre-de-rama:main --force-with-lease
```

## Convención de commits

Usa mensajes tipo Conventional Commits:

- `feat:` para funcionalidades nuevas.
- `fix:` para correcciones.
- `refactor:` para reorganización sin cambiar comportamiento.
- `style:` para cambios visuales o de formato.
- `docs:` para documentación.
- `chore:` para tareas de mantenimiento.

Ejemplos:

```text
feat: redesign Croak landing experience
fix: improve hero mobile layout
refactor: simplify navigation links
docs: update Spanish readme
```

## Notas de mantenimiento

- No commitear `node_modules`.
- No editar `dist/` manualmente.
- `dist/` es salida generada por `npm run build`.
- Mantener `vite-env.d.ts`; ayuda con los tipos de Vite y assets importados.
- Probar en móvil antes de publicar, porque el sitio se compartirá por QR.
- Evitar dependencias nuevas si el efecto se puede resolver con React, Tailwind o CSS.
- Preferir componentes existentes antes de duplicar secciones.

## Archivos recomendados para empezar

Si vas a modificar el sitio, empieza por:

- `src/pages/HomePage.tsx`
- `src/app/components/FinalCTA.tsx`
- `src/app/components/InterestForm.tsx`
- `src/app/components/FAQ.tsx`
- `src/app/components/Footer.tsx`
- `src/pages/AboutPage.tsx`
- `src/styles/theme.css`

## Publicación rápida

Para publicar una versión ya validada:

```bash
npm run build
npm run deploy
```

Después revisa:

[https://santiagocachoo.github.io/croak_webpage/](https://santiagocachoo.github.io/croak_webpage/)
