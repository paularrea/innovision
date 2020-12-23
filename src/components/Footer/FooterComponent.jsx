import React from "react";
import "./footer.css";

function FooterComponent(props) {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-location">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.es/maps/dir//12+Xin+Shi+Lu,+Huishan+Qu,+Wuxi+Shi,+Jiangsu+Sheng,+China,+214046/@31.5701935,120.1725675,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x35b38b130519fe77:0x411d617b8cfc37fa!2m2!1d120.225918!2d31.680555!3e0"
            >
            <div>
              <h4>Factory</h4>
              <p className="location-adress">
                No.12 Xinshi Road <br /> Qianzhou supporting area <br /> Wuxi
                Huishan <br /> Economic Development Zone <br /> Jiangsu, China
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.es/maps/dir//Wuxi+IFS,+Binhu+Qu,+Wuxi,+Jiangsu,+China/@31.4912374,120.2768906,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x35b38510f63e948b:0xfe3ed9b3c0a4237f!2m2!1d120.31191!2d31.491169!3e0"
          >
            <div>
              <h4>China Office</h4>
              <p className="location-adress">
                Room 3909 <br /> International Financial Squre <br /> Liangxi
                District <br /> Wuxi
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.es/maps/dir//Avinguda+de+Sant+Pere,+63,+25005+Lleida/@41.6388046,0.6197095,15.15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12a6e04d2a41158d:0x73baf179f95a212c!2m2!1d0.6275997!2d41.6391493!3e0"
            >
            <div>
              <h4>Europe Office</h4>
              <p className="location-adress">
                Avinguda Sant Pere, 63 <br /> Secà de Sant Pere <br /> 25005
                Lleida <br /> Spain
              </p>
            </div>
          </a>
        </div>
        <div className="contact-social-media-wrapper">
          <div>
            <h5>{props.t("footer.title")}</h5>
            <div className="contact-footer-wrapper">
              <p>{props.t("footer.name")}</p>
              <i>
                <a
                  className="mail-link"
                  href="mailto:contact@innovision-medical.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@innovision-medical.com
                </a>
              </i>
            </div>
          </div>

          <div>
            <h5>SOCIAL MEDIA</h5>
            <div className="media-footer-wrapper">
              <a
                href="https://www.linkedin.com/company/innovision-medical/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="copyrightDiv">
            <p className='copyright'>© 2020, by Pau Larrea. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
