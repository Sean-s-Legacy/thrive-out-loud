import React from "react";
// import { Typography, Button, Space, Spin } from "antd";
// import Image from "next/image";
import Hero from "@/components/pages-index/Hero";
import Connect from "@/components/pages-about/Connect";
import BecomeMentee from "@/components/pages-index/BecomeMentee";
import BecomeMentor from "@/components/pages-index/BecomeMentor";

export default function Index() {
  return (
    <div>
      <Hero />
      <Connect />
      <BecomeMentee />
      <BecomeMentor />
    </div>
  );
}
