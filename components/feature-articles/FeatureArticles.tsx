import Image from "next/image";

import styles from "./featureArticles.module.css";

import Button from "@/components/button/Button";

import ImageDesktop from "@/public/images/hero-image-desktop.jpg";
import ImageMobile from "@/public/images/hero-image-mobile.jpg";

const FeatureArticles = () => {
  return (
    <article className={styles.container}>
      <Image
        src={ImageDesktop}
        alt="hero-image"
        className={styles.imageDesktop}
        priority
      />
      <Image
        src={ImageMobile}
        alt="hero-image"
        className={styles.imageMobile}
        priority
      />
      <div className={styles.textContainer}>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className={styles.rightTextContainer}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button />
        </div>
      </div>
    </article>
  );
};

export default FeatureArticles;
