export const supportedLocales = ["fr", "en", "de", "it", "ge"];
export const defaultLocale = "fr";
// export const dynamicPageRoute = "menu"; // [slug]
// export const fireBaseRoute = "toisondor"; //firebase route
// export const menuCarPlaceHoldImg =
//   "https://github.com/levanydze/SUP/blob/main/Geneva-Restaurant-Assets/Placeholders/menuItemPlaceholder.jpg?raw=true";

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/services",
      dropdown: [
        { title: "Renovation", url: "/renovation" },
        { title: "Flooring", url: "/flooring" },
        { title: "furniture ansambling", url: "/furniture-assembly" },
        { title: "Gardening", url: "/gardening" },
      ],
    },
    { title: "Projects", url: "/projects" },
    { title: "About us", url: "/about" },
    { title: "Contact", url: "/contact", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    {
      title: "Services",
      url: "/services",
      dropdown: [
        { title: "Peinture", url: "/painting" },
        { title: "Ponçage", url: "/sanding" },
        { title: "furniture ansambling", url: "/ansambling" },
        { title: "wallpaper instalation", url: "/instalation" },
      ],
    },
    { title: "Événements", url: "/projects" },
    { title: "Histoire", url: "/about" },
    { title: "Contact", url: "/contact", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    {
      title: "Dienstleistungen",
      url: "/services",
      dropdown: [
        { title: "Malen", url: "/painting" },
        { title: "Schleifen", url: "/sanding" },
        { title: "furniture ansambling", url: "/ansambling" },
        { title: "wallpaper instalation", url: "/instalation" },
      ],
    },
    { title: "Veranstaltungen", url: "/projects" },
    { title: "Geschichte", url: "/about" },
    { title: "Kontakt", url: "/contact", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    {
      title: "Servizi",
      url: "/services",
      dropdown: [
        { title: "Pittura", url: "/painting" },
        { title: "Levigatura", url: "/sanding" },
        { title: "furniture ansambling", url: "/ansambling" },
        { title: "wallpaper instalation", url: "/instalation" },
      ],
    },
    { title: "Eventi", url: "/projects" },
    { title: "Storia", url: "/about" },
    { title: "Contatto", url: "/contact", button: true },
  ],
  ge: [
    { title: "მთავარი", url: "/" },
    {
      title: "სერვისები",
      url: "/services",
      dropdown: [
        { title: "ფერწერა", url: "/painting" },
        { title: "შკურკა", url: "/sanding" },
        { title: "furniture ansambling", url: "/ansambling" },
        { title: "wallpaper instalation", url: "/instalation" },
      ],
    },
    { title: "ღონისძიებები", url: "/projects" },
    { title: "ისტორია", url: "/about" },
    { title: "კონტაქტი", url: "/contact", button: true },
  ],
};
