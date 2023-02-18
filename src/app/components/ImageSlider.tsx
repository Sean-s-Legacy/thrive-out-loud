import { Card } from 'antd';
import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

export default function ImageSlider() {

  const slides = [
    {comment:"“My mentor helped me land my first job!”",
     img:'https://s3-alpha-sig.figma.com/img/2f87/b146/4ab578d0e976117336a294920d9917d4?Expires=1677456000&Signature=qFVAKfzxdbD1-oEFr-BwgXgh-MeJqpMxdfvJsyZKbe1IkTTiOhOs9ngPr7AePkX~2HvL8le-bvmyWdhx4V13KkWt9UISXonoIb9bOWfx~PHzNhKlzKf4IfvzozVB2A6N94qVrvXdLJI2foO19169jr-ePJcokdK2vKykAq~DMtMg8GIih31FAqwyT~ESK-ql0-~7KdSMg2~nyUijOmFChmLgq5PkWfZemOytIb-DPucggVV43amV1jZ0LE7MaqT1wOspaRxNzQbupqt1Suhj0ZZ6~87jYV7IMyowm9N36IxZFIY8m7jT6ldYQTwi52sAw-PF8Dkqal7ljXV-Nyyuiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
    {comment:"“I love how easy it is to find mentors to connect with, and how Sean’s Legacy makes me feel safe when browsing.”",
     img:'https://s3-alpha-sig.figma.com/img/0f39/49ff/dbf00f92bb55391cfe360e2cc0cf8422?Expires=1677456000&Signature=ZVJ3qyW1bj-zP8mnR~5S4xwvdvhKOSKjOJGk0BoIgf53jnqvKkZbIAGM1U0fVQGHkB786pT48kKf7FF8fg5~g1WAH6v6cHIzB4-M~kL-NBuE55tIZhjayzsqP-wmKPNr6mSSCVTR7aGHhW2cgpTu3x3zjqSOm161KFy40IqVNR3LyB7XLeqJII1zdIrmEQdgbeVDUwZWmVLfeIzaUO7zL2MT736ghy9dCGAdg~aWT9TuLaeIxuWSgwmG5ZfDhdSDKiT7ADpLpN-vUsDvP0YbdSPpomNgQmn3Jwfa4HZ-2W6rLZjVP3IwhubsVh~xPbuzdtJgfGMUYSnBSeM0j2BSXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
    {comment:"“I can’t recommend this mentorship program enough.”",
     img:'https://s3-alpha-sig.figma.com/img/f7be/8359/79640aff4e6d88c9518936f1b5172386?Expires=1677456000&Signature=o6Uc9YBBRzcZFXc6myVfFFEu7rvymHYI6pn8sObSfm1qQw4AhzLGqmIah~PWxqE0~T3kFUpfE-XMgrAuGQg6q3p9OnXdJwSbu7kqotmUgEF~0Lag4epLLhzg~Bi9V72ngVSRvlNoCnaD1IgRI~KIBYcEBOV9mqzBUSEauD0rBRd0049OqryAktulW7EONAppVHTzIhfMGuv6NxIQ1VPFZFoinx6vcIc~kMB6xvQmKME2BNyhE6uvrUq6Ofho~ua6epCBrzyXnOMgeItM2iJqrvtHDHifYqD8GnnjxJuUavmco8utR6OdZPBM79dpTLV0LUiagNu1YllXbzu15TwBnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  let counter = 0;
  const goToPrevious = () => {
    
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex)
    counter--;
    let imageSlider = document.querySelector<HTMLElement>('.image_slider');
    let cardWidth = imageSlider.children[0].clientWidth;
    imageSlider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    console.log('counter is ' + imageSlider)
  }

  const goToNext = () => {
    // const isLastSlide = currentIndex === slides.length - 1;
    // const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // setCurrentIndex(newIndex);
  }
  return (
    <>
    <div className="image_slider_container">
      <div className="image_slider_left_arrow" onClick={goToPrevious}>❰</div>
      <div className="image_slider_right_arrow" onClick={goToNext}>❱</div>

      <div className="slider_show_case">
      <div className='image_slider'>
    
      <Card style={{width:370, height:434}}>
        <p>{slides[0].comment}</p>
        <img src={slides[0].img} 
        style={{width:'115px', height:'115px', borderRadius:'50%', objectFit:'cover' }}
        alt="" />
      </Card>
      <Card style={{width:370, height:434}}>
        <p>{slides[1].comment}</p>
        <img src={slides[1].img} 
        style={{width:'115px', height:'115px', borderRadius:'50%', objectFit:'cover' }}
        alt="" />
      </Card>
      <Card style={{width:370, height:434}}>
        <p>{slides[2].comment}</p>
        <img src={slides[2].img} 
        style={{width:'115px', height:'115px', borderRadius:'50%', objectFit:'cover' }}
        alt="" />
      </Card>
          {/* <TestimonialCard comment={slides[0].comment}/>
          <TestimonialCard/>
          <TestimonialCard/> */}
      </div>
      </div> 
     </div>
    </>
  )
}
