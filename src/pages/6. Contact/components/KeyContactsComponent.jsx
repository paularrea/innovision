import React from "react";

function KeyContactsComponent(props) {
  return (
    <>
      <div className="contacts-titles">
        <h5>{props.t("contact.keyContacts")}</h5>
      </div>
      <div className="contacts">
        <div>
          <h4>{props.t("contact.nb.title")}</h4>
          <p>{props.t("contact.nb.text")}</p>
          <div className="contact-person">
            <p>Amy Winehouse</p>
            <p>enquires@innovision.com</p>
          </div>
        </div>
        <div>
          <h4>{props.t("contact.me.title")}</h4>
          <p>{props.t("contact.me.text")}</p>
          <div className="contact-person">
            <p>Jimmi Hendrix</p>
            <p>jimmi-hendrix@innovision.com</p>
          </div>
        </div>
        <div>
          <h4>{props.t("contact.t.title")}</h4>
          <p>{props.t("contact.t.title")}</p>
          <div className="contact-person">
            <p>Bob Marley</p>
            <p>talent@innovision.com</p>
          </div>
        </div>
      </div>
      </>
  );
}

export default KeyContactsComponent;
