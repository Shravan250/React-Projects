import { useState } from "react";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
