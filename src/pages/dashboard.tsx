import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Mentors from "../components/Mentors";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();

  console.log("dashboard currentUser:", currentUser);

  useEffect(() => {
    if (currentUser == null) {
      router.push("/");
    }
  }, [currentUser, router]);

  // if (!currentUser) {
  //   // user is signed out or still being checked.
  //   // don't render anything
  //   return null;
  // }

  return (
    <div>
      Welcome, <b>{`${currentUser?.displayName}!`}</b> this is the dashboard
      <div></div>
      <Mentors />
    </div>
  );
}
