import Image from "next/image";
import Link from "next/link";

import style from "./page.module.css";

import Button from "@/components/button/Button";

import FeaturedImageDesktop from "../public/images/hero-image-desktop.jpg";
import FeaturedImageMobile from "../public/images/hero-image-mobile.jpg";
import FirtsArticleImage from "../public/images/first-article-image.jpg";
import SecondArticleImage from "../public/images/second-article-image.jpg";
import ThirdArticleImage from "../public/images/third-article-image.jpg";

const Home = () => {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.heroLeftContainer}>
          <Image
            src={FeaturedImageDesktop}
            alt="hero-image"
            className={style.featuredImageDesktop}
            priority
          />
          <Image
            src={FeaturedImageMobile}
            alt="hero-image"
            className={style.featuredImageMobile}
            priority
          />
          <div className={style.leftTextContainer}>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className={style.rightTextContainer}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button />
            </div>
          </div>
        </div>
        <div className={style.heroRightContainer}>
          <h2>News</h2>
          <div className={style.newsCard}>
            <Link href="/">
              <h3 className={style.headingLinkHover}>
                Hydrogen VS Electric Cars
              </h3>
            </Link>
            <p className={style.newsText}>
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className={style.newsCard}>
            <Link href="/">
              <h3 className={style.headingLinkHover}>
                The Downsides of AI Artistry
              </h3>
            </Link>
            <p className={style.newsText}>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className={style.newsCard}>
            <Link href="/">
              <h3 className={style.headingLinkHover}>
                Is VC Funding Drying Up?
              </h3>
            </Link>
            <p className={style.newsText}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className={style.articleContainer}>
        <div className={style.articleCard}>
          <Image
            src={FirtsArticleImage}
            alt="first article image"
            className={style.articleImage}
          />
          <div className={style.articleText}>
            <h4>01</h4>
            <Link href="/">
              <h5 className={style.articleLinkHover}>Reviving Retro PCs</h5>
            </Link>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className={style.articleCard}>
          <Image
            src={SecondArticleImage}
            alt="second article image"
            className={style.articleImage}
          />
          <div className={style.articleText}>
            <h4>02</h4>
            <Link href="/">
              <h5 className={style.articleLinkHover}>Top 10 Laptops of 2022</h5>
            </Link>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className={style.articleCard}>
          <Image
            src={ThirdArticleImage}
            alt="third article image"
            className={style.articleImage}
          />
          <div className={style.articleText}>
            <h4>03</h4>
            <Link href="/">
              <h5 className={style.articleLinkHover}>The Growth of Gaming</h5>
            </Link>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
