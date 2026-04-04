import Image from "next/image";
import styles from "./Sponsors.module.css";
import { sponsor1 } from "@/public/image";
import { useTranslations } from "next-intl";
import HeadLine from "../miniComponents/HeadLine";
import Levanidze from "./Levanidze/Levanidze";

export default function Sponsors() {
  const t = useTranslations("homePage.sponsors");

  return (
    <section className="section ">
      <div className="container">
        <HeadLine title={t("title1")} />
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src={sponsor1}
            height={200}
            width={500}
            alt="Dukascopy"
          />
          <Levanidze />
        </div>
      </div>
    </section>
  );
}
