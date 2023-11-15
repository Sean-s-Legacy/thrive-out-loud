import React from "react";
import Image from "next/image";

import styles from "./NavbarOnlyLogo.module.css";
import Link from "next/link";

export default function NavbarOnlyLogo() {
  return (
    <nav className={styles.nav_container}>
      <Link href="/" className={styles.logo}>
        <Image
          alt="Seans Legacy logo"
          width={175}
          height={46}
          src="/images/SL-logo.png"
        />
      </Link>
    </nav>
  );
}
