import React from "react";

function LocationComponent(props) {
  return (
    <>
      <div className="contacts-titles">
        <h5>{props.t("contact.locations")}</h5>
      </div>
      <div className="contacts">
        <div>
          <div className="location-img">
            <img src="" alt="" />
          </div>
          <h4>Barcelona</h4>
          <p className="location-adress">
            Av. Diagonal 206 <br /> 5º Derecha <br /> 08001
          </p>
          <p className="location-phone">T. +34930204345</p>
        </div>
        <div>
          <div className="location-img">
            <img src="" alt="" />
          </div>
          <h4>Pekín</h4>
          <p className="location-adress">
            Chaowai 2nd Alley Ln 28 <br /> 2º A <br /> 1003928
          </p>
          <p className="location-phone">T. +861065035108</p>
        </div>
      </div>
      </>
  );
}

export default LocationComponent;
