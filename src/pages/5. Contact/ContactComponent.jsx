import React from "react";
import "./contact.css";
import KeyContactsComponent from "./components/KeyContactsComponent";
import LocationComponent from "./components/LocationComponent";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Helmet } from "react-helmet";

function ContactComponent(props) {
  return (
    <div ref={props.ContactRef} className="page">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical contact page"
        />
      </Helmet>
      <div className="separator"></div>
      <div className="contact-wrapper">
        <FadeInOnScroll>
          <KeyContactsComponent t={props.t} />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <LocationComponent t={props.t} />
        </FadeInOnScroll>
      </div>
    </div>
  );
}

export default ContactComponent;
