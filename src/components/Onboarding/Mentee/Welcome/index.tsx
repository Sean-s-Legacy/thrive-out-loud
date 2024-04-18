import React, { useState, useRef, useEffect } from "react";
import { Button } from "antd";
import Link from "next/link";

export default function Welcome(){
  return (
    <div>
    <h1>Welcome to Thrive Out Loud</h1>
    <div>
      We’re so excited you’re here!
    </div>
    <div className="subtitle-regular">
      <span className="subtitle-semibold">Please note: Our platform currently supports mentees who live in the United States and are 18 years or older.</span>
      Unfortunately, we are unable to consider mentors from outside of the U.S. at this time.
    </div>
    <div>
      Thank you for considering joining our community!
      <span className="subtitle-semibold">We’ll begin by asking you a few questions about your identity and background
      to personalize your mentorship experience.</span>
    </div>
    <Link href="/">
      <Button>
        Home
      </Button>
    </Link>
    <Link href="/menteeQuestionnaire">
      <Button type="primary">
        Let’s Go
      </Button>
    </Link>
  </div>
  )
}
