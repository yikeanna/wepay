import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  // const [message, setMessage] = useState("");
  //
  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.message));
  // }, []);

  return (
      <div>
        <LandingPage />
      </div>
  );
}

export default App