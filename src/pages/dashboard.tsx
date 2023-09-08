import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Mentors from "../components/Mentors";
import CompleteProfile from "@/components/CompleteProfile";
import MatchQuestionnaire from "@/components/MatchQuestionnaire";
import { Typography } from "antd";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { Title } = Typography;

  // *** COMMENTED OUT FOR TESTING ***
  // console.log("dashboard currentUser:", currentUser);

  //A better solution for protected paths is needed
  // useEffect(() => {
  //   if (currentUser == null) {
  //     router.push("/dashboard");
  //   }
  // }, [currentUser, router]);

  // if (!currentUser) {
  // user is signed out or still being checked.
  // dont render anything
  //   return null;
  // }
  // *** COMMENTED OUT FOR TESTING ***

  return (
    // remove inline styles below
    <div style={{ padding: "48px 96px", backgroundColor: "var(--primary0)" }}>
      <Title level={2} className="semibold">
        Welcome, User!
        {/* Welcome,{" "}
       <b>{`${ 
         currentUser.displayName ? currentUser.displayName : currentUser.email
      }!`}</b>{" "}
      this is the dashboard */}
      </Title>
      <CompleteProfile />
      <MatchQuestionnaire />
    </div>
  );
}
