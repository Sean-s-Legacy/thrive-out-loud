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
                                    Guidance for your professional journey
                                </Title>
                            </div>

                            <div className={styles.typography}>
                                <Text>
                                    Whether you’re navigating academics or
                                    beginning your career, our online community
                                    of LGBTQIA+ mentors is here. Build
                                    meaningful connections in a safe, affirming
                                    space and get the guidance you need to find
                                    your professional path.
                                </Text>
                            </div>
                            <div className={styles.paragraph}>
                                <Text >
                                    We currently serve members of the LGBTQIA+
                                    community aged 18-25 who live in the United
                                    States.
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
