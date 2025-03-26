import Image from "next/image";
import styles from "./Services.module.css";
import { camera, development, meCactus, monitor } from "@/public/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Website",
    icon: development,
    link: "/projects",
  },
  {
    id: 2,
    title: "Photography",
    icon: camera,
    link: "/photography",
  },
  {
    id: 3,
    title: "Branding",
    icon: monitor,
    link: "/branding",
  },
];

export default function Services() {
  return (
    <div className={styles.mainWrapper}>
      <h2 className="heading4 font3 ">Our Services</h2>
      <div className={styles.socialCard}>
        <div className={styles.cardsWrapper}>
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className={`shadow5 lift ${styles.card}`}
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={80}
                height={80}
              />

              <div>
                <h3 className="font2">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
