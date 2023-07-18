import React, { useState } from "react";
import "../components/home.css";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    if (email === "") {
      return;
    }
    console.log(email);

    try {
      const res = await fetch("http://localhost:5000/user/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div id="Newsletter" className="newsletterContainer">
        <div className="newsletterRect3"></div>
        <div className="newsletterRect2"></div>
        <div className="newsletterRect1">
          <h1 className="newsletterHeader">NEWSLETTER</h1>
          <h1 className="newsletterText">
            Join Our Newsletter for Exclusive Updates and Insights!
          </h1>
          <div className="newsletterEmailSection">
            <input
              className="newsletterEmail ms-5"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="newsletterButton me-2">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
