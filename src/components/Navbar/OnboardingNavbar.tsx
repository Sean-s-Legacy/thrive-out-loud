import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function OnboardingNavbar({}) {
  return (
    <nav className={styles.nav_container}>
      <Link href="/" className={styles.onboardingLogo}>
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
