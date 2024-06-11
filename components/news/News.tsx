import Link from "next/link";

import styles from "./news.module.css";

const News = () => {
  return (
    <aside className={styles.container}>
      <h2>News</h2>
      <div className={styles.card}>
        <Link href="/">
          <h3>Hydrogen VS Electric Cars</h3>
        </Link>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className={styles.card}>
        <Link href="/">
          <h3>The Downsides of AI Artistry</h3>
        </Link>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className={styles.card}>
        <Link href="/">
          <h3>Is VC Funding Drying Up?</h3>
        </Link>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
};

export default News;
