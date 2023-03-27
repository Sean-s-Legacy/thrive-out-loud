import Mentors from "../components/Mentors";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  console.log("dashboard currentUser:", currentUser);

  return (
    <div>
      Welcome <b>{currentUser?.displayName} this is the dashbaord</b>
      <div></div>
      <Mentors />
    </div>
  );
}
