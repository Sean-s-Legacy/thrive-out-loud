import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";
import { useAuth } from "@/context/AuthContext";

import { Avatar, Button, Input, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { CaretDown, User } from "phosphor-react";

import LoginModal from "../../auth/Login";
// import LoginBtn from "../LoginBtn";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar({ user }) {
  const router = useRouter();
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const { logout } = useAuth();
  console.log(user);

  const items: MenuProps["items"] = [
    {
      label: <Link href="#">1st menu item</Link>,
      key: "0",
    },
    {
      label: <Link href="#">2nd menu item</Link>,
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

  const navDropDown: MenuProps["items"] = [
    {
      label: <Link href="/about">About us</Link>,
      key: "0",
    },
    {
      label: <Link href="#">Resources</Link>,
      key: "1",
    },
    {
      label: <Link href="#">Become a mentor</Link>,
      key: "2",
    },
  ];

  return (
    <nav className={styles.nav_container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <p id="logo">THRIVE OUT LOUD</p>
        </Link>
      </div>
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
              <Link
                href="/dashboard"
                className={router.pathname == "/" ? "active" : ""}
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className={router.pathname == "/explore" ? "active" : ""}
              >
                Find a mentor
              </Link>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  {React.cloneElement(menu as React.ReactElement, {})}
                  <Button type="primary" onClick={logout}>
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
          <Link
              href="#"
              className={router.pathname == "/become-a-mentor" ? "active" : ""}
            >
              Become Mentor
            </Link>
            <Link
              href="#" 
              className={router.pathname == "/resources" ? "active" : ""}
            >
              Become Mentee
            </Link>
            <Link
              href="/about"
              className={router.pathname == "/about" ? styles.active : ""}
            >
              About us
            </Link>
          </div>
          <div className={styles.btn_container}>
            <LoginModal />
          </div>
          <Dropdown
            placement="bottomRight"
            className={styles.nav_dropdown}
            menu={{ items: navDropDown }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined style={{ fontSize: "30px", color: "black" }} />
            </a>
          </Dropdown>
        </div>
      )}
    </nav>
  );
}
