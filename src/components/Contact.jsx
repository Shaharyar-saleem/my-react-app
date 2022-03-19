import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(props) {
  const [msgStatus, setMsgStatus] = useState(false);

  // https://www.emailjs.com/ is a service can be use for sending email notifications

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7w9dqx7",
        "template_653t7n7",
        e.target,
        "D1tnOC5bNGLrDwJN6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgStatus(true);
        },
        (error) => {
          console.log(error.text);
          setMsgStatus(false);
        }
      );
  }

  return (
    <div className="container" style={{ paddingTop: "70px" }}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form onSubmit={sendEmail}>
            <div className="mb-3 mt-4">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">
                    {props.themeMode === "secondary" ? "Name" : ""}
                  </label>
                  <input type="hidden" name="to_name" value={props.adminName} />
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className={`form-control bg-${props.themeMode}`}
                    name="from_name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    {props.themeMode === "secondary" ? "Email Address" : ""}
                  </label>
                  <input
                    type="email"
                    className={`form-control bg-${props.themeMode}`}
                    placeholder="Your Email Address"
                    name="user_email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="form-label">
                    {props.themeMode === "secondary" ? "Subject" : ""}
                  </label>
                  <input
                    type="text"
                    className={`form-control bg-${props.themeMode}`}
                    placeholder="Subject"
                    name="from_title"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                type="text"
                className={`form-control bg-${props.themeMode}`}
                placeholder="Enter Your Message here"
                rows="7"
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-${
                props.themeMode === "light"
                  ? "outline-primary"
                  : props.themeMode
              } btn-block`}
              disabled={msgStatus ? true : false}
              style={{ width: "100%" }}
            >
              {msgStatus ? "Message has been sent" : "Sent Message"}
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
