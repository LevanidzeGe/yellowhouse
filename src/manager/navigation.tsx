export const supportedLocales = ["ge", "en", "fr"];
export const defaultLocale = supportedLocales[0];

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
}

export const companyRoute = "yellowhouse-19-04-2026";

export const collectionRoute1 = "";
export const collectionRoute2 = "photoalbum";

export const dynamicPageRoute1 = "";
export const dynamicPageRoute2 = "";

export const dynamicSitemap: Record<string, string> = {
  [collectionRoute1]: dynamicPageRoute1,
  [collectionRoute2]: dynamicPageRoute2,
};

export const navItems: { [key: string]: NavItemProps[] } = {
  ge: [
    { title: "მთავარი", url: "/" },
    { title: "ჩვენს შესახებ", url: "/about" },
    // { title: "მენიუ", url: "/menu" },
    {
      title: "სერვისები",
      url: "//",
      dropdown: [
        { title: "სახლის ქირაობა", url: "/rent" },
        { title: "წვეულება", url: "/party" },
        { title: "ხელის თხოვნის ცერემონია", url: "/engagement" },
        { title: "ხელის მოწერის ცერემონია", url: "/signceremony" },
        { title: "სქესის გაგების ცერემონია", url: "/genderreveal" },
        { title: "წინა საქორწილო წვეულება", url: "/prewedding" },
      ],
    },
    { title: "კითხვა-პასუხი", url: "/faq" },
    { title: "დაჯავშნა", url: "/reserve", button: true },
  ],

  en: [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Menu", url: "/menu" },
    {
      title: "Services",
      url: "//",
      dropdown: [
        { title: "House Rental", url: "/rent" },
        { title: "Party", url: "/party" },
        { title: "Engagement Ceremony", url: "/engagement" },
        { title: "Wedding Signing Ceremony", url: "/signceremony" },
        { title: "Gender Reveal Ceremony", url: "/genderreveal" },
        { title: "Pre-Wedding Party", url: "/prewedding" },
      ],
    },
    { title: "FAQ", url: "/faq" },
    { title: "Book Now", url: "/reserve", button: true },
  ],

  fr: [
    { title: "Accueil", url: "/" },
    { title: "À propos", url: "/about" },
    { title: "Menu", url: "/menu" },
    {
      title: "Services",
      url: "//",
      dropdown: [
        { title: "Location de maison", url: "/rent" },
        { title: "Fête", url: "/party" },
        { title: "Cérémonie de fiançailles", url: "/engagement" },
        { title: "Cérémonie de signature", url: "/signceremony" },
        { title: "Révélation du sexe du bébé", url: "/genderreveal" },
        { title: "Fête pré-mariage", url: "/prewedding" },
      ],
    },
    { title: "FAQ", url: "/faq" },
    { title: "Réserver", url: "/reserve", button: true },
  ],
};
