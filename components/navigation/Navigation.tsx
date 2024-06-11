"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./navigation.module.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMobMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className={styles.container}>
      <Image src="/logo/logo.svg" alt="logo" width={64} height={40} />
      <div className={styles.menuItemsContainer}>
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
        className={styles.iconMenu}
        onClick={() => handleOpenMobMenu()}
      />
      {open && (
        <div className={styles.overlay}>
          <div className={styles.mobileMenu}>
            <Image
              src="/icons/icon-menu-close.svg"
              alt="icon menu close"
              width={32}
              height={32}
              className={styles.iconMenuClose}
              onClick={() => handleOpenMobMenu()}
            />
            <div className={styles.mobileMenuItemsContainer}>
              <Link
                href="/"
                className={styles.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Home
              </Link>
              <Link
                href="/"
                className={styles.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                New
              </Link>
              <Link
                href="/"
                className={styles.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Popular
              </Link>
              <Link
                href="/"
                className={styles.mobileMenuItem}
                onClick={() => handleOpenMobMenu()}
              >
                Trending
              </Link>
              <Link
                href="/"
                className={styles.mobileMenuItem}
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
