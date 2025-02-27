import React from "react";
import styles from "./Footer.module.css";
import First from "./fotComponents/First";
import Second from "./fotComponents/Second";
import Third from "./fotComponents/Third";
// import Fourth from "./fotComponents/Fourth";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { footerWave } from "@/public/image";
import { companyName } from "@/Manager/info";
import Fourth from "./fotComponents/Fourth";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footMainWrapper}>
      <Image
        className={styles.wave}
        src={footerWave}
        width={1000}
        height={150}
        alt="vector"
      />
      <section className="section">
        <div className="container">
          <div className={styles.footWrapper}>
            <First title={t("title1")} />
            <Fourth />
            <Second title={t("title2")} />
            {/* <Third /> */}
          </div>
          <div className={styles.copyRgiht}>
            <p className="heading5 white">Copyright </p>
            <span className="heading5 white">{companyName}</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
