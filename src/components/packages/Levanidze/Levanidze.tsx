import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "./bg.svg";
import photo from "./photo.jpg";
import web from "./web.jpg";
import { companyDomain } from "@/src/manager/info";
import { getLocale } from "next-intl/server";

const translations = {
  en: {
    title1: "Website and Photography Provider",
  },
  fr: {
    title1: "Créateur de sites web & photographe",
  },
  de: {
    title1: "Webseiten- & Fotografiedienstleister",
  },
  it: {
    title1: "Servizi di fotografia e siti web",
  },
  ge: {
    title1: "ვებსაიტებისა და ფოტოგრაფიის სერვისი",
  },
};

export default async function Levanidze() {
  const rawLocale = await getLocale();
  const locale = rawLocale.split("-")[0] as keyof typeof translations;
  const t = translations[locale] ?? translations.en;

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.darkBg}></div>
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="vector background"
      />
      <div className={styles.textWrap}>
        <h2 className={styles.textDropShadow}>{t.title1}</h2>
        <Link href="https://levanidze.com" className={styles.textDropShadow}>
          www.Levanidze.com
        </Link>
      </div>
      <section className={`section`}>
        <div className="container relative">
          <div className={styles.wrapper}>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com" target="_blank">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      className="lift shadow3"
                      src={photo}
                      width={600}
                      height={400}
                      alt={`Photographer Levanidze.com ${t.title1}`}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      className="lift shadow3"
                      src={web}
                      width={600}
                      height={400}
                      alt={`Website designer Levanidze.com ${t.title1}`}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com" target="_blank">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      className="lift shadow3"
                      src={web}
                      width={600}
                      height={400}
                      alt={`Photographer ${companyDomain}`}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      className="lift shadow3"
                      src={photo}
                      width={600}
                      height={400}
                      alt={`Website designer ${companyDomain}`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
