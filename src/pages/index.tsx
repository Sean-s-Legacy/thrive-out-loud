import Image from "next/image";
import { Montserrat } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/index";
import SignupBtn from "../components/SignupBtn/index";
import { Button, Space } from "antd";
import MentorCard from "../components/MentorCard";
import FindAMentorBtn from "../components/FindAMentorBtn";
import Testimonials from "../components/TestimonialCard";
import ImageSlider from "../components/ImageSlider";
import FooterNotAuth from "@/components/FooterNotAuth";
import React from "react";
import LoginBtn from "@/components/LoginBtn";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <LoginBtn/>
        <section className="landing">
          <div className="landing_title">
            <h1>
              Sean’s Legacy <br /> Mentorship Program
            </h1>
            <h2>
              Wherever you are on your journey,
              <br />a mentor can help you take the next step.
            </h2>
            <Space wrap>
              <SignupBtn />
              <Button className="common_btn">Learn more</Button>
            </Space>
          </div>
        </section>
        <section className="transition">
          <h2>
            At Sean’s Legacy, we’re dedicated to providing support for LGBTQIA+
            youth in their academic and extracurricular endeavors. Whether
            you’re thinking about going to college, looking for your first job,
            or just need some support and guidance, our online community of
            LGBTQIA+ mentors is here to help.
          </h2>
        </section>
        <section className="checkout_mentors">
          <div className="checkout_mentors_title">
            <h2>Check out some of our mentors</h2>
            <p>
              Our mentors are all verified through background checks by
              Sean&apos;s Legacy. Our mentors are LGBTQIA+ or LGBTQIA+ friendly,
              and they all come from different walks of life and identities to
              ensure a safe and inclusive connection.
            </p>
          </div>
          <div className="mentor_card_section">
            <div>Mentor Card</div>
            <div>Mentor Card</div>
            <div>Mentor Card</div>
            <div>Mentor Card</div>
            <div>Mentor Card</div>
            <div>Mentor Card</div>
          </div>
          <div className="find_mentor_btn_section">
            <Button
              type="text"
              className="common_btn primary_btn find_mentor_btn"
            >
              Find a mentor
            </Button>
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <ImageSlider />
        </section>
        <section className="personalized"></section>
        <FooterNotAuth/>
      </div>
    </>
  );
}
