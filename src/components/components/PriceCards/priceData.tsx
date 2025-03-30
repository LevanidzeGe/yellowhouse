import {
  FaGlobe,
  FaCamera,
  FaCogs,
  FaProjectDiagram,
  FaEdit,
  FaTools,
  FaServer,
  FaCalendarCheck,
  FaTimesCircle,
} from "react-icons/fa";
import { supportedLocales } from "@/Manager/navigation";

export type Locale = (typeof supportedLocales)[number];

export interface Feature {
  text: Record<Locale, string>;
  icon: JSX.Element;
  available: boolean;
}

export interface PlanProps {
  id: string;
  name: Record<Locale, string>;
  price?: string;
  salePrice?: string;
  subtitle: Record<Locale, string>;
  main: Feature[];
  features: Feature[];
  popular: boolean;
  contactUs?: Record<Locale, string>;
}

const unavailable = (text: Record<Locale, string>): Feature => ({
  text,
  icon: <FaTimesCircle color="var(--red1)" />,
  available: false,
});

const available = (
  icon: JSX.Element,
  text: Record<Locale, string>
): Feature => ({
  icon,
  text,
  available: true,
});
export const plans: PlanProps[] = [
  {
    id: "starter",
    name: { en: "Starter", fr: "Débutant", de: "Starter", it: "Base" },
    price: "CHF 1,200",
    salePrice: "CHF 800",
    subtitle: {
      en: "Great for small businesses starting out",
      fr: "Idéal pour les petites entreprises débutantes",
      de: "Ideal für kleine Unternehmen am Anfang",
      it: "Perfetto per piccole imprese che iniziano",
    },
    main: [
      available(<FaEdit />, {
        en: "Pre-created website",
        fr: "Site web préconçu",
        de: "Vorgefertigte Webseite",
        it: "Sito web pre-creato",
      }),
      available(<FaGlobe />, {
        en: "2 languages support",
        fr: "Support en 2 langues",
        de: "Unterstützung für 2 Sprachen",
        it: "Supporto per 2 lingue",
      }),
      unavailable({
        en: "Onsite photographer",
        fr: "Photographe sur site",
        de: "Fotograf vor Ort",
        it: "Fotografo sul posto",
      }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "1 collection management",
        fr: "1 gestion de collection",
        de: "Verwaltung von 1 Sammlung",
        it: "Gestione di 1 collezione",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Project page",
        fr: "Page Blog/Actualités/Projets",
        de: "Blog/News/Projektseite",
        it: "Pagina Blog/News/Progetti",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
        de: "Buchungs-/Kontaktformular",
        it: "Modulo prenotazione/contatto",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
        de: "Hosting & Domain-Einrichtung",
        it: "Hosting & configurazione dominio",
      }),
      available(<FaTools />, {
        en: "Ongoing maintenance",
        fr: "Maintenance continue",
        de: "Laufende Wartung",
        it: "Manutenzione continua",
      }),
    ],
    popular: false,
  },
  {
    id: "pro",
    name: { en: "Pro", fr: "Pro", de: "Pro", it: "Pro" },
    price: "CHF 2,200",
    salePrice: "CHF 1,500",
    subtitle: {
      en: "Custom design with professional photography",
      fr: "Design personnalisé avec photographie professionnelle",
      de: "Individuelles Design mit Profi-Fotografie",
      it: "Design personalizzato con fotografia professionale",
    },
    main: [
      available(<FaEdit />, {
        en: "Custom website design",
        fr: "Design de site personnalisé",
        de: "Individuelles Webdesign",
        it: "Design sito personalizzato",
      }),
      available(<FaGlobe />, {
        en: "Multilingual support",
        fr: "Support multilingue",
        de: "Mehrsprachige Unterstützung",
        it: "Supporto multilingua",
      }),
      available(<FaCamera />, {
        en: "Onsite photographer 4hr",
        fr: "Photographe sur site 4h",
        de: "Fotograf vor Ort 4 Std.",
        it: "Fotografo sul posto 4 ore",
      }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "2 collection management dashboards",
        fr: "2 tableaux de bord",
        de: "2 Verwaltungs-Dashboards",
        it: "2 dashboard di gestione",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Project page",
        fr: "Page Blog/Actualités/Projets",
        de: "Blog/News/Projektseite",
        it: "Pagina Blog/News/Progetti",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
        de: "Buchungs-/Kontaktformular",
        it: "Modulo prenotazione/contatto",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
        de: "Hosting & Domain-Einrichtung",
        it: "Hosting & configurazione dominio",
      }),
      available(<FaTools />, {
        en: "Ongoing maintenance",
        fr: "Maintenance",
        de: "Laufende Wartung",
        it: "Manutenzione continua",
      }),
    ],
    popular: true,
  },
  {
    id: "elite",
    name: { en: "Elite", fr: "Élite", de: "Elite", it: "Elite" },
    contactUs: {
      en: "Contact us",
      fr: "Contactez nous",
      de: "Kontaktieren Sie uns",
      it: "Contattaci",
    },
    subtitle: {
      en: "Advanced features & premium customization",
      fr: "Fonctionnalités avancées & personnalisation premium",
      de: "Erweiterte Funktionen & Premium-Anpassungen",
      it: "Funzionalità avanzate e personalizzazione premium",
    },
    main: [
      available(<FaEdit />, {
        en: "Fully custom website design",
        fr: "Design entièrement personnalisé",
        de: "Vollständig individuelles Design",
        it: "Design totalmente personalizzato",
      }),
      available(<FaGlobe />, {
        en: "Unlimited multilingual support",
        fr: "Support multilingue illimité",
        de: "Unbegrenzte Mehrsprachigkeit",
        it: "Supporto multilingua illimitato",
      }),
      available(<FaCamera />, {
        en: "Onsite photographer",
        fr: "Photographe sur site",
        de: "Fotograf vor Ort",
        it: "Fotografo sul posto",
      }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "Unlimited dashboards",
        fr: "Tableaux de bord multiples",
        de: "Unbegrenzte Dashboards",
        it: "Dashboard illimitati",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Projects etc.",
        fr: "Blog/Actualités/Projets etc.",
        de: "Blog/News/Projekte usw.",
        it: "Blog/News/Progetti ecc.",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
        de: "Buchungs-/Kontaktformular",
        it: "Modulo prenotazione/contatto",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
        de: "Hosting & Domain-Einrichtung",
        it: "Hosting & configurazione dominio",
      }),
      available(<FaTools />, {
        en: "Monthly maintenance included",
        fr: "Maintenance mensuelle incluse",
        de: "Monatliche Wartung inklusive",
        it: "Manutenzione mensile inclusa",
      }),
    ],
    popular: false,
  },
];
