import Image from "next/image";
import styles from "./Services.module.css";
import { camera, development, meCactus, monitor } from "@/public/image";
import instagram from "@/public/assets/icons/instagram.png";
import facebook from "@/public/assets/icons/facebook.png";
import linkdin from "@/public/assets/icons/linkdin.png";
import Link from "next/link";
import { facebookUrl, instagramUrl, linkedinUrl } from "@/Manager/info";

const services = [
  {
    id: 1,
    title: "Website",
    icon: development,
  },
  {
    id: 2,
    title: "Photography",
    icon: camera,
  },
  {
    id: 3,
    title: "Branding",
    icon: monitor,
  },
];

export default function Services() {
  return (
    <div className={styles.mainWrapper}>
      <h2 className="heading4 ">Our Services</h2>
      <div className={styles.socialCard}>
        <div className={styles.cardsWrapper}>
          {services.map((service) => (
            <div key={service.id} className={`shadow5 lift ${styles.card}`}>
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={80}
                height={80}
              />

              <div>
                <h3>{service.title}</h3>
                <button>See Examples</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
