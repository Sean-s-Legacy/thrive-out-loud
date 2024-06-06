import Image from "next/image";
import React from "react";
import { Typography } from "antd";
import styles from "./HowItWorks.module.css";

function Index() {
    const { Title, Text } = Typography;
    return (
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <Title className="bold textAlignCenter">How it works</Title>
                </div>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={"/images/becomeamentee/create_account.png"}
                                width={290}
                                height={214}
                                alt="The girl with profile card"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentor/number_1.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 1"
                                />
                                <Title level={4}>Create your account</Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    Sign Up and verify your email address to get
                                    started. We’ll ask you a few questions about
                                    your identity, preferences, and goals.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div style={{ paddingRight: "60px" }}>
                            <Image
                                src={"/images/becomeamentor/get-verified.png"}
                                width={230}
                                height={214}
                                alt="Completed background Check"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentor/number_2.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 2"
                                />
                                <Title level={4}>
                                    Complete a background check
                                </Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    All mentors must pass a background check to
                                    ensure a safe environment.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={"/images/becomeamentor/Onboarding.png"}
                                width={290}
                                height={214}
                                alt="Find mentor"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentor/number_3.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 3"
                                />
                                <Title level={4}>
                                    Complete your mentor onboarding kit
                                </Title>
                            </div>
                            <div className={styles.typography}>
                                <Text className="textLarge textAlignStart">
                                    You’ll get access to online resources,
                                    training, and support to help you be a great
                                    mentor.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={"/images/becomeamentor/profile.png"}
                                width={290}
                                height={214}
                                alt="Scheldue your first session"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentor/number_4.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 4"
                                />
                                <Title level={4}>Create your profile</Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    Share your experiences, interests, and
                                    availability with your potential mentees.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={"/images/becomeamentor/connect.png"}
                                width={290}
                                height={214}
                                alt="Scheldue your first session"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentor/number_5.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 5"
                                />
                                <Title level={4}>Connect with mentees</Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    Mentees will reach out to request an initial
                                    1:1 video session based on your
                                    availability.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
