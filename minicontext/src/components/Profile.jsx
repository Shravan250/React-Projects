import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

// Import the Google Font in your index.html or at the top of your main component file.
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div
        className="text-center text-7xl font-semibold text-red-600 pt-5"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div
      className="text-center text-7xl font-semibold text-blue-600 pt-5"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      Profile: {user.username}
    </div>
  );
}

export default Profile;
