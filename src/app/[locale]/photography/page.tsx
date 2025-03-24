import { getTranslations } from "next-intl/server";
import Projects from "./projectsComponent/Projects";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("projectsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  return (
    <div className="fadeOut">
      <Projects
        title1={t("projects.title1")}
        title2={t("projects.title2")}
        readMore={t("projects.readMore")}
        seeAll={t("projects.seeAll")}
      />
    </div>
  );
}
