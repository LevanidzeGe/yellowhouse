import Image from "next/image";
import styles from "./Item.module.css";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import type { ReturnTypeOfExtract } from "@/lib/firebase/types";
import { getTranslations } from "next-intl/server";

export default async function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  const t = await getTranslations("projectsPage.projects");
  return (
    <section className={`section ${styles.eventDetailsWrapper}`}>
      <div>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <h1 className="heading3">{item.transTag}</h1>
            <div className={styles.textWrapper}>
              <div>
                <h3 className="heading5 gray5 font2">{t("title2")}</h3>
                <p className="paragraph">{item.transText1}</p>
              </div>
              <div>
                <h3 className="heading5 font2 gray5">{t("title3")}</h3>
                <p className="paragraph">{item.transText2}</p>
              </div>
            </div>
            <div className={styles.liveButtonWrapper}>
              {item.noTransLink1 && (
                <Link
                  className={`button ${styles.liveButton}`}
                  href={item.noTransLink1}
                  target="_blank"
                >
                  {t("button3")}
                  <HiOutlineArrowNarrowRight />
                </Link>
              )}
            </div>

            <div className={styles.imageWrapper}>
              {item.images[1] && (
                <Image
                  width={1000}
                  height={3000}
                  alt={item.transTitle}
                  src={item.images[1]}
                  title={item.transTitle}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
