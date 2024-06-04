import Link from "next/link";

import style from "./button.module.css";

const Button = () => {
  return (
    <Link href="/" className={style.button}>
      Read more
    </Link>
  );
};

export default Button;
