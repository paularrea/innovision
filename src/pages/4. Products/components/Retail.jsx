import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";

const PersonalProtectiveEquipment = (props) => {
  const products = [
    {
      id: 1,
      name: "Mask FFP2 earloops small size",
    },
    {
      id: 2,
      name: "Mask FFP2 earloops",
    },
    {
      id: 3,
      name: "Mask FFP2 headloops",
    },
    {
      id: 4,
      name: "Mask FFP3 earloops",
    },
    {
      id: 5,
      name: "Mask FFP3 headloops",
    },
    {
      id: 6,
      name: "Safety glasses",
    },
    {
      id: 7,
      name: "Goggles",
    },
    {
      id: 8,
      name: "Face shield",
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-3">
      <FadeInOnScroll>
        <div className="product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="product-text">
          <div className="product-name">
            <h3>{product.name}</h3>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  ));

  return <div className="row product-list">{productList}</div>;
};

export default PersonalProtectiveEquipment;
