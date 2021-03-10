import React, { useState, useRef } from "react";
import axios from "axios";

const ContactForm = () => {
  const contactForm = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST request here
    // destructure from inputs
    const { name, email, subject, message } = inputs;
    console.log(inputs);
    axios
      .post("/react-portfolio/sendmessage", {
        // make an object to be handled from req.body on the backend.
        email,
        name,
        subject,
        // change the name to represent text on the backend.
        text: message,
      })
      .then((response) => {
        if (response.info.status === "success") {
          alert(response.info.msg);
          contactForm.reset();
        } else if (response.info.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Message failed to send.");
      });
  };

  return (
    <form ref={contactForm} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Enter subject"
          name="subject"
          value={inputs.subject}
          onChange={handleInputChange}
          className="form-control"
          id="subject"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          placeholder="Your message..."
          name="message"
          value={inputs.message}
          onChange={handleInputChange}
          id="message"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-blue">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
