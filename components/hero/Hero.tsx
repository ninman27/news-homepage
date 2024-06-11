import FeatureArticles from "../feature-articles/FeatureArticles";
import News from "../news/News";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <FeatureArticles />
      <News />
    </section>
  );
};

export default Hero;
