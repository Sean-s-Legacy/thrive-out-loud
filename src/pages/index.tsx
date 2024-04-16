import React from "react";
// import { Typography, Button, Space, Spin } from "antd";
// import Image from "next/image";
import Hero from "@/components/pages-index/Hero";
import Connect from "@/components/pages-index/Connect";
import BecomeMentee from "@/components/pages-index/BecomeMentee";
import BecomeMentor from "@/components/pages-index/BecomeMentor";
import StartThriving from "@/components/pages-index/StartThriving";

export default function Home() {
  return (
    <div>
      <Hero />
      <Connect />
      <BecomeMentee />
      <BecomeMentor />
      <StartThriving />
    </div>
  );
}
