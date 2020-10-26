import React from "react";
import './footer.css'

function FooterComponent() {
  return (
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-location">
            <div>
              <h4>Barcelona</h4>
              <p className="location-adress">
                Av. Diagonal 206 <br /> 5º Derecha <br /> 08001
              </p>
              <p className="location-phone">T. +34930204345</p>
            </div>
            <div>
              <h4>Pekín</h4>
              <p className="location-adress">
                Chaowai 2nd Alley Ln 28 <br /> 2º A <br /> 1003928
              </p>
              <p className="location-phone">T. +861065035108</p>
            </div>
          </div>
          <div className="contact-social-media-wrapper">
            <div>
              <h5>CONTACT US</h5>
              <div className="contact-footer-wrapper">
                <p>New business</p>
                <p>Media</p>
                <p>Talent</p>
              </div>
            </div>

            <div>
              <h5>SOCIAL MEDIA</h5>
              <div className="media-footer-wrapper">
                <p>LinkedIn</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </div>

            <div className="privacy-cookies-footer-wrapper">
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default FooterComponent;
