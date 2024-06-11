import Image from "next/image";
import Link from "next/link";

import styles from "./latestArticles.module.css";

import FirtsArticleImage from "@/public/images/first-article-image.jpg";
import SecondArticleImage from "@/public/images/second-article-image.jpg";
import ThirdArticleImage from "@/public/images/third-article-image.jpg";

const LatestArticles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <Image
          src={FirtsArticleImage}
          alt="first article image"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h4>01</h4>
          <Link href="/">
            <h5>Reviving Retro PCs</h5>
          </Link>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src={SecondArticleImage}
          alt="second article image"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h4>02</h4>
          <Link href="/">
            <h5>Top 10 Laptops of 2022</h5>
          </Link>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src={ThirdArticleImage}
          alt="third article image"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h4>03</h4>
          <Link href="/">
            <h5>The Growth of Gaming</h5>
          </Link>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
