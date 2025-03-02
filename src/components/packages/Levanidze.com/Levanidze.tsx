import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "./bg.svg";
import logo from "./logo.png";
import photo from "./photo.png";
import web from "./web.png";

export default function Levanidze() {
  return (
    <div className={styles.mainWrapper}>
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="levanidze.com vector background"
      />
      <section className={`section no-padding-y`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.textDiv}>
              <h2 className="heading1 gray7 ">In Collaboration With</h2>
              <p className="heading5 gray9">
                Our website and photography are provider
              </p>
              <div className={styles.domainWrapper}>
                <Link className={styles.domain} href="https://levanidze.com">
                  <h3 className="heading2">
                    www.<span className="">Levanidze</span>.com
                  </h3>
                  <Image
                    className={styles.logo}
                    src={logo}
                    alt="Levanidze Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      src={photo}
                      width={600}
                      height={400}
                      alt="Photographer Levanidze.com"
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={web}
                      width={600}
                      height={400}
                      alt="Website designer Levanidze.com"
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
