import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import foto1 from "../../../img/products/PersonalProtectiveEquipment/1/Kids mask FFP2 earloops（Profile picture to see earloops and headloops） 2.jpg";
import foto11 from "../../../img/products/PersonalProtectiveEquipment/1/Kids mask FFP2 earloops（Photo of the mannequin with the mask on it profile image）.jpg";
import foto2 from "../../../img/products/PersonalProtectiveEquipment/2/Mask FFP2 earloops （Profile picture to see earloops and headloops） 2.jpg";
import foto22 from "../../../img/products/PersonalProtectiveEquipment/2/Mask FFP2 earloops Photo of the mannequin with the mask on it profile image.jpg";
import foto3 from "../../../img/products/PersonalProtectiveEquipment/3/Mask FFP2 headloops （Profile picture to see earloops and headloops）.jpg";
import foto33 from "../../../img/products/PersonalProtectiveEquipment/3/Mask FFP2 headloops （Photo of the mannequin with the mask on it profile image）.jpg";
import foto4 from "../../../img/products/PersonalProtectiveEquipment/4/Mask FFP3 earloops（Front image）.jpg";
import foto44 from "../../../img/products/PersonalProtectiveEquipment/4/Mask FFP3 earloops（Photo of the mannequin with the mask on it profile image）.jpg";
import foto5 from "../../../img/products/PersonalProtectiveEquipment/5/Mask FFP3 headloops（Profile picture to see earloops and headloops）.jpg";
import foto55 from "../../../img/products/PersonalProtectiveEquipment/5/Mask FFP3 headloops（Photo of the mannequin with the mask on it profile image）.jpg";
import foto6 from "../../../img/products/PersonalProtectiveEquipment/6/Safety glasses（Profile picture）.jpg";
import foto66 from "../../../img/products/PersonalProtectiveEquipment/6/Safety glasses（Photo of the mannequin with the product on it front image）.jpg";
import foto7 from "../../../img/products/PersonalProtectiveEquipment/7/Goggles（Profile picture）.jpg";
import foto77 from "../../../img/products/PersonalProtectiveEquipment/7/Goggles（Photo of the mannequin with the product on it front image）.jpg";
import foto8 from "../../../img/products/PersonalProtectiveEquipment/8/Face shield（Profile picture）.jpg";
import foto88 from "../../../img/products/PersonalProtectiveEquipment/8/Face shield（Photo of the mannequin with the product on it front image）.jpg";
import foto9 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Profile picture to see earloops）.jpg";
import foto99 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Photo of the mannequin with the mask on it front image）.jpg";
import foto10 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Profile picture to see earloops）.jpg";
import foto1010 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Photo of the mannequin with the mask on it front image）.jpg";

const PersonalProtectiveEquipment = (props) => {
  const products = [
    {
      id: 1,
      name: props.t("product.category1.products.0.productName"),
      img1: foto1,
      img2: foto11,
    },
    {
      id: 2,
      name: props.t("product.category1.products.1.productName"),
      img1: foto2,
      img2: foto22,
    },
    {
      id: 3,
      name: props.t("product.category1.products.2.productName"),
      img1: foto3,
      img2: foto33,
    },
    {
      id: 4,
      name: props.t("product.category1.products.3.productName"),
      img1: foto4,
      img2: foto44,
    },
    {
      id: 5,
      name: props.t("product.category1.products.4.productName"),
      img1: foto5,
      img2: foto55,
    },
    {
      id: 6,
      name: props.t("product.category1.products.5.productName"),
      img1: foto6,
      img2: foto66,
    },
    {
      id: 7,
      name: props.t("product.category1.products.6.productName"),
      img1: foto7,
      img2: foto77,
    },
    {
      id: 8,
      name: props.t("product.category1.products.7.productName"),
      img1: foto8,
      img2: foto88,
    },
    {
      id: 9,
      name: props.t("product.category1.products.8.productName"),
      img1: foto9,
      img2: foto99,
    },
    {
      id: 10,
      name: props.t("product.category1.products.9.productName"),
      img1: foto10,
      img2: foto1010,
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-2">
      <div className="mx-auto product-img">
        <LazyLoadImage
          effect="blur"
          onMouseOver={(e) => (e.currentTarget.src = product.img2)}
          onMouseOut={(e) => (e.currentTarget.src = product.img1)}
          src={product.img1}
          alt="personal protective equipment"
        />
      </div>
      <div className="mx-auto product-text">
      <p>{product.name}</p>
      </div>
    </div>
  ));

  return (
    <div className="product-list">
      <div className="row justify-content-center">{productList}</div>
    </div>
  );
};

export default PersonalProtectiveEquipment;
