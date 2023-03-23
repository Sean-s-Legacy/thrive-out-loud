import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button, Space, Input, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { CaretDown, User } from "phosphor-react";

import { doSignOut } from "@/Firebase/auth";
import styles from "./Navbar.module.css";
import SignUpModal from "../SignUpModal";
import LoginModal from "../auth/LoginModal";
import TestLayout from "../auth/test/TestLayout";
// import LoginBtn from "../LoginBtn";

export default function Navbar({ user }) {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleSignOut = () => {
    doSignOut();
    console.log("clicked sign out");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <nav className={styles.nav_container}>
      <Image
        alt="Seans Legacy logo"
        width={175}
        height={46}
        src="/images/SL-logo.png"
        className={styles.logo}
      />
      {!!user ? (
        <div className={styles.auth_container}>
          <Search
            className={styles.search_input}
            placeholder="Search"
            onSearch={onSearch}
            size="large"
          />
          <div className={styles.auth_links_wrapper}>
            <div className={styles.links}>
              <Link href="#">Dashboard</Link>
              <Link href="#">Find a mentor</Link>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  {React.cloneElement(menu as React.ReactElement, {})}
                  <Button type="primary" onClick={handleSignOut}>
                    Sign out
                  </Button>
                </div>
              )}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className={styles.user_profile}>
                  <Avatar
                    className={styles.avatar}
                    size="large"
                    icon={<User className={styles.user_icon} size={20} />}
                  />
                  <CaretDown size={20} className={styles.dropdown_icon} />
                </div>
              </a>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div className={styles.unauth_container}>
          <div className={styles.links}>
            <Link href="#">About us</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Become a mentor</Link>
          </div>
          <div className={styles.btn_container}>
            <SignUpModal />
            <LoginModal />
          </div>
        </div>
      )}
    </nav>
  );
}
