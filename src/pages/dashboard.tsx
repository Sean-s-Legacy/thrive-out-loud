import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CompleteProfile from "@/components/CompleteProfile";
import MatchQuestionnaire from "@/components/MatchQuestionnaire";
import RecommendedMentorsSlider from "../components/RecommendedMentors/RecMentorSlider/index";
import { Typography } from "antd";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { Title } = Typography;

  // *** COMMENTED OUT FOR TESTING USER DASHBOARD START***
  // A better solution for protected paths is needed
  useEffect(() => {
    if (currentUser == null) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    // user is signed out or still being checked.
    // dont render anything
    return null;
  }
  // *** COMMENTED OUT FOR TESTING USER DASHBOARD END***

  return (
    // remove inline styles below
    <div style={{ padding: "48px 96px", backgroundColor: "var(--primary0)" }}>
      <Title level={2} className="semibold">
        Welcome,
        <b>{`${
          currentUser.displayName ? currentUser.displayName : currentUser.email
        }!`}</b>{" "}
      </Title>
      <CompleteProfile />
      <MatchQuestionnaire />
      <RecommendedMentorsSlider />
    </div>
  );
}
