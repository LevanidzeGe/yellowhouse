"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "./hero1.jpeg";
import hero2 from "./hero2.jpeg";
import hero3 from "./hero3.jpeg";
import Button from "./Button";
import { IoChatboxEllipses } from "react-icons/io5";
import { phoneNumber } from "@/src/manager/info";

const images = [hero1, hero2, hero3];

export default function MainImage() {
  const t = useTranslations("homePage");
  const locale = useLocale();

  const [index, setIndex] = useState(0);

  // ✅ Preload images using JS, once
  useEffect(() => {
    images.forEach((img) => {
      const preload = new window.Image();
      preload.src = img.src;
    });
  }, []);

  // ✅ Switch images every 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.motionImageWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={images[index]}
              alt=""
              fill
              priority
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.overlay}></div>
      <section className={`section no-padding-y relative`}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <h1 className="heading1 secondary4">Yellow House</h1>
              <h2 className="heading5 font1 secondary5">
                {/* {t("title1")} */} სატესტო ტექსტი
              </h2>

              <Link
                href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent("whatsappMessage")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                {t("whatsapp")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
