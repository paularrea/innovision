import React from "react";

const PersonalProtectiveEquipment = (props) => {
  const products = [
    {
      id: 1,
      name: "Polybag FFP2 earloops small size",
    },
    {
      id: 2,
      name: "Polybag mask FFP2 earloops",
    },
    {
      id: 3,
      name: "Polybag mask FFP3 earloops",
    },
    {
      id: 4,
      name: "Polybag kids disposable surgical mask IIR earloops",
    },
    {
      id: 5,
      name: "Polybag disposable surgical mask IIR earloops",
    },
    {
      id: 6,
      name: "Polybag kids disposable mask earloops",
    },
    {
      id: 7,
      name: "Polybag disposable mask earloops",
    },
  ];

  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-4">
        <div className="product-img">
          <img src={product.img} alt="Retail product" />
        </div>
        <div className="product-text">
          <div className="product-name">
            <p>{product.name}</p>
          </div>
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
