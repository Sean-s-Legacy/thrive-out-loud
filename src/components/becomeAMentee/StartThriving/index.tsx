import { Button, Link, Typography } from "antd";

import Image from "next/image";
import React from "react";
import styles from "./StartThriving.module.css";

function Index() {
    const { Title, Text } = Typography;
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <Title level={1} className="textPrimary8 bold">
                            Start Thriving
                        </Title>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" className="textPrimary8">
                            Sign Up
                        </Button>
                    </div>
                    <div className={styles.typography}>
                        <Text>
                            Thrive Out Loud is part of a network of community
                            initiatives led by{" "}
                            <span style={{ color: "#454BCF" }}>
                                Sean&apos;sLegacy
                            </span>
                            .
                        </Text>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
