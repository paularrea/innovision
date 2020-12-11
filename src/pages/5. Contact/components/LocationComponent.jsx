import React from "react";

function LocationComponent(props) {
  return (
    <div className='locations'>
      <div className="contacts-titles">
        <h5>{props.t("contact.locations")}</h5>
      </div>
      <div className="contacts">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.es/maps/search/No.12+Xinshi+Road,+Qianzhou+supporting+area,+Wuxi+Huishan+Economic+Development+Zone,+Jiangsu,+China/@31.570486,120.1725688,11z/data=!3m1!4b1"
        >
          <div>
            <div className="location-img loc1"></div>
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
          href="https://www.google.es/maps/search/Room+3909,+International+Financial+Squre,+Liangxi+District,+Wuxi/@31.4911736,120.3097213,17z/data=!3m1!4b1"
        >
          <div>
            <div className="location-img loc2"></div>
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
          href="https://www.google.es/maps/place/Avinguda+de+Sant+Pere,+63,+25005+Lleida/@41.6391533,0.625411,17z/data=!3m1!4b1!4m5!3m4!1s0x12a6e04d2a41158d:0x73baf179f95a212c!8m2!3d41.6391493!4d0.6275997"
        >
          <div>
            <div className="location-img loc3"></div>
            <h4>Europe Office</h4>
            <p className="location-adress">
              Avinguda Sant Pere, 63 <br /> Secà de Sant Pere <br /> 25005
              Lleida <br /> Spain
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LocationComponent;
