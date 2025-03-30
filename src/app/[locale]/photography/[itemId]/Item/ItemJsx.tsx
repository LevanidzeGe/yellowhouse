import styles from "./Item.module.css";
import type { ReturnTypeOfExtract } from "@/lib/firebase/types";
import AlbumSlider from "../../collection/AlbumSlider/AlbumSlider";

export default function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  return (
    <section className={`section`}>
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <span className={`gray7 caption-mini  ${styles.date}`}>
            {item.noTransDate}
          </span>
          <h1 className="heading2 gray3">{item.transTitle}</h1>
          <p className="paragraph gray5">{item.transDescription}</p>
        </div>

        {item.images && (
          <div className={styles.albumWrapper}>
            <AlbumSlider title={item.transTitle} images={item.images} />
          </div>
        )}
      </div>
    </section>
  );
}
