// Simple translation utility
type Translations = {
  [locale: string]: {
    [namespace: string]: {
      [key: string]: any;
    };
  };
};

const translations: Translations = {
  es: {
    common: {
      nav: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto"
      },
      footer: {
        rights: "Todos los derechos reservados"
      }
    },
    home: {
      welcome: "Bienvenido",
      description: "Sitio web estático con Astro"
    }
  },
  en: {
    common: {
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact"
      },
      footer: {
        rights: "All rights reserved"
      }
    },
    home: {
      welcome: "Welcome",
      description: "Static website with Astro"
    }
  },
  gl: {
    common: {
      nav: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto"
      },
      footer: {
        rights: "Todos os dereitos reservados"
      }
    },
    home: {
      welcome: "Benvido",
      description: "Sitio web estático con Astro"
    }
  }
};

export function t(key: string, locale: string = 'es'): string {
  const keys = key.split('.');
  const namespace = keys[0];
  const path = keys.slice(1);

  let value: any = translations[locale]?.[namespace];

  for (const k of path) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if not found
    }
  }

  return typeof value === 'string' ? value : key;
}

export const locales = ['es', 'en', 'gl'] as const;
export type Locale = typeof locales[number];
