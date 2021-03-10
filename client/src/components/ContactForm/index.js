import React from "react";

const ContactForm = () => {
  return (
  <form>
    <div className="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" className="form-control" placeholder="Enter name"/>
    </div>
    <div className="form-group">
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <label for="message">Message</label>
      <textarea className="form-control" id="message" placeholder="Message" rows="4"></textarea>
    </div>
    <button type="submit" className="btn btn-blue">Submit</button>
  </form>);
};

export default ContactForm;
