import { Button, Typography } from "antd";

import Image from "next/image";
import React from "react";
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
                                    src={"/images/becomeamentee/number_1.png"}
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
                                    your mentor preferences and goals.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={
                                    "/images/becomeamentee/complete_profile.png"
                                }
                                width={290}
                                height={214}
                                alt="Complete your profile"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentee/number_2.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 2"
                                />
                                <Title level={4}>Complete your profile</Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    Share your experiences, interests, and goals
                                    with potential mentors. Only mentors who you
                                    reach out to will see this information.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={"/images/becomeamentee/find_mentor.png"}
                                width={290}
                                height={214}
                                alt="Find mentor"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentee/number_3.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 3"
                                />
                                <Title level={4}>Find a mentor</Title>
                            </div>
                            <div className={styles.typography}>
                                <Text className="textLarge textAlignStart">
                                    Choose from our recommendations based on
                                    your preferences or browse all available
                                    mentors.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <Image
                                src={
                                    "/images/becomeamentee/scheldue_session.png"
                                }
                                width={290}
                                height={214}
                                alt="Scheldue your first session"
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.textTitle}>
                                <Image
                                    src={"/images/becomeamentee/number_5.png"}
                                    width={33}
                                    height={33}
                                    alt="Number 4"
                                />
                                <Title level={4}>
                                    Schedule your first session
                                </Title>
                            </div>
                            <div className={styles.typography}>
                                <Text>
                                    Get to know your mentor in a 1:1 video call
                                    and begin your mentorship journey.
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
