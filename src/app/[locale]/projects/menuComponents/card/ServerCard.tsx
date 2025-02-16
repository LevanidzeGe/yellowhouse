import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { ProjectProps } from "../../projectsData";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function ServerCard({
  id,
  translations,
  images,
  timestamp,
}: ProjectProps) {
  const locale = useLocale();
  const t = useTranslations();

  // Fallback to the default locale if the translation is not available
  const displayTranslation = translations[locale] || translations["en"];

  return (
    <div className={styles.cardWrapper}>
      <Link href={`/${locale}/projects/${id}`} className={styles.imageWrapper}>
        <Image
          src={images[0]}
          width={1000}
          height={700}
          alt={displayTranslation.title}
          loading="lazy"
          className={styles.image}
        />
      </Link>

      <div className={styles.topDiv}>
        {timestamp && (
          <>
            <p className={`gray7 ${styles.date}`}>
              {new Date(timestamp).toLocaleDateString(locale)}
            </p>
            <p className={`gray7 caption-mini ${styles.caption}`}>Renovation</p>
          </>
        )}
      </div>

      <div>
        <h2 className="heading3 color4">
          {displayTranslation.title.length > 40
            ? `${displayTranslation.title.substring(0, 40)}...`
            : displayTranslation.title}
        </h2>
        <p className="paragraph gray7">
          {displayTranslation.description.length > 80
            ? `${displayTranslation.description.substring(0, 80)}...`
            : displayTranslation.description}
        </p>
      </div>

      <Link href={`/${locale}/projects/${id}`} className={styles.button}>
        {t("eventsPage.events.button")}
        <FaArrowRightLong />
      </Link>
    </div>
  );
}
