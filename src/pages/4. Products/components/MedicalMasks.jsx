import React from "react";

import foto1 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Profile picture to see earloops）.jpg";
import foto11 from "../../../img/products/MedicalMasks/1/Kids disposable mask earloops（Photo of the mannequin with the mask on it front image）.jpg";
import foto2 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Profile picture to see earloops）.jpg";
import foto22 from "../../../img/products/MedicalMasks/2/Disposable surgical mask IIR earloops（Photo of the mannequin with the mask on it front image）.jpg";
import foto3 from "../../../img/products/MedicalMasks/3/Disposable surgical mask IIR ties（Profile picture to see earloops）.jpg";
import foto33 from "../../../img/products/MedicalMasks/3/Disposable surgical mask IIR ties（Photo of the mannequin with the mask on it front image）.jpg";
import foto4 from "../../../img/products/MedicalMasks/4/Disposable surgical mask IIR shield earloops（Profile picture to see earloops）.jpg";
import foto44 from "../../../img/products/MedicalMasks/4/Disposable surgical mask IIR shield earloops（Photo of the mannequin with the mask on it  front image）.jpg";
import foto5 from "../../../img/products/MedicalMasks/5/Disposable surgical mask IIR shield ties（Profile picture to see earloops ）.jpg";
import foto55 from "../../../img/products/MedicalMasks/5/Disposable surgical mask IIR shield ties（Photo of the mannequin with the mask on it front image）.jpg";
import foto6 from "../../../img/products/MedicalMasks/6/Coveralls (Front image).jpg";
import foto66 from "../../../img/products/MedicalMasks/6/Coveralls (Photo of the body mannequin with the product on it).jpg";
import foto7 from "../../../img/products/MedicalMasks/7/Coveralls without sealing stripes (Front image).jpg";
import foto77 from "../../../img/products/MedicalMasks/7/Coveralls without sealing stripes (Photo of the body mannequin with the product on it).jpg";

const MedicalMasks = (props) => {
  const products = [
    {
      id: 1,
      name: "Kids disposable mask earloops",
      img1: foto1,
      img2: foto11,
    },
    {
      id: 2,
      name: "Disposable mask earloops",
      img1: foto2,
      img2: foto22,
    },
    {
      id: 3,
      name: "Kids disposable surgical mask IIR earloops",
      img1: foto3,
      img2: foto33,
    },
    {
      id: 4,
      name: "Disposable surgical mask IIR earloops",
      img1: foto4,
      img2: foto44,
    },
    {
      id: 5,
      name: "Disposable surgical mask IIR ties",
      img1: foto5,
      img2: foto55,
    },
    {
      id: 6,
      name: "Disposable surgical mask IIR shield earloops",
      img1: foto6,
      img2: foto66,
    },
    {
      id: 7,
      name: "Disposable surgical mask IIR shield ties",
      img1: foto7,
      img2: foto77,
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-3">
      <div className="mx-auto product-img">
        <img
          onMouseOver={(e) => (e.currentTarget.src = product.img2)}
          onMouseOut={(e) => (e.currentTarget.src = product.img1)}
          src={product.img1}
          alt=""
        />
      </div>
      <div className="mx-auto product-text">
        <h3>{product.name}</h3>
      </div>
    </div>
  ));

  return <div className="row product-list">{productList}</div>;
};

export default MedicalMasks;
