import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Mentors from "../components/Mentors";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();

  console.log("dashboard currentUser:", currentUser);

  //A better solution for protected paths is needed

  useEffect(() => {
    if (currentUser == null) {
      router.push("/");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }

  return (
    // remove inline styles below
    <div style={{ padding: "48px 96px", height: "100vh" }}>
      Welcome,{" "}
      <b>{`${
        currentUser.displayName ? currentUser.displayName : currentUser.email
      }!`}</b>{" "}
      this is the dashboard
    </div>
  );
}
