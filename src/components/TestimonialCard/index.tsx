import { Card } from "antd";
import React from "react";

export default function TestimonialCard({comment, bio, img}) {
  return (
  <Card style={{ width: 370, height: 434 }}>
    <p>{comment}</p>
    <p>{bio}</p>
    <img src={img} style={{width:'115px', height:'115px', borderRadius:'50%', objectFit:'cover'}}></img>
  </Card>
  );
}
