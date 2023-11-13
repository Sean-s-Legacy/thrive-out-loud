import React from "react";
import Image from "next/image";
import { Card } from "antd";

export default function TestimonialCard({ comment, bio, img }) {
  return (
    <Card style={{ width: 370, height: 434 }}>
      <p>{comment}</p>
      <p>{bio}</p>
      <Image
        src={img}
        alt="Testimonial Card"
        width={115}
        height={115}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
