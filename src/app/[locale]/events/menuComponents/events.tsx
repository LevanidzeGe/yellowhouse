import styles from "./events.module.css";
import ServerCard from "./card/ServerCard";
import { getTranslations } from "next-intl/server";
import { events, EventProps } from "../eventsData";
import { giSvg } from "@/public/image";
import Image from "next/image";

export const revalidate = 86400; // Revalidate once a day

export default async function Events({ mini }: { mini?: boolean }) {
  const t = await getTranslations("");

  // Sort events by timestamp (newest first)
  const sortedEvents = events.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  // 🗓️ Filter upcoming and past events
  const upcomingEvents = sortedEvents
    .filter((event) => event.timestamp > Date.now())
    .sort((a, b) => a.timestamp - b.timestamp); // Closest upcoming first

  const pastEvents = sortedEvents.filter(
    (event) => event.timestamp <= Date.now()
  );

  // 🆕 Mini Mode: Show the 2 events closest to today's date (future or past)
  const mostRecentEvents = sortedEvents
    .sort(
      (a, b) =>
        Math.abs(a.timestamp - Date.now()) - Math.abs(b.timestamp - Date.now())
    )
    .slice(0, 2);

  return (
    <section className="section section-light">
      <div className={`container ${styles.container}`}>
        {/* 📅 Upcoming Events Section */}
        <div className={`${!mini && styles.paddingTop}`}>
          <div className={styles.iconTextDiv}>
            <Image src={giSvg} width={50} height={70} alt="Upcoming Events" />
            <h2 className="heading3 color4">
              {mini
                ? t("eventsPage.events.recentEvents")
                : t("eventsPage.events.upcomingEvents")}
            </h2>
          </div>
          <div className={styles.eventsWrapper}>
            {!mini &&
              upcomingEvents.map((event: EventProps) => (
                <ServerCard key={event.id} {...event} />
              ))}

            {mini &&
              mostRecentEvents.map((event: EventProps) => (
                <ServerCard key={event.id} {...event} />
              ))}
          </div>
        </div>

        {/* ⏳ Past Events Section */}
        {!mini && (
          <div className={`${!mini && styles.paddingTop}`}>
            <div className={styles.iconTextDiv}>
              <Image src={giSvg} width={50} height={70} alt="Past Events" />
              <h2 className="heading3 color6">
                {t("eventsPage.events.pastEvents")}
              </h2>
            </div>
            <div className={styles.eventsWrapper}>
              {pastEvents.map((event: EventProps) => (
                <ServerCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
