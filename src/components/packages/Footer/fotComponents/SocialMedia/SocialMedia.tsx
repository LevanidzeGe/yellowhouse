import styles from "./SocialMedia.module.css";
import EachSocialMedia from "./EachSocialMedia";
import { facebookUrl, instagramUrl, tiktokUrl } from "@/src/manager/info";

export default function SocialMedia() {
  return (
    <div className={styles.mediaWrapper}>
      <EachSocialMedia media="instagram" url={instagramUrl} />
      <EachSocialMedia media="facebook" url={facebookUrl} />
      <EachSocialMedia media="tiktok" url={tiktokUrl} />
    </div>
  );
}
