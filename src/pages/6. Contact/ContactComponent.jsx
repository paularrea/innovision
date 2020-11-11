import React from "react";
import "./contact.css";
import KeyContactsComponent from "./components/KeyContactsComponent";
import LocationComponent from "./components/LocationComponent";
import EmailComponent from "./components/EmailComponent";
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
      <div className="contact-wrapper">
        <FadeInOnScroll>
          <div className="contact-intro-text">
            <p>{props.t("contact.text")}</p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <KeyContactsComponent t={props.t} />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <LocationComponent t={props.t} />
        </FadeInOnScroll>
      </div>
      <FadeInOnScroll>
        <EmailComponent t={props.t} />
      </FadeInOnScroll>
    </div>
  );
}

export default ContactComponent;
