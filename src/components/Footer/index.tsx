import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

import {
  Cursor,
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
} from "phosphor-react";

import { Button, Divider, Typography, Col, Row } from "antd";
const { Title, Text } = Typography;

export default function Footer({ user }) {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <Image
          alt="Sean's Legacy secondary logo - a white icon of a tree with a heart in the center "
          width={87.29}
          height={67}
          src="/images/white-tree.png"
        />
        <Title
          level={3}
          className={`textInverse textAlignCenter ${styles.heading}`}
        >
          Wherever you are are in your journey, a mentor can help you take the
          next step.
        </Title>
        {!user ? (
          <div className={styles.btnContainer}>
            <Button>Sign up</Button>
            <Button type="primary">Login</Button>
          </div>
        ) : null}
        <Divider className="footerDivider" />
        <Row align="middle" className={styles.contentRow}>
          <Col span={8}>
            <div className={styles.contactWrapper}>
              <div className={styles.contactHeading}>
                <div className={styles.iconWrapper}>
                  <Envelope size={24} weight="light" className={styles.icon} />
                </div>
                <Text className="textLarge semibold textPrimary3">Email</Text>
              </div>
              <Text className="textInverse">
                Our friendly team is here to help.
              </Text>
              <Text className="semibold textInverse">
                seanslegacyplaceholder@gmail.com
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.contactWrapper}>
              <div className={styles.contactHeading}>
                <div className={styles.iconWrapper}>
                  <Cursor size={24} weight="light" className={styles.icon} />
                </div>
                <Text className="textLarge semibold textPrimary3">Website</Text>
              </div>
              <Text className="textInverse">
                Come check out our other programs!{" "}
              </Text>
              <Text className="semibold textInverse">seanslegacy.org</Text>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.contactWrapper}>
              <div className={styles.socialsLinksWrapper}>
                <div className={styles.socialsLinks}>
                  <InstagramLogo
                    size={32}
                    className={styles.socialIcon}
                    weight="light"
                  />
                  <LinkedinLogo
                    size={32}
                    className={styles.socialIcon}
                    weight="light"
                  />
                  <FacebookLogo
                    size={32}
                    className={styles.socialIcon}
                    weight="light"
                  />
                  <TwitterLogo
                    size={32}
                    className={styles.socialIcon}
                    weight="light"
                  />
                </div>
                <Text className="textLarge semibold textPrimary3">
                  Social Media
                </Text>
              </div>
              <Text className="textInverse">
                Stay up to date on what we’re doing.
              </Text>
            </div>
          </Col>
        </Row>

        <Divider className="footerDivider" />
        <div className={`semibold textPrimary2 ${styles.linkWrapper}`}>
          <Link href="#" className={styles.link}>
            Become a mentor
          </Link>
          <Link href="#" className={styles.link}>
            Find a mentor
          </Link>
          <Link href="#" className={styles.link}>
            About us
          </Link>
          <Link href="#" className={styles.link}>
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
