import React from "react";
import Image from "next/image";
import { Typography } from "antd";
import styles from "./GettingStarted.module.css";

const { Text, Title } = Typography;

export default function GettingStarted() {
   return (
      <div className={styles.section}>
         <div className={styles.title}>
            <Title level={2} className="bold textPrimary8">
               Awesome! How do I get started?
            </Title>
         </div>

         <div className={styles.container}>
            <div className={styles.frame}>
               <Title level={3} className="bold">
                  1
               </Title>
               <Title level={3} className="bold">
                  Create an account
               </Title>
               <Text className="mediumWeight textLarge">
                  Enter your email and create a password to get set up.
               </Text>
            </div>
            <Image
               src={"/images/create-account.png"}
               alt="Girl holding a billboard card"
               width={347}
               height={184}
            />
         </div>
         <div className={styles.container}>
            <Image
               src={"/images/get-verified.png"}
               alt="A girl authenticates the card"
               width={224}
               height={261}
            />
            <div className={styles.frame}>
               <Title level={3} className="bold">
                  2
               </Title>
               <Title level={3} className="bold">
                  Get Verified
               </Title>

               <Text className="mediumWeight textLarge">
                  Verify your email address and phone number to confirm your
                  identify.
               </Text>
            </div>
         </div>
         <div className={styles.container}>
            <div className={styles.frame}>
               <Title level={3} className="bold">
                  3
               </Title>
               <Title level={3} className="bold">
                  Create a profile
               </Title>

               <Text className="mediumWeight textLarge">
                  Complete your profile to help potential mentors learn more
                  about you.
               </Text>
            </div>
            <Image
               src={"/images/create-profile.png"}
               alt="Create a profile of a person"
               width={418}
               height={210}
            />
         </div>
         <div className={styles.container}>
            <Image
               src={"/images/choose-mentor.png"}
               alt="A man is selecting a mentor"
               width={408}
               height={269}
            />
            <div className={styles.frame}>
               <Title level={3} className="bold">
                  4
               </Title>
               <Title level={3} className="bold">
                  Choose a mentor
               </Title>
               <Text className="mediumWeight textLarge">
                  Take our matching questionnmaire or browse available mentors.
                  Request a session through their profile, and once they approve
                  it, you're all set!
               </Text>
            </div>
         </div>
      </div>
   );
}
