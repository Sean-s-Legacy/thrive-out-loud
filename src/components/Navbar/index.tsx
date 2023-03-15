import React from "react";
import Image from "next/image";
import { Button, Space, Input } from "antd";

import styles from "./Navbar.module.css";
import Link from "next/link";
// import LoginBtn from "../LoginBtn";

export default function Navbar() {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <nav className={styles.nav_container}>
      <Image
        alt="Seans Legacy logo"
        width={205}
        height={54.08}
        src="/images/SL-logo.png"
      />

      {/* <div> */}
      {/* <Search /> */}

      <Search
        className={styles.search_input}
        placeholder="Search"
        onSearch={onSearch}
        size="large"
      />
      <Space>
        <Link href="#">Become a mentor</Link>
        <Link href="#">Find a mentor</Link>
        {/* <LoginBtn /> */}
        <Button type="primary" size="small">
          Sign up
        </Button>
      </Space>
      <div className={styles.hamburger_menu}>
        <div className={styles.hamburger_bdr}></div>
        <div className={styles.hamburger_bdr_2}></div>
        <div className={styles.hamburger_bdr}></div>
      </div>

      {/* </div> */}
    </nav>
  );
}
