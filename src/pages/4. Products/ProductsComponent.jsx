import React, { useState } from "react";
import PersonalProtectiveEquipment from "./components/PersonalProtectiveEquipment";
import "./products.css";
import { Helmet } from "react-helmet";
import MedicalMasks from "./components/MedicalMasks";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import FadeInDown from "../../components/FadeInDown";
import SurgicalConsumables from "./components/SurgicalConsumables";
import Retail from "./components/Retail"
import UpArrow from "@material-ui/icons/ArrowDropUpOutlined";
import DownArrow from "@material-ui/icons/ArrowDropDown";
import cataloge from "../../img/cataloge.jpg";

function ProductsComponent(props) {
  const [
    showPersonalProtectiveEquipment,
    setShowPersonalProtectiveEquipment,
  ] = useState(false);
  const [showMedicalMasks, setShowMedicalMasks] = useState(true);
  const [showSurgicalConsumables, setShowSurgicalConsumables] = useState(false);
  const [showRetail, setShowRetail] = useState(false);

  const onClickProtectiveEquipment = () => {
    setShowPersonalProtectiveEquipment(!showPersonalProtectiveEquipment);
  };
  const onClickMasks = () => {
    setShowMedicalMasks(!showMedicalMasks);
  };
  const onClickSurgicalConsumables = () => {
    setShowSurgicalConsumables(!showSurgicalConsumables);
  };
  const onClickRetail = () => {
    setShowRetail(!showRetail);
  };

  return (
    <div ref={props.ProductsRef} className="page products-wrapper">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical products page"
        />
      </Helmet>
      <FadeInOnScroll>
        <div className="products-title">
          <h2 className="text-center">OUR PRODUCTS</h2>
        </div>
      </FadeInOnScroll>
      <div className="products-btn-container">
        <FadeInOnScroll>
          <div className="category-container">
            <button onClick={onClickProtectiveEquipment} className={showPersonalProtectiveEquipment ? "active-btn name-arrow" : "name-arrow"}>
              <h4>PERSONAL PROTECTIVE EQUIMPMENT</h4>
              {showPersonalProtectiveEquipment ? <UpArrow /> : <DownArrow />}
            </button>
            {showPersonalProtectiveEquipment ? (
              <FadeInDown>
                <div className="product-drop">
                  {" "}
                  <PersonalProtectiveEquipment />
                </div>
              </FadeInDown>
            ) : null}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="category-container">
            <button onClick={onClickMasks} className={showMedicalMasks ? "active-btn name-arrow" : "name-arrow"}>
              <h4>MEDICAL MASKS</h4>
              {showMedicalMasks ? <UpArrow /> : <DownArrow />}
            </button>
            {showMedicalMasks ? (
              <FadeInDown>
                <div className="product-drop">
                  <MedicalMasks />
                </div>
              </FadeInDown>
            ) : null}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="category-container">
            <button onClick={onClickSurgicalConsumables} className={showSurgicalConsumables ? "active-btn name-arrow" : "name-arrow"}>
              <h4>SURGICAL CONSUMABLES</h4>
              {showSurgicalConsumables ? <UpArrow /> : <DownArrow />}
            </button>
            {showSurgicalConsumables ? (
              <FadeInDown>
                <div className="product-drop">
                  <SurgicalConsumables />
                </div>
              </FadeInDown>
            ) : null}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="category-container">
            <button onClick={onClickRetail} className={showRetail ? "active-btn name-arrow" : "name-arrow"}>
              <h4>RETAIL</h4>
              {showRetail ? <UpArrow /> : <DownArrow />}
            </button>
            {showRetail ? (
              <FadeInDown>
                <div className="product-drop">
                  <Retail />
                </div>
              </FadeInDown>
            ) : null}
          </div>
        </FadeInOnScroll>
      </div>
      <FadeInOnScroll>
        <div className=" text-center category-container">
          <a
            className="download-pdf"
            href={cataloge}
            target="_blank"
            rel="noopener noreferrer"
          >
            CLICK TO DOWNLOAD OUR BROCHURE
          </a>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default ProductsComponent;
