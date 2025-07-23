"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      if (res.ok) {
        setLoading(false);
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-[#111111]" id="contact">
      <div className="h-fit p-10">
        <h3 className="text-3xl md:text-xl sm:text-xl uppercase font-medium text-center text-[#08A7E8]">
          Contact Me
        </h3>
        <div className="w-[80%] gap-5 m-auto contact-form">
          <div className="input-control">
            <span>Name </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="from_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-control margin">
            <span>Email </span>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="your_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-control margin">
            <span>Message </span>
            <textarea
              placeholder="Message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full p-4 bg-[#08A7E8] rounded-lg text-white flex justify-center items-center"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
