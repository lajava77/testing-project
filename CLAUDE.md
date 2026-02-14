# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website built with Astro, featuring internationalization (i18n) and social media feed integrations.

**Stack:**
- Astro (static site framework)
- Tailwind CSS
- astro-i18next (i18n plugin)
- TypeScript (recommended)

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run linter
```

## Internationalization Architecture

**Default locale:** Spanish (es)
**Supported locales:** es, en, gl (Galician)

**i18n Configuration:**
- Config file: `astro-i18next.config.mjs` in project root
- Translation files: `public/locales/{locale}/{namespace}.json`
- Route structure uses `[locale]` dynamic routing in `src/pages/[locale]/`
- Routes are translated in the i18n config (e.g., "about" → "acerca-de" for es/gl)

**Translation Usage in Components:**
```javascript
import { t, changeLanguage } from "i18next";
changeLanguage(currentLocale);
// Use t("nav.home") to access translations
```

## Project Structure

```
src/
├── components/        # Reusable components (Header, Footer, LanguageSwitcher, SocialFeed)
├── layouts/          # Layout templates
└── pages/
    └── [locale]/     # Locale-specific pages (index, about, contact)
public/
└── locales/          # Translation JSON files organized by locale
    ├── es/
    ├── en/
    └── gl/
```

## Environment Variables

Social media API tokens are stored in `.env` (gitignored):
- `INSTAGRAM_TOKEN`
- `TWITTER_BEARER_TOKEN`
- `FACEBOOK_ACCESS_TOKEN`

## Social Media Feeds

Two approaches documented:
1. **Native embeddings** (recommended for static sites) - Uses platform embed code
2. **API + build time** - Fetches data during build using platform APIs

## Configuration Files

- `astro.config.mjs` - Main Astro config (integrations, output mode)
- `astro-i18next.config.mjs` - i18n routes and locale configuration
- `tsconfig.json` - TypeScript configuration

## Deployment

Site configured for static output. Compatible with Vercel, Netlify, and GitHub Pages. For GitHub Pages, set `site` and `base` in `astro.config.mjs`.
