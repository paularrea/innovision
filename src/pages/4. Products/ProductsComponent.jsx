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
      <FadeInOnScroll>
        <div className='category-container'>
          <h2 className="text-center">Personal Protective Equipment</h2>
          <PersonalProtectiveEquipment />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <div className='category-container'>
          <h2 className="text-center">Medical Masks</h2>
          <MedicalMasks />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <div className='category-container'>
          <h2 className="text-center">Surgical Consumables</h2>
          <SurgicalConsumables/>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default ProductsComponent;
