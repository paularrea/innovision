import React from "react";

function KeyContactsComponent(props) {
  return (
    <>
      <div className="contacts-titles">
        <h5>{props.t("contact.keyContacts")}</h5>
      </div>
      <div className="contacts key">
        <div>
          <h4>{props.t("contact.nb.title")}</h4>
          <p>{props.t("contact.nb.text")}</p>
          <div className="contact-person">
          <p>{props.t("contact.nb.envio")}</p>
            <a
            className='mail-link'
            style={{color:'rgb(13, 162, 152)'}}
              href="mailto:contact@innovision-medical.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@innovision-medical.com
            </a>
          </div>
        </div>
        {/* <div>
          <h4>{props.t("contact.t.title")}</h4>
          <p>{props.t("contact.t.text")}</p>
          <div className="contact-person">
            <p>Bob Marley</p>
            <p>talent@innovision.com</p>
          </div>
        </div> */}
      </div>
      </>
  );
}

export default KeyContactsComponent;
