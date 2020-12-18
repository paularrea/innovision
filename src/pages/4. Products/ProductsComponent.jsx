import React, { useState } from "react";
import PersonalProtectiveEquipment from "./components/PersonalProtectiveEquipment";
import "./products.css";
import { Helmet } from "react-helmet";
import MedicalMasks from "./components/MedicalMasks";
// import FadeInDown from "../../components/FadeInDown";
import SurgicalConsumables from "./components/SurgicalConsumables";
import Retail from "./components/Retail";
import UpArrow from "@material-ui/icons/ArrowDropUpOutlined";
import DownArrow from "@material-ui/icons/ArrowDropDown";
import cataloge from "../../img/cataloge.jpg";

function ProductsComponent(props) {
  const [
    showPersonalProtectiveEquipment,
    setShowPersonalProtectiveEquipment,
  ] = useState(true);
  const [showMedicalMasks, setShowMedicalMasks] = useState(true);
  const [showSurgicalConsumables, setShowSurgicalConsumables] = useState(true);
  const [showRetail, setShowRetail] = useState(true);

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
        <div className="products-title">
          <h2 className="text-center">{props.t("product.title")}</h2>
        </div>

        <div className="products-btn-container">
          <div className="category-container">
            <button
              onClick={onClickProtectiveEquipment}
              className={
                showPersonalProtectiveEquipment
                  ? "active-btn name-arrow"
                  : "name-arrow"
              }
            >
              <h4>{props.t("product.category1.name")}</h4>
              {showPersonalProtectiveEquipment ? <UpArrow /> : <DownArrow />}
            </button>
            {showPersonalProtectiveEquipment ? (
                <div className="product-drop">
                  {" "}
                  <PersonalProtectiveEquipment t={props.t} />
                </div>
            ) : null}
          </div>
          <div className="category-container">
            <button
              onClick={onClickMasks}
              className={
                showMedicalMasks ? "active-btn name-arrow" : "name-arrow"
              }
            >
              <h4>{props.t("product.category2.name")}</h4>
              {showMedicalMasks ? <UpArrow /> : <DownArrow />}
            </button>
            {showMedicalMasks ? (
                <div className="product-drop">
                  <MedicalMasks t={props.t} />
                </div>
            ) : null}
          </div>
          <div className="category-container">
            <button
              onClick={onClickSurgicalConsumables}
              className={
                showSurgicalConsumables ? "active-btn name-arrow" : "name-arrow"
              }
            >
              <h4>{props.t("product.category3.name")}</h4>
              {showSurgicalConsumables ? <UpArrow /> : <DownArrow />}
            </button>
            {showSurgicalConsumables ? (
                <div className="product-drop">
                  <SurgicalConsumables t={props.t} />
                </div>
            ) : null}
          </div>
          <div className="category-container">
            <button
              onClick={onClickRetail}
              className={showRetail ? "active-btn name-arrow" : "name-arrow"}
            >
              <h4>{props.t("product.category4.name")}</h4>
              {showRetail ? <UpArrow /> : <DownArrow />}
            </button>
            {showRetail ? (
                <div className="product-drop">
                  <Retail t={props.t} />
                </div>
            ) : null}
          </div>
        </div>
        <div className=" text-center category-container">
          <a
            className="download-pdf"
            href={cataloge}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.t("product.download")}
          </a>
        </div>
    </div>
  );
}

export default ProductsComponent;
