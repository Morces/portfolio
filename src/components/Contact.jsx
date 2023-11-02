import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56ehrhk",
        "template_l8fqebt",
        form.current,
        "eYImyMeeRER8Gd5Cv"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" bg-[#111111]" id="contact">
      <div className="h-fit p-10">
        <h3 className="text-3xl md:text-xl sm:text-xl uppercase font-medium text-center text-[#08A7E8]">
          Contact Me
        </h3>
        <form
          ref={form}
          action=""
          onSubmit={sendEmail}
          className="w-[80%] gap-5 m-auto contact-form"
        >
          <div className="input-control">
            <span>Name :</span>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="from_name"
              required
            />
          </div>
          <div className="input-control margin">
            <span>Email :</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="your_email"
              required
            />
          </div>
          <div className="input-control margin">
            <span>Message :</span>
            <textarea placeholder="Message" name="message" required></textarea>
          </div>

          <button type="submit" className="w-full p-4 bg-[#08A7E8] rounded-lg">
            <p className="text-white">Send Message</p>
          </button>
          <div className={`alert ${showAlert ? "show" : ""}`}>
            ✅ Message sent successfully.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
