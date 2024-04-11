import { Button, Card, Typography } from "antd";

import Image from "next/image";
import React from "react";
import styles from "./GettingStarted.module.css";

function Index() {
    const { Title, Text } = Typography;
    return (
        <>
            <section className={styles.section}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/about/leaf-background.png"
                        alt="Leaf Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.card}>
                        <Card >
                            <div className={styles.title}>
                                <Title
                                    level={1}
                                    className="textPrimary8 bold"
                                >
                                    Mentoring with Thrive Out Loud
                                </Title>
                            </div>

                            <div className={styles.typography}>
                                <Text>
                                If you are a member of the LGBTQIA+ community 
                                with 5+ years of professional experience, we need
                                 your help! Join us to support young adults aged 18-25 
                                 in their academic and career journeys.
                                </Text>
                            </div>
                            <div className={styles.paragraph}>
                                <Text >
                                We are currently looking for mentors who are members of 
                                the LGBTQIA+ community and who live in the United States. 
                                Please note that allies are not being accepted as mentor 
                                candidates at this time.
                                </Text>
                            </div>
                            <div className={styles.button}>
                                <Button type="primary" className="textPrimary8">
                                    Sign Up
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
