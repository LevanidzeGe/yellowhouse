import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import Album from "@/src/components/packages/AlbumSlider/Album/Album";
import ContactMap from "../../components/packages/Map/map";
import Hero from "@/src/components/components/Hero/Hero";
import Accordion from "@/src/components/packages/FAQ/Accordion";

export default async function Home() {
  const t = await getTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <Accordion title1="test" />
      <Album />
      {/* <Testimonials title1={t("testimonials.title1")} /> */}
      <Testimonials title1="" />
      <ContactMap />
    </div>
  );
}
