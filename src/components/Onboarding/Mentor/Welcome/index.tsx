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
    <div>
      <span className="semibold">Please note: Our platform currently supports mentees who live in the United States and are 18 years or older.</span>
      Unfortunately, we are unable to consider mentees from outside of the U.S. at this time.
    </div>
    <div>
      Thank you for joining our community!
      <span> Let’s kickstart your mentorship journey by getting to know you </span>
      so we can match you with the right mentors.
    </div>
    <Link href="/">
      <Button>
        Home
      </Button>
    </Link>
    <Link href="/mentorQuestionnaire">
      <Button type="primary">
        Let’s Go
      </Button>
    </Link>
  </div>
  )
}
