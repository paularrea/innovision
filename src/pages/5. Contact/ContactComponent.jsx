import React from "react";
import "./contact.css";
import KeyContactsComponent from "./components/KeyContactsComponent";
import LocationComponent from "./components/LocationComponent";
import { Helmet } from "react-helmet";

function ContactComponent(props) {
  return (
    <div ref={props.ContactRef} className="page contact-page">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical contact page"
        />
      </Helmet>
      <div className="contact-wrapper">
          <KeyContactsComponent t={props.t} />
          <LocationComponent t={props.t} />
      </div>
    </div>
  );
}

export default ContactComponent;
