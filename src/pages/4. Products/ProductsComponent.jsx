import React from "react";
import PersonalProtectiveEquipment from "./components/PersonalProtectiveEquipment";
import "./products.css";
import { Helmet } from "react-helmet";
import MedicalMasks from "./components/MedicalMasks";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import SurgicalConsumables from "./components/SurgicalConsumables";

function ProductsComponent(props) {
  return (
    <div ref={props.ProductsRef} className="page products-wrapper">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical products page"
        />
      </Helmet>
      <div className="separator"></div>
      <FadeInOnScroll>
        <div className='products-title'>
          <h2 className="text-center">OUR PRODUCTS</h2>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="category-container">
          <h3 className="text-center">PERSONAL PROTECTIVE EQUIMPMENT</h3>
          <PersonalProtectiveEquipment />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="category-container">
          <h3 className="text-center">MEDICAL MASKS</h3>
          <MedicalMasks />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="category-container">
          <h3 className="text-center">SURGICAL CONSUMABLES</h3>
          <SurgicalConsumables />
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default ProductsComponent;
