import React from "react";
import "./contact.css";
import KeyContactsComponent from "./components/KeyContactsComponent";
import LocationComponent from "./components/LocationComponent";
import EmailComponent from "./components/EmailComponent";

function ContactComponent(props) {
  return (
    <div ref={props.ContactRef} className="page">
      <div className="contact-wrapper">
        <div className="contact-title">
          <h1>CONTACT</h1>
        </div>
        <div className="contact-intro-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            facilis modi ullam minus pariatur placeat deleniti! Natus enim amet
            hic labore veniam quos et expedita magni, ipsa vel sint tenetur.
          </p>
        </div>
        <KeyContactsComponent />
        <LocationComponent />
      </div>
      <EmailComponent />
    </div>
  );
}

export default ContactComponent;
