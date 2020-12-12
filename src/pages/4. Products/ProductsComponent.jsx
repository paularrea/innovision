import React, { useState } from "react";
import PersonalProtectiveEquipment from "./components/PersonalProtectiveEquipment";
import "./products.css";
import { Helmet } from "react-helmet";
import MedicalMasks from "./components/MedicalMasks";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import FadeInDown from "../../components/FadeInDown";
import SurgicalConsumables from "./components/SurgicalConsumables";

function ProductsComponent(props) {
  const [
    showPersonalProtectiveEquipment,
    setShowPersonalProtectiveEquipment,
  ] = useState(false);
  const [showMedicalMasks, setShowMedicalMasks] = useState(false);
  const [showSurgicalConsumables, setShowSurgicalConsumables] = useState(false);

  const onClickProtectiveEquipment = () => {
    setShowPersonalProtectiveEquipment(!showPersonalProtectiveEquipment);
  };
  const onClickMasks = () => {
    setShowMedicalMasks(!showMedicalMasks);
  };
  const onClickSurgicalConsumables = () => {
    setShowSurgicalConsumables(!showSurgicalConsumables);
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
      <div className='products-btn-container'>
              <FadeInOnScroll>
        <div className="category-container">
          <button onClick={onClickProtectiveEquipment}>
            PERSONAL PROTECTIVE EQUIMPMENT
          </button>
          {showPersonalProtectiveEquipment ? (
            <FadeInDown>
              <PersonalProtectiveEquipment />
            </FadeInDown>
          ) : null}
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="category-container">
          <button onClick={onClickMasks}>MEDICAL MASKS</button>
          {showMedicalMasks ? (
            <FadeInDown>
              <MedicalMasks />
            </FadeInDown>
          ) : null}
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="category-container">
          <button onClick={onClickSurgicalConsumables}>
            SURGICAL CONSUMABLES
          </button>
          {showSurgicalConsumables ? (
            <FadeInDown>
              <SurgicalConsumables />
            </FadeInDown>
          ) : null}
        </div>
      </FadeInOnScroll>
      </div>

    </div>
  );
}

export default ProductsComponent;
