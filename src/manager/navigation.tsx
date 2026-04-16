export const supportedLocales = ["ge", "en", "fr"];
export const defaultLocale = supportedLocales[0];

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
}

export const companyRoute = "geo-judo-geneva-2025-04-16";

export const collectionRoute1 = "";
export const collectionRoute2 = "photo-album";

export const dynamicPageRoute1 = "events";
export const dynamicPageRoute2 = "";

export const dynamicSitemap: Record<string, string> = {
  [collectionRoute1]: dynamicPageRoute1,
  [collectionRoute2]: dynamicPageRoute2,
};

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "მთავარი", url: "/" },
    { title: "ჩვენს შესახებ", url: "/about" },
    { title: "მენიუ", url: "/projects" },
    {
      title: "სერვისები",
      url: "/services",
      dropdown: [
        { title: "სახლის ქირაობა", url: "/extesrior" },
        { title: "წვეულება", url: "/exfterior" },
        { title: "ხელის თხოვნა", url: "/extgerior" },
        { title: "ხელის მოწერია", url: "/exterijor" },
        { title: "სქესის გაგება", url: "/extermior" },
        { title: "წინა საქორწილო წვეულება", url: "/exte.rior" },
      ],
    },
    { title: "კითხვა-პასუხი", url: "/contact", button: true },
  ],
  ge: [
    { title: "Accueil", url: "/" },
    {
      title: "Services",
      url: "/services",
      dropdown: [
        { title: "Sablage extérieur", url: "/exterior" },
        { title: "Sablage intérieur", url: "/interior" },
        { title: "Sablage de mobilier", url: "/furniture" },
        { title: "Sablage sur Métal", url: "/metallization" },
      ],
    },
    { title: "Projets", url: "/projects" },
    { title: "À propos de nous", url: "/about" },
    { title: "Contact", url: "/contact", button: true },
  ],
  fr: [
    { title: "Startseite", url: "/" },
    {
      title: "Dienstleistungen",
      url: "/services",
      dropdown: [
        { title: "Außenstrahlen", url: "/exterior" },
        { title: "Innenstrahlen", url: "/interior" },
        { title: "Möbelstrahlen", url: "/furniture" },
        { title: "Metall-Sandstrahlen", url: "/metallization" },
      ],
    },
    { title: "Projekte", url: "/projects" },
    { title: "Über uns", url: "/about" },
    { title: "Kontakt", url: "/contact", button: true },
  ],
};
