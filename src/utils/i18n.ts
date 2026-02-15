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
        story: "Historia",
        updates: "Actualizaciones",
        donate: "Donar"
      },
      footer: {
        rights: "Todos los derechos reservados",
        disclaimer: "Aviso Legal Médico",
        disclaimerText: "La información proporcionada en este sitio es solo para fines informativos y no constituye asesoramiento médico profesional. Siempre consulte con profesionales de la salud calificados.",
        privacy: "Privacidad",
        contact: "Contacto",
        followUs: "Síguenos"
      },
      cta: {
        donate: "Hacer una donación",
        learnMore: "Conoce más",
        shareStory: "Compartir historia"
      }
    },
    home: {
      hero: {
        headline: "Ayuda a [Nombre] en su lucha contra VPS13D",
        subheadline: "Una niña valiente de 9 años necesita tu apoyo para acceder a tratamiento médico especializado y mejorar su calidad de vida.",
        ctaPrimary: "Donar ahora",
        ctaSecondary: "Conoce su historia"
      },
      goal: {
        title: "Meta de Recaudación",
        raised: "Recaudado",
        target: "Meta",
        supporters: "Donantes",
        daysLeft: "Días restantes",
        description: "Los fondos se destinarán a tratamientos especializados, terapias de rehabilitación, equipamiento médico adaptado y gastos relacionados con la atención médica."
      },
      story: {
        title: "Nuestra Historia",
        intro: "[Nombre] es una niña increíble de 9 años diagnosticada con una mutación del gen VPS13D, una condición genética rara que afecta el movimiento, el desarrollo cognitivo y la calidad de vida diaria. A pesar de los desafíos, ella enfrenta cada día con valentía y esperanza.",
        readMore: "Leer historia completa"
      },
      science: {
        title: "Entendiendo VPS13D",
        subtitle: "Información científica sobre la condición",
        what: "¿Qué es la mutación VPS13D?",
        whatText: "VPS13D es un gen que codifica una proteína esencial para el transporte de lípidos dentro de las células. Las mutaciones en este gen pueden causar ataxia espinocerebelosa tipo 4 (SCAR4) y trastornos del movimiento progresivo, afectando la coordinación motora, el equilibrio y las funciones cognitivas.",
        impact: "Impacto en la vida diaria",
        impactText: "Los niños con mutaciones VPS13D enfrentan desafíos significativos: dificultades para caminar, temblores, problemas de habla, retrasos en el desarrollo y necesidad de asistencia constante para actividades cotidianas. El tratamiento requiere un enfoque multidisciplinario que incluye fisioterapia, terapia ocupacional y atención médica especializada.",
        research: "Investigación y esperanza",
        researchText: "Aunque actualmente no existe cura, la investigación avanza constantemente. Las terapias de apoyo, intervenciones tempranas y tratamientos sintomáticos pueden mejorar significativamente la calidad de vida. Cada contribución nos acerca más a brindar el mejor cuidado posible."
      }
    },
    updates: {
      title: "Actualizaciones",
      subtitle: "Últimas noticias sobre el progreso de [Nombre]",
      filter: {
        all: "Todas",
        medical: "Médicas",
        daily: "Vida diaria",
        milestones: "Logros"
      },
      socialFeed: "Síguenos en redes sociales",
      noUpdates: "Próximamente más actualizaciones"
    }
  },
  en: {
    common: {
      nav: {
        home: "Home",
        story: "Story",
        updates: "Updates",
        donate: "Donate"
      },
      footer: {
        rights: "All rights reserved",
        disclaimer: "Medical Disclaimer",
        disclaimerText: "The information provided on this site is for informational purposes only and does not constitute professional medical advice. Always consult with qualified healthcare professionals.",
        privacy: "Privacy",
        contact: "Contact",
        followUs: "Follow Us"
      },
      cta: {
        donate: "Make a donation",
        learnMore: "Learn more",
        shareStory: "Share story"
      }
    },
    home: {
      hero: {
        headline: "Help [Name] Fight VPS13D",
        subheadline: "A brave 9-year-old girl needs your support to access specialized medical treatment and improve her quality of life.",
        ctaPrimary: "Donate now",
        ctaSecondary: "Learn her story"
      },
      goal: {
        title: "Fundraising Goal",
        raised: "Raised",
        target: "Goal",
        supporters: "Supporters",
        daysLeft: "Days left",
        description: "Funds will go toward specialized treatments, rehabilitation therapies, adapted medical equipment, and medical care-related expenses."
      },
      story: {
        title: "Our Story",
        intro: "[Name] is an amazing 9-year-old girl diagnosed with a VPS13D gene mutation, a rare genetic condition that affects movement, cognitive development, and daily quality of life. Despite the challenges, she faces each day with courage and hope.",
        readMore: "Read full story"
      },
      science: {
        title: "Understanding VPS13D",
        subtitle: "Scientific information about the condition",
        what: "What is VPS13D mutation?",
        whatText: "VPS13D is a gene that encodes a protein essential for lipid transport within cells. Mutations in this gene can cause spinocerebellar ataxia type 4 (SCAR4) and progressive movement disorders, affecting motor coordination, balance, and cognitive functions.",
        impact: "Impact on daily life",
        impactText: "Children with VPS13D mutations face significant challenges: difficulty walking, tremors, speech problems, developmental delays, and the need for constant assistance with daily activities. Treatment requires a multidisciplinary approach including physical therapy, occupational therapy, and specialized medical care.",
        research: "Research and hope",
        researchText: "While there is currently no cure, research is constantly advancing. Supportive therapies, early interventions, and symptomatic treatments can significantly improve quality of life. Every contribution brings us closer to providing the best possible care."
      }
    },
    updates: {
      title: "Updates",
      subtitle: "Latest news about [Name]'s progress",
      filter: {
        all: "All",
        medical: "Medical",
        daily: "Daily life",
        milestones: "Milestones"
      },
      socialFeed: "Follow us on social media",
      noUpdates: "More updates coming soon"
    }
  },
  gl: {
    common: {
      nav: {
        home: "Inicio",
        story: "Historia",
        updates: "Actualizacións",
        donate: "Doar"
      },
      footer: {
        rights: "Todos os dereitos reservados",
        disclaimer: "Aviso Legal Médico",
        disclaimerText: "A información proporcionada neste sitio é só para fins informativos e non constitúe asesoramento médico profesional. Consulte sempre con profesionais da saúde cualificados.",
        privacy: "Privacidade",
        contact: "Contacto",
        followUs: "Síguenos"
      },
      cta: {
        donate: "Facer unha doazón",
        learnMore: "Coñece máis",
        shareStory: "Compartir historia"
      }
    },
    home: {
      hero: {
        headline: "Axuda a [Nome] na súa loita contra VPS13D",
        subheadline: "Unha nena valente de 9 anos necesita o teu apoio para acceder a tratamento médico especializado e mellorar a súa calidade de vida.",
        ctaPrimary: "Doar agora",
        ctaSecondary: "Coñece a súa historia"
      },
      goal: {
        title: "Meta de Recadación",
        raised: "Recadado",
        target: "Meta",
        supporters: "Doantes",
        daysLeft: "Días restantes",
        description: "Os fondos destinaranse a tratamentos especializados, terapias de rehabilitación, equipamento médico adaptado e gastos relacionados coa atención médica."
      },
      story: {
        title: "A Nosa Historia",
        intro: "[Nome] é unha nena incrible de 9 anos diagnosticada cunha mutación do xene VPS13D, unha condición xenética rara que afecta o movemento, o desenvolvemento cognitivo e a calidade de vida diaria. A pesar dos desafíos, ela enfronta cada día con valentía e esperanza.",
        readMore: "Ler historia completa"
      },
      science: {
        title: "Entendendo VPS13D",
        subtitle: "Información científica sobre a condición",
        what: "Que é a mutación VPS13D?",
        whatText: "VPS13D é un xene que codifica unha proteína esencial para o transporte de lípidos dentro das células. As mutacións neste xene poden causar ataxia espinocerebelar tipo 4 (SCAR4) e trastornos do movemento progresivo, afectando a coordinación motora, o equilibrio e as funcións cognitivas.",
        impact: "Impacto na vida diaria",
        impactText: "Os nenos con mutacións VPS13D enfrontan desafíos significativos: dificultades para camiñar, tremores, problemas de fala, atrasos no desenvolvemento e necesidade de asistencia constante para actividades cotiás. O tratamento require un enfoque multidisciplinario que inclúe fisioterapia, terapia ocupacional e atención médica especializada.",
        research: "Investigación e esperanza",
        researchText: "Aínda que actualmente non existe cura, a investigación avanza constantemente. As terapias de apoio, intervencións temperás e tratamentos sintomáticos poden mellorar significativamente a calidade de vida. Cada contribución achéganos máis a brindar o mellor coidado posible."
      }
    },
    updates: {
      title: "Actualizacións",
      subtitle: "Últimas novas sobre o progreso de [Nome]",
      filter: {
        all: "Todas",
        medical: "Médicas",
        daily: "Vida diaria",
        milestones: "Logros"
      },
      socialFeed: "Síguenos nas redes sociais",
      noUpdates: "Próximamente máis actualizacións"
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
