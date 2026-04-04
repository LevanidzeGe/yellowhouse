import { sponsor2, sponsor3 } from "@/public/image";
import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Levanidze() {
  return (
    <div className={styles.cardDiv}>
      <Link href="https://webmoderna.ch" target="_blank">
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <Image
              className="lift shadow3"
              src={sponsor2}
              width={600}
              height={400}
              alt="Photographer webmoderna.ch"
            />
          </div>
          <div className={styles.cardBack}>
            <Image
              className="lift shadow3"
              src={sponsor3}
              width={600}
              height={400}
              alt="Website designe Webmoderna.ch"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
