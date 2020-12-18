import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import foto1 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Profile picture to see earloops）.jpg"
import foto11 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Photo of the mannequin with the mask on it front image）.jpg"
import foto2 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Profile picture to see earloops）.jpg";
import foto22 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Photo of the mannequin with the mask on it front image）.jpg";
import foto3 from "../../../img/products/MedicalMasks/3/Disposable surgical mask IIR ties（Profile picture to see earloops）.jpg";
import foto33 from "../../../img/products/MedicalMasks/3/Disposable surgical mask IIR ties（Photo of the mannequin with the mask on it front image）.jpg";
import foto4 from "../../../img/products/MedicalMasks/4/Disposable surgical mask IIR shield earloops（Profile picture to see earloops）.jpg";
import foto44 from "../../../img/products/MedicalMasks/4/Disposable surgical mask IIR shield earloops（Photo of the mannequin with the mask on it  front image）.jpg";
import foto5 from "../../../img/products/MedicalMasks/5/Disposable surgical mask IIR shield ties（Profile picture to see earloops ）.jpg";
import foto55 from "../../../img/products/MedicalMasks/5/Disposable surgical mask IIR shield ties（Photo of the mannequin with the mask on it front image）.jpg";

const MedicalMasks = (props) => {
  const products = [
    {
      id: 1,
      name: props.t("product.category2.products.0.productName"),
      img1: foto1,
      img2: foto11,
    },
    {
      id: 2,
      name: props.t("product.category2.products.1.productName"),
      img1: foto2,
      img2: foto22,
    },
    {
      id: 3,
      name: props.t("product.category2.products.2.productName"),
      img1: foto3,
      img2: foto33,
    },
    {
      id: 4,
      name: props.t("product.category2.products.3.productName"),
      img1: foto4,
      img2: foto44,
    },
    {
      id: 5,
      name: props.t("product.category2.products.4.productName"),
      img1: foto5,
      img2: foto55,
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-2">
      <div className="mx-auto product-img">
        <LazyLoadImage
          className='image-prod'
          effect="blur"
          onMouseOver={(e) => (e.currentTarget.src = product.img2)}
          onMouseOut={(e) => (e.currentTarget.src = product.img1)}
          src={product.img1}
          alt="medical mask product"
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

export default MedicalMasks;
