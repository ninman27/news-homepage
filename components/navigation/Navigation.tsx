"use client";

import { useState } from "react";

import Link from "next/link";

import style from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMobMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className={style.navContainer}>
      <Image src="/logo/logo.svg" alt="logo" width={64} height={40} />
      <div className={style.navMenuItemsContainer}>
        <Link href="/">Home</Link>
        <Link href="/">New</Link>
        <Link href="/">Popular</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Categories</Link>
      </div>
      <Image
        src="/icons/icon-menu.svg"
        alt="icon menu"
        width={40}
        height={16}
        className={style.iconMenu}
        onClick={() => handleOpenMobMenu()}
      />
      {open && (
        <div className={style.overlay}>
          <div className={style.mobileMenu}>
            <Image
              src="/icons/icon-menu-close.svg"
              alt="icon menu close"
              width={32}
              height={32}
              className={style.iconMenuClose}
              onClick={() => handleOpenMobMenu()}
            />
            <div className={style.mobileMenuItemsContainer}>
              <Link
                href="/"
                className={style.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Home
              </Link>
              <Link
                href="/"
                className={style.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                New
              </Link>
              <Link
                href="/"
                className={style.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Popular
              </Link>
              <Link
                href="/"
                className={style.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Trending
              </Link>
              <Link
                href="/"
                className={style.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Categories
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
