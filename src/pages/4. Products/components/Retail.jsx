import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import foto1 from "../../../img/products/Retail/1/Kids mask FFP2 earloops（Photo of the mask inside its individual packaging）.jpg";
import foto11 from "../../../img/products/Retail/1/Kids mask FFP2 earloops（Profile picture to see earloops and headloops）.jpg";
import foto2 from "../../../img/products/Retail/2/Mask FFP2 earloops（Photo of the mask inside its individual packaging front image）.jpg";
import foto22 from "../../../img/products/Retail/2/Mask FFP2 earloops （Profile picture to see earloops and headloops）.jpg";
import foto3 from "../../../img/products/Retail/3/Mask FFP3 earloops（Photo of the mask inside its individual packaging）.jpg";
import foto33 from "../../../img/products/Retail/3/Mask FFP3 earloops（Profile picture to see earloops and headloops）.jpg";
import foto4 from "../../../img/products/Retail/4/Kids disposable mask earloops（Front image）.jpg";
import foto44 from "../../../img/products/Retail/4/Kids disposable mask earloops（Inside image）.jpg";
import foto5 from "../../../img/products/Retail/5/Disposable surgical mask IIR earloops（Front image）.jpg";
import foto55 from "../../../img/products/Retail/5/Disposable surgical mask IIR earloops（Inside image）.jpg";
import foto6 from "../../../img/products/Retail/4/Kids disposable mask earloops（Front image）.jpg";
import foto66 from "../../../img/products/Retail/4/Kids disposable mask earloops（Inside image）.jpg";
import foto7 from "../../../img/products/Retail/5/Disposable surgical mask IIR earloops（Front image）.jpg";
import foto77 from "../../../img/products/Retail/5/Disposable surgical mask IIR earloops（Inside image）.jpg";

const Retail = (props) => {
  const products = [
    {
      id: 1,
      name: "Polybag FFP2 earloops small size",
      img1: foto1,
      img2: foto11,
    },
    {
      id: 2,
      name: "Polybag mask FFP2 earloops",
      img1: foto2,
      img2: foto22,
    },
    {
      id: 3,
      name: "Polybag mask FFP3 earloops",
      img1: foto3,
      img2: foto33,
    },
    {
      id: 4,
      name: "Polybag kids disposable surgical mask IIR earloops",
      img1: foto4,
      img2: foto44,
    },
    {
      id: 5,
      name: "Polybag disposable surgical mask IIR earloops",
      img1: foto5,
      img2: foto55,
    },
    {
      id: 6,
      name: "Polybag kids disposable mask earloops",
      img1: foto6,
      img2: foto66,
    },
    {
      id: 7,
      name: "Polybag disposable mask earloops",
      img1: foto7,
      img2: foto77,
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-2">
      <div className="mx-auto d-flex justify-content-start product-img">
        <LazyLoadImage
          effect="blur"
          onMouseOver={(e) => (e.currentTarget.src = product.img2)}
          onMouseOut={(e) => (e.currentTarget.src = product.img1)}
          src={product.img1}
          alt="Retail product"
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

export default Retail;
