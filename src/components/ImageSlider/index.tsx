import { Card } from "antd";
import React, { useState, useRef, useEffect } from "react";
import TestimonialCard from "../TestimonialCard/index";
import styles from "./ImageSlider.module.css";

export default function ImageSlider() {
  const imgRef = useRef<HTMLDivElement>();

  const slides = [
    {
      comment: "“My mentor helped me land my first job!”",
      bio: " -Ali, Denver",
      img: "/images/slider_img1.jpg",
    },
    {
      comment:
        "“I love how easy it is to find mentors to connect with, and how Sean’s Legacy makes me feel safe when browsing.”",
      bio: " -Jo, Philadelphia",
      img: "/images/slider_img2.jpg",
    },
    {
      comment: "“I can’t recommend this mentorship program enough.”",
      bio: " -Zyrel, Houston",
      img: "/images/slider_img3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let counter = 0;
  interface ISlidesProps {
    comment?: string;
    bio?: string;
    img?: string;
  }
  // let imageSlider = document.querySelector<HTMLElement>(".image_slider");
  // let cardWidth = imageSlider.children[0].clientWidth;

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= slides.length) {
      newIndex = slides.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={styles.image_slider_container}>
        <div
          className={styles.image_slider_left_arrow}
          onClick={() => updateIndex(currentIndex - 1)}
        >
          ❰
        </div>
        <div
          className={styles.image_slider_right_arrow}
          onClick={() => updateIndex(currentIndex + 1)}
        >
          ❱
        </div>

        <div className={styles.slider_show_case}>
          <div
            className={styles.image_slider}
            ref={imgRef}
            style={{ transform: `translateX(-${currentIndex * 494}px)` }}
          >
            {slides.map((slide: ISlidesProps, index) => (
              <TestimonialCard
                key={index}
                comment={slide.comment}
                bio={slide.bio}
                img={slide.img}
              />
            ))}
            {/* <Card style={{ width: 370, height: 434, border:'1px solid black' }}>
            
              <p>{slides[0].comment}</p>
              <img 
                src={slides[0].img}
                style={{
                  width: "115px",
                  height: "115px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Card>
            <Card style={{ width: 370, height: 434 }}>
              <p>{slides[1].comment}</p>
              <img
                src={slides[1].img}
                style={{
                  width: "115px",
                  height: "115px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Card>
            <Card style={{ width: 370, height: 434 }}>
              <p>{slides[2].comment}</p>
              <img
                src={slides[2].img}
                style={{
                  width: "115px",
                  height: "115px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Card> */}
          </div>
        </div>
        <div>
          <div className="img-dot">
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
            <div className="dot-circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}
