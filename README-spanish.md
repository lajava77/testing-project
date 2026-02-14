# Sitio Web Estático con Astro

Proyecto de sitio web estático construido con Astro, incluyendo soporte para internacionalización (i18n) y feeds de redes sociales.

## Stack Tecnológico

- **Astro** - Framework para sitios estáticos de alta velocidad
- **Tailwind CSS** - Framework CSS con utilidades
- **astro-i18next** - Plugin de internacionalización
- **TypeScript** - Tipado estático (opcional pero recomendado)

## Requisitos Previos

- Node.js 18.14.1 o superior
- npm, pnpm o yarn

## Instalación

```bash
# Crear nuevo proyecto Astro
npm create astro@latest

# Cuando se te pregunte:
# - Project name: my-astro-site
# - Template: Empty
# - Install dependencies: Yes
# - TypeScript: Yes (recomendado)
# - TypeScript strict: Yes
# - Git repository: Yes

cd my-astro-site

# Instalar Tailwind CSS
npx astro add tailwind

# Instalar plugin de i18n
npm install astro-i18next i18next
```

## Configuración de Internacionalización

### 1. Crear archivo de configuración i18n

Crea `astro-i18next.config.mjs` en la raíz del proyecto:

```javascript
export default {
  defaultLocale: "es",
  locales: ["es", "en", "gl"],
  routes: {
    en: {
      about: "about",
      contact: "contact",
    },
    es: {
      about: "acerca-de",
      contact: "contacto",
    },
    gl: {
      about: "acerca-de",
      contact: "contacto",
    },
  },
};
```

### 2. Estructura de carpetas para traducciones

```
public/
  locales/
    es/
      common.json
      home.json
    en/
      common.json
      home.json
    gl/
      common.json
      home.json
```

### 3. Ejemplo de archivo de traducción (`public/locales/es/common.json`):

```json
{
  "nav": {
    "home": "Inicio",
    "about": "Acerca de",
    "contact": "Contacto"
  },
  "footer": {
    "rights": "Todos los derechos reservados"
  }
}
```

## Configuración de Astro

Actualiza `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  output: 'static',
});
```

## Estructura del Proyecto

```
/
├── public/
│   ├── locales/           # Archivos de traducción
│   │   ├── es/
│   │   ├── en/
│   │   └── gl/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── SocialFeed.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── [locale]/
│       │   ├── index.astro
│       │   ├── about.astro
│       │   └── contact.astro
├── astro.config.mjs
├── astro-i18next.config.mjs
├── package.json
└── tsconfig.json
```

## Integración de Feeds de Redes Sociales

### Opción 1: Embeddings Nativos (Recomendado para sitios estáticos)

#### Twitter/X Timeline
```astro
---
// src/components/TwitterFeed.astro
---
<div class="twitter-feed">
  <a 
    class="twitter-timeline" 
    data-height="500" 
    data-theme="light" 
    href="https://twitter.com/tu_usuario?ref_src=twsrc%5Etfw"
  >
    Tweets by tu_usuario
  </a>
</div>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

#### Instagram Feed
```astro
---
// src/components/InstagramFeed.astro
---
<div class="instagram-feed">
  <blockquote 
    class="instagram-media" 
    data-instgrm-permalink="https://www.instagram.com/tu_usuario/"
    data-instgrm-version="14"
  >
  </blockquote>
</div>

<script async src="//www.instagram.com/embed.js"></script>
```

#### Facebook Page Plugin
```astro
---
// src/components/FacebookFeed.astro
---
<div class="facebook-feed">
  <iframe 
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftu_pagina&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
    width="340" 
    height="500" 
    style="border:none;overflow:hidden" 
    scrolling="no" 
    frameborder="0" 
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  >
  </iframe>
</div>
```

### Opción 2: API + Build Time (Más control)

Para feeds generados en tiempo de compilación:

```bash
npm install @astrojs/rss
```

```javascript
// src/pages/api/instagram-feed.json.js
export async function get() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${import.meta.env.INSTAGRAM_TOKEN}`
  );
  const data = await response.json();
  
  return {
    body: JSON.stringify(data)
  };
}
```

## Ejemplo de Componente con i18n

```astro
---
// src/components/Header.astro
import { t, changeLanguage } from "i18next";
import LanguageSwitcher from "./LanguageSwitcher.astro";

const currentLocale = Astro.currentLocale || "es";
changeLanguage(currentLocale);
---

<header class="bg-white shadow-md">
  <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="logo">
      <a href={`/${currentLocale}`} class="text-2xl font-bold">
        Mi Sitio
      </a>
    </div>
    <ul class="flex gap-6">
      <li><a href={`/${currentLocale}`}>{t("nav.home")}</a></li>
      <li><a href={`/${currentLocale}/about`}>{t("nav.about")}</a></li>
      <li><a href={`/${currentLocale}/contact`}>{t("nav.contact")}</a></li>
    </ul>
    <LanguageSwitcher />
  </nav>
</header>
```

## Selector de Idioma

```astro
---
// src/components/LanguageSwitcher.astro
const currentPath = Astro.url.pathname;
const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'gl', name: 'Galego' }
];
---

<div class="language-switcher">
  {languages.map(lang => (
    <a 
      href={`/${lang.code}${currentPath.replace(/^\/(es|en|gl)/, '')}`}
      class="px-3 py-1 rounded hover:bg-gray-100"
    >
      {lang.name}
    </a>
  ))}
</div>
```

## Variables de Entorno

Crea un archivo `.env` para tokens de APIs:

```bash
INSTAGRAM_TOKEN=tu_token_aqui
TWITTER_BEARER_TOKEN=tu_token_aqui
FACEBOOK_ACCESS_TOKEN=tu_token_aqui
```

**Importante:** Añade `.env` a tu `.gitignore`

## Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## Despliegue

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
Configura en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/nombre-repo',
});
```

## Optimizaciones

- **Imágenes**: Usa el componente `<Image />` de Astro para optimización automática
- **CSS**: Tailwind purga automáticamente CSS no utilizado
- **JavaScript**: Astro envía 0 JS por defecto, solo añade lo necesario
- **Fonts**: Usa `fontsource` para fuentes auto-hospedadas

## Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-api)
- [Twitter Developer Platform](https://developer.twitter.com)

## Licencia

MIT

---

**Nota**: Este README está diseñado para ser usado con Claude Code. Adapta las configuraciones según tus necesidades específicas.
