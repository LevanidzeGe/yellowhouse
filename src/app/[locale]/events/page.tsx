import { getTranslations } from "next-intl/server";
import Collections from "./collection/Collection";

export async function generateMetadata() {
  const t = await getTranslations("eventsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage() {
  return (
    <div className="fadeOut">

      <Collections />
    </div>
  );
}
