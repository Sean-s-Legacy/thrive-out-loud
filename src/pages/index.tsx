import Image from "next/image";
import { Typography, Button, Space } from "antd";

import Mentors from "../components/Mentors/index";

import ImageSlider from "../components/ImageSlider/index";
import FooterNotAuth from "@/components/FooterNotAuth";
import React from "react";
import SignUpModal from "@/components/SignUpModal";
import LoginBtn from "@/components/LoginBtn";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <>
      <div>
        <Space></Space>
        <LoginBtn />
        <section className="landing">
          <div className="landing_title">
            <Title className="bold textPrimary8">
              {" "}
              Sean’s Legacy <br /> Mentorship Program
            </Title>
            <Text className="mediumWeight textLarge">
              {" "}
              Wherever you are on your journey,
              <br />a mentor can help you take the next step.
            </Text>

            <Space wrap>
              <Button type="primary" size="large">
                Sign up
              </Button>
              <Button size="large">Learn more</Button>
            </Space>
          </div>
        </section>
        <section className="transition">
          <Text className="mediumWeight textLarge textInverse">
            {" "}
            At Sean’s Legacy, we’re dedicated to providing support for LGBTQIA+
            youth in their academic and extracurricular endeavors. Whether
            you’re thinking about going to college, looking for your first job,
            or just need some support and guidance, our online community of
            LGBTQIA+ mentors is here to help.
          </Text>
        </section>
        <section className="checkout_mentors">
          <div className="checkout_mentors_title">
            <Title level={2} className="semibold">
              Check out some of our mentors
            </Title>
            <Text className="textLarge">
              {" "}
              Our mentors are all verified through background checks by
              Sean&apos;s Legacy. Our mentors are LGBTQIA+ or LGBTQIA+ friendly,
              and they all come from different walks of life and identities to
              ensure a safe and inclusive connection.
            </Text>
          </div>
          <div className="mentor_card_section">
            <Mentors />
          </div>
          <div className="find_mentor_btn_section">
            <Button type="primary" size="large">
              Find a mentor
            </Button>
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <ImageSlider />
        </section>
        <section className="personalized"></section>
        <SignUpModal />
      </div>
    </>
  );
}
