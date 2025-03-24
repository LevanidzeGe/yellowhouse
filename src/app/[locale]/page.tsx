import { useTranslations } from "next-intl";
import Projects from "./projects/projectsComponent/Projects";
import Levanidze from "@/src/components/packages/Levanidze/Levanidze";
import Hero from "@/src/components/components/Hero";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="fadeOut">
      <Hero />
      {/* <Levanidze /> */}
      <Projects
        mini={true}
        title1={t("homePage.projects.title1")}
        title2={t("homePage.projects.title2")}
        readMore={t("projectsPage.projects.readMore")}
        seeAll={t("projectsPage.projects.seeAll")}
      />
    </div>
  );
}
