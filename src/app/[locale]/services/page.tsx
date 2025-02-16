import { getTranslations } from "next-intl/server";
import ServicesList from "./Services/ServicesList";

export async function generateMetadata() {
  const t = await getTranslations("registrationPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function StoryPage() {
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <ServicesList />
    </div>
  );
}
