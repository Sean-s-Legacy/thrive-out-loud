import Image from "next/image";
import React from "react";
import { Space, Input } from "antd";
// import "antd/dist/reset.css";
import SignupBtn from "../SignupBtn/index";
import FindAMentorBtn from "../FindAMentorBtn/index";
import LoginBtn from "../LoginBtn/index";
import styles from './Navbar.module.css'

export default function Navbar() {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <nav className={styles.nav_container}>
      <Image alt="" width={205} height={54.08} src="/images/SL-logo.png" />

      {/* <div> */}
      {/* <Search /> */}

      <Search
        // className={styles.search_input}
        placeholder="Search"
        onSearch={onSearch}
        // size="large"
        style={{ width: 591 }}
      />
      <Space wrap>
        <FindAMentorBtn />
        <LoginBtn />
        <SignupBtn />
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
