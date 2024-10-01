import React from "react";
import styles from "./First.module.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import Link from "next/link";
import { address, email, phoneNumber, addressLink } from "@/Manager/info";

export default function First() {
  return (
    <section>
      <h2 className="heading4">Contact info</h2>
      <address className={styles.contactInfo}>
        <Link target="_blank" href={addressLink} className="paragraph ">
          {address}
        </Link>
        <Link href={`mailto:${email}`} className={styles.email}>
          {email}
        </Link>
        <Link className="caption pargrapht-bold" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
      </address>
      <SocialMedia />
    </section>
  );
}
