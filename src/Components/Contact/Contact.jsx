import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import fiverr_icon from "../../assets/fiverr1.svg";

const Contact = () => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    formData.append("access_key", "53de31f0-b3d0-45cd-9dda-d93bd2613052");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take new projects, so feel free to send
              me a message about anything that you want me to work on. You can
              contact me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>fahad32821@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>LOADING...</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>+92 3425539309</p>
              </div>
              <div className="contact-detail">
                <a href="https://www.fiverr.com/s/kLow8ow" target="_blank">
                  <img src={fiverr_icon} alt="Fiverr Icon" className="fiverr"/>
                </a>
                <p>Click to visit</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="write email" name="email" />
            <label htmlFor="message">write your message here</label>
            <textarea
              name="message"
              rows={8}
              placeholder="write message"
              id=""
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
