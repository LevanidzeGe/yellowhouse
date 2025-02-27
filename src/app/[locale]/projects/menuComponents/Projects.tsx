import styles from "./Projects.module.css";
import ServerCard from "./card/ServerCard";
import { getTranslations } from "next-intl/server";
import { projects, ProjectProps } from "../projectsData";
import Link from "next/link";
import { useLocale } from "next-intl";
import TopBorder from "@/src/components/components/borderShapes/TopBorder";
import BottomBorder from "@/src/components/components/borderShapes/BottomBorder";

export const revalidate = 86400; // Revalidate once a day

export default async function Projects({ mini }: { mini?: boolean }) {
  const t = await getTranslations("");
  const locale = useLocale();
  const sortedEvents = projects.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  const mostRecentEvents = sortedEvents
    .sort(
      (a, b) =>
        Math.abs(a.timestamp - Date.now()) - Math.abs(b.timestamp - Date.now())
    )
    .slice(0, 3);

  return (
    <>
      <TopBorder />
      <section className="section section-medium no-padding-y ">
        <div className={`container ${!mini && styles.container}`}>
          <div className={`${!mini && styles.paddingBottom}`}>
            <div className="sideLineWrap">
              <div className="sideLine"></div>
              <h2 className="heading4 ">Our work</h2>
            </div>
            <h3 className={`heading2 color4 ${styles.title}`}>
              Completed Projects
            </h3>
            <div className={styles.eventsWrapper}>
              {!mini &&
                projects.map((event: ProjectProps) => (
                  <ServerCard key={event.id} {...event} />
                ))}

              {mini &&
                mostRecentEvents.map((event: ProjectProps) => (
                  <ServerCard key={event.id} {...event} />
                ))}
            </div>
            {mini && (
              <Link
                href={`${locale}/projects`}
                className={`${styles.button} button button-reverse`}
              >
                {t("eventsPage.events.seeAll")}
              </Link>
            )}
          </div>
        </div>
      </section>

      {mini && <BottomBorder />}
    </>
  );
}
