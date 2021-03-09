import React, { Component } from "react";
import Container from "./../components/Container";
import ContactForm from "./../components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <Container>
        <h1>Contact Me</h1>
        <hr />
        <ContactForm />
      </Container>
    );
  }
}

export default Contact;
