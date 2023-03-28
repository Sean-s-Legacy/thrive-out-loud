import React from 'react';
import { Typography, Button } from "antd";
import Image from "next/image";
import styles from "@/styles/index2.module.css";


export default function newhomepage() {
  const { Title, Text } = Typography;
  return (
    <>
    <div>
    <section className={styles.transitionSection}>
              <div className={styles.transitionSectionContainer}>
                <Text className="mediumWeight textLarge textInverse">
                  At Sean’s Legacy, we’re dedicated to providing support for
                  LGBTQIA+ youth in their academic and extracurricular
                  endeavors. Whether you’re thinking about going to college,
                  looking for your first job, or just need some support and
                  guidance, our online community of LGBTQIA+ mentors is here to
                  help.
                </Text>
              </div>
            </section>

            <section>
              <div className={styles.text1}>
                <Title level={2} className='bold textAlignCenter textPrimary7'>Why sign up as a mentee?</Title>
              </div>
    
              <div className={styles.container1}>
              
                <div className={styles.imagediv}>
                <Image
                alt="100% free promotional text "
                width={368}
                height={320}
                src="/images/Frame 51336piggybank.png"
               />
              </div>
              
              <div className={styles.imagediv}>
              <Image
                alt="focused on you promotional text "
                width={368}
                height={320}
                src="/images/Frame 51337crown.png"
               />
              </div>
             
              <div className={styles.imagediv} >
              <Image
                alt="designed for privacy promotional text "
                width={368}
                height={320}
                src="/images/Frame 51338lock.png"
               />
              </div>
             
              </div>
              <div className={styles.btncontainer}>
                <Button  size='large' type='primary'>Learn more </Button>
              </div>
             </section>
              </div>
            
    </>
  )
}
