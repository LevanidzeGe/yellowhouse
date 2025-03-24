import styles from "./SocialMedia.module.css";
import instagram from "@/public/assets/icons/instagram.png";
import facebook from "@/public/assets/icons/facebook.png";
import linkdin from "@/public/assets/icons/linkdin.png";
import Link from "next/link";
import { facebookUrl, instagramUrl, linkedinUrl } from "@/Manager/info";
import Image from "next/image";
const socMediaData = [
  {
    id: 1,
    link: facebookUrl,
    icon: facebook,
  },
  {
    id: 2,
    link: instagramUrl,
    icon: instagram,
  },
  {
    id: 3,
    link: linkedinUrl,
    icon: linkdin,
  },
];
export default function SocialMedia() {
  return (
    <div className={styles.wrapper}>
      {socMediaData.map((media) => (
        <Link href={media.link} key={media.id}>
          <Image
            className="shadow2 lift"
            src={media.icon}
            width={30}
            height={30}
            alt="social media icon"
          />
        </Link>
      ))}
    </div>
  );
}
