import { Card, Typography } from "antd";

import Image from "next/image";
import React from "react";
import styles from "./WhyUs.module.css";

function Index() {
    const { Title, Text } = Typography;
    return (
        <>
            <section className={styles.section}>
                <div className={styles.layout}>
                    <Title className={styles.title}>
                        Why join Thrive Out Loud?
                    </Title>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <Card>
                            <div className={styles.cardContent}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                >
                                    <path
                                        d="M55.9451 17.2266C55.4088 16.7789 54.7574 16.4909 54.0654 16.3956C53.3733 16.3003 52.6684 16.4015 52.031 16.6875L40.1716 21.9609L33.281 9.53907C32.9517 8.95913 32.4745 8.47684 31.8981 8.14131C31.3217 7.80579 30.6667 7.62903 29.9998 7.62903C29.3328 7.62903 28.6778 7.80579 28.1014 8.14131C27.525 8.47684 27.0479 8.95913 26.7185 9.53907L19.8279 21.9609L7.96851 16.6875C7.32986 16.4019 6.62403 16.3006 5.93082 16.3951C5.23762 16.4897 4.58468 16.7762 4.04582 17.2224C3.50696 17.6686 3.10367 18.2567 2.88154 18.9201C2.6594 19.5835 2.62729 20.2959 2.78882 20.9766L8.74195 46.3594C8.85578 46.8508 9.06819 47.314 9.36632 47.7209C9.66444 48.1278 10.0421 48.4699 10.4763 48.7266C11.0642 49.0785 11.7364 49.2648 12.4216 49.2656C12.7547 49.265 13.0861 49.2177 13.406 49.125C24.2572 46.1249 35.7189 46.1249 46.5701 49.125C47.5609 49.3855 48.6145 49.2422 49.4998 48.7266C49.9367 48.4732 50.3164 48.132 50.6149 47.7246C50.9134 47.3172 51.1242 46.8524 51.2341 46.3594L57.2107 20.9766C57.3704 20.2957 57.3365 19.5837 57.1129 18.921C56.8892 18.2583 56.4847 17.6714 55.9451 17.2266ZM39.3748 38.086C39.3231 38.548 39.1037 38.9751 38.7581 39.2861C38.4125 39.5972 37.9647 39.7706 37.4998 39.7734H37.3123C32.4497 39.2812 27.5498 39.2812 22.6873 39.7734C22.1931 39.826 21.6984 39.6802 21.3117 39.3682C20.9249 39.0562 20.6779 38.6034 20.6248 38.1094C20.5788 37.6129 20.7301 37.1182 21.0458 36.7323C21.3616 36.3464 21.8165 36.1002 22.3123 36.0469C27.4231 35.5078 32.5764 35.5078 37.6873 36.0469C38.1786 36.1002 38.6298 36.3431 38.9449 36.7239C39.2601 37.1046 39.4143 37.5933 39.3748 38.086Z"
                                        fill="#FA8C16"
                                    />
                                </svg>
                            </div>
                            <div className={styles.titleCard}>
                                <Text
                                    style={{
                                        color: "#FA8C16",
                                    }}
                                    className="textAlignCenter"
                                >
                                    Inspire & Encourage
                                </Text>
                            </div>
                            <div className={styles.typography}>
                                <Text className="textMedium textAlignCenter">
                                Help guide the next generation of LGBTQIA+ 
                                professionals in their career journeys.
                                </Text>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.card}>
                        <Card>
                            <div className={styles.cardContent}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                >
                                    <path
                                        d="M54.375 13.125H5.625C4.63044 13.125 3.67661 13.5201 2.97335 14.2233C2.27009 14.9266 1.875 15.8804 1.875 16.875V43.125C1.875 44.1196 2.27009 45.0734 2.97335 45.7766C3.67661 46.4799 4.63044 46.875 5.625 46.875H54.375C55.3696 46.875 56.3234 46.4799 57.0266 45.7766C57.7299 45.0734 58.125 44.1196 58.125 43.125V16.875C58.125 15.8804 57.7299 14.9266 57.0266 14.2233C56.3234 13.5201 55.3696 13.125 54.375 13.125ZM17.5781 43.125L5.625 32.8828V27.1172L17.5781 16.875H42.4219L54.375 27.1172V32.8828L42.4219 43.125H17.5781ZM39.375 30C39.375 31.8542 38.8252 33.6668 37.795 35.2085C36.7649 36.7502 35.3007 37.9518 33.5877 38.6614C31.8746 39.3709 29.9896 39.5566 28.171 39.1949C26.3525 38.8331 24.682 37.9402 23.3709 36.6291C22.0598 35.318 21.1669 33.6475 20.8051 31.829C20.4434 30.0104 20.6291 28.1254 21.3386 26.4123C22.0482 24.6993 23.2498 23.2351 24.7915 22.205C26.3332 21.1748 28.1458 20.625 30 20.625C32.4864 20.625 34.871 21.6127 36.6291 23.3709C38.3873 25.129 39.375 27.5136 39.375 30Z"
                                        fill="#237804"
                                    />
                                </svg>
                            </div>
                            <div className={styles.titleCard}>
                                <Text
                                    style={{
                                        color: "#237804",
                                    }}
                                    className="textAlignCenter"
                                >
                                    Empower Community
                                </Text>
                            </div>
                            <div className={styles.typography}>
                                <Text className="textMedium textAlignCenter">
                                Build powerful connections 
                                that go beyond networking.                              
                                </Text>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.card}>
                        <Card>
                            <div className={styles.cardContent}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                >
                                    <path
                                        d="M30 35.625C31.5533 35.625 32.8125 34.3658 32.8125 32.8125C32.8125 31.2592 31.5533 30 30 30C28.4467 30 27.1875 31.2592 27.1875 32.8125C27.1875 34.3658 28.4467 35.625 30 35.625Z"
                                        fill="#0050B3"
                                    />
                                    <path
                                        d="M48.75 18.75H40.3125V12.1875C40.3125 9.45246 39.226 6.82943 37.292 4.89546C35.3581 2.96149 32.735 1.875 30 1.875C27.265 1.875 24.6419 2.96149 22.708 4.89546C20.774 6.82943 19.6875 9.45246 19.6875 12.1875V18.75H11.25C10.2554 18.75 9.30161 19.1451 8.59835 19.8484C7.89509 20.5516 7.5 21.5054 7.5 22.5V48.75C7.5 49.7446 7.89509 50.6984 8.59835 51.4016C9.30161 52.1049 10.2554 52.5 11.25 52.5H48.75C49.7446 52.5 50.6984 52.1049 51.4016 51.4016C52.1049 50.6984 52.5 49.7446 52.5 48.75V22.5C52.5 21.5054 52.1049 20.5516 51.4016 19.8484C50.6984 19.1451 49.7446 18.75 48.75 18.75ZM31.875 39.0938V43.125C31.875 43.6223 31.6775 44.0992 31.3258 44.4508C30.9742 44.8025 30.4973 45 30 45C29.5027 45 29.0258 44.8025 28.6742 44.4508C28.3225 44.0992 28.125 43.6223 28.125 43.125V39.0938C26.6144 38.6434 25.3163 37.6643 24.4683 36.3356C23.6202 35.0068 23.2787 33.4172 23.5063 31.8574C23.7338 30.2976 24.5152 28.8718 25.7076 27.8407C26.9 26.8097 28.4237 26.2423 30 26.2423C31.5763 26.2423 33.1 26.8097 34.2924 27.8407C35.4848 28.8718 36.2662 30.2976 36.4937 31.8574C36.7213 33.4172 36.3798 35.0068 35.5317 36.3356C34.6837 37.6643 33.3856 38.6434 31.875 39.0938ZM36.5625 18.75H23.4375V12.1875C23.4375 10.447 24.1289 8.77782 25.3596 7.54711C26.5903 6.3164 28.2595 5.625 30 5.625C31.7405 5.625 33.4097 6.3164 34.6404 7.54711C35.8711 8.77782 36.5625 10.447 36.5625 12.1875V18.75Z"
                                        fill="#0050B3"
                                    />
                                </svg>
                            </div>
                            <div className={styles.titleCard}>
                                <Text
                                    className="textAlignCenter"
                                    style={{
                                        color: "#0050B3",
                                    }}
                                >
                                    Mentor support                             
                                </Text>
                            </div>
                            <div className={styles.typography}>
                                <Text className="textMedium textAlignCenter">
                                We provide resources and support to 
                                help you grow as a mentor.
                                </Text>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
