import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

import {
  Cursor,
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
} from "phosphor-react";

import { Button, Divider, Typography} from "antd";



export default function Footer({ user }) {
  const { Title, Text } = Typography;
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className={styles.footerWrapper}>
    <div className= {styles.topWrapper}>
      <Link href="/" className={styles.logoWrapper}>
          <p className={styles.logo}>
            THRIVE OUT LOUD
          </p> 
      </Link>
      {!user ? (
      <div className={styles.linksWrapper}>
        <div>
          <Link href="/dashboard"
            className={router.pathname === "/dashboard" ? "active" : ""}
          >
          Dashboard
          </Link>
        </div>
        <div>
          <Link href="/profile"
            className={router.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
        </div>
        <div>
          <Link href= "/about"
            className={router.pathname === "/about" ? "active" : ""}
          >
            Settings
          </Link>
        </div>
        <div>
          <Link href= "/resources">
            Resources
          </Link>
        </div>
        <div>
          <Link href= "/help"
            className={router.pathname === "/help" ? "active" : ""}
          >
            Help
          </Link>
        </div>
        <div>
          <p 
          onClick={logout}
          >
           Sign Out
          </p>
        </div>
      </div>
    ) : (
        <div className={styles.linksWrapper}>
          <div>
            <Link href="/becomeamentor"
              className={router.pathname === "/becomeamentor" ? "active" : ""}
            >
            Become a Mentor
            </Link>
          </div>
          <div>
            <Link href="/becomeamentee"
              className={router.pathname == "/becomeamentee" ? "active" : ""}
            >
            Become a Mentee
            </Link>
          </div>
          <div>
          <Link href= "about"
            className={router.pathname == "/about" ? "active" : ""}
          >
            About us
            </Link>
          </div>
          <div>
            <Link href= "/resources"
              className={router.pathname == "/resources" ? "active" : ""}
            >
              Resources
            </Link>
          </div>
          <div>
            <Link href= "/refer"
              className={router.pathname == "/refer" ? "active" : ""}
            >
            Refer a Friend
            </Link>
          </div>
        </div>
        )}
    </div>
    <div className={styles.bttmWrapper}>
      <Divider className={styles.divider}/>
      <div className={styles.secondaryLinksWrapper}>
        <div className={styles.secondaryLinks}>
          <Link href= "#">
            Contact Us
          </Link>
          <Link href= "#">
            Privacy Policy 
          </Link>
          <Link href= "#">
            Terms of Use
          </Link>
        </div>
        <p>
        Copyright © 2024 Thrive Out Loud
        </p>
      </div>
    </div>
  </div>
  );
}
