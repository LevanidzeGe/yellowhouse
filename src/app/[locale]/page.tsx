import Hero from "@/src/components/components/Hero/Hero";
import { oldImage } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentTwo from "@/src/components/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/components/Three/ComponentThree";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentFive from "@/src/components/components/Five/ComponentFive";
import Events from "./events/menuComponents/events";
import { images } from "@/src/components/packages/AlbumSlider/images-data";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={oldImage} />
      <ComponentTwo />
      <Events mini={true} />
      <ComponentThree />
      <AlbumSlider images={images} />
      <ComponentFour />
      <Testimonials title1={t("testimonials.title1")} />
      <ComponentFive />
    </div>
  );
}
