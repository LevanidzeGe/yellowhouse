import "@/src/app/globals.css";
import { Analytics } from "@vercel/analytics/react";

// SEO Metadata
import { getTranslations } from "next-intl/server";
import { companyDomain } from "@/Manager/info";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations("homePage.metadata");
  const canonicalUrl = `${companyDomain}/${locale}`;

  return {
    metadataBase: new URL(companyDomain),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      description: t("description"),
      url: companyDomain,
      images: [
        {
          url: `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: t("title"),
        },
      ],
    },
  };
}
import image from "@/public/images/openGraph/mainOpenGraph.jpg";

//fonts
import { Poppins, Gabriela, Inter, Dancing_Script } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font1",
});

const gabriola = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

// const greatVibes = Great_Vibes
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font3",
});

//components

import Header from "@/src/components/packages/Header/Header";
import Footer from "@/src/components/packages/Footer/Footer";
import LowerFoot from "@/src/components/packages/LowerFooter/LowerFoot";
import { redirect } from "next/navigation";
import { defaultLocale, supportedLocales } from "@/Manager/navigation"; // Import supported locales

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LangLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!supportedLocales.includes(locale)) {
    return redirect(`/${defaultLocale}`);
  }

  return (
    <html lang={locale || defaultLocale}>
      <body
        className={` ${inter.className} ${poppins.variable}  ${dancingScript.variable} ${gabriola.variable}   `}
      >
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <Header />
          {children}
          <Analytics />
          <Footer />
          <LowerFoot />
        </div>
      </body>
    </html>
  );
}
