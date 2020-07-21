import React from "react";

function KeyContactsComponent() {
  return (
    <>
      <div className="contacts-titles">
        <h5>KEY CONTACTS</h5>
      </div>
      <div className="contacts">
        <div>
          <h4>New business</h4>
          <p>What changes can we help with?</p>
          <div className="contact-person">
            <p>Amy Winehouse</p>
            <p>enquires@innovision.com</p>
          </div>
        </div>
        <div>
          <h4>Media Enquiries</h4>
          <p>How can we add to your story?</p>
          <div className="contact-person">
            <p>Jimmi Hendrix</p>
            <p>jimmi-hendrix@innovision.com</p>
          </div>
        </div>
        <div>
          <h4>Talent</h4>
          <p>Want to join our team?</p>
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
