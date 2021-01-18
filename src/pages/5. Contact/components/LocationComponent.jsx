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
          href="https://www.google.es/maps/dir//12+Xin+Shi+Lu,+Huishan+Qu,+Wuxi+Shi,+Jiangsu+Sheng,+China,+214046/@31.5701935,120.1725675,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x35b38b130519fe77:0x411d617b8cfc37fa!2m2!1d120.225918!2d31.680555!3e0"
        >
          <div>
            <div className="location-img loc1"></div>
            <h4>{props.t("contact.location1")}</h4>
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
            <div className="location-img loc2"></div>
            <h4>{props.t("contact.location2")}</h4>
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
            <div className="location-img loc3"></div>
            <h4>{props.t("contact.location3")}</h4>
            <p className="location-adress">
              Avinguda Sant Pere, 63 <br /> Secà de Sant Pere <br /> 25005
              Lleida <br /> Spain
            </p>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/maps/dir//Pla%C3%A7a+Copr%C3%ADnceps,+1,+AD700+Escaldes-Engordany,+Andorra/@42.5087168,1.5395406,20z/data=!4m9!4m8!1m0!1m5!1m1!1s0x12a58add787f969b:0x6c55f4bbaaa77e71!2m2!1d1.5397726!2d42.5087796!3e0"
          >
          <div>
            <div className="location-img loc4"></div>
            <h4>{props.t("contact.location4")}</h4>
            <p className="location-adress">
              Amura 7 Medical <br /> Pl. Coprínceps 1, 4t 2a <br /> AD700 Escaldes Engordany
              <br /> Andorra la Vella
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LocationComponent;
