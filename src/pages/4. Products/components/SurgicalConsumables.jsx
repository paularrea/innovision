import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import foto1 from "../../../img/products/SurgicalConsumables/1/Coveralls Front image.jpg";
import foto11 from "../../../img/products/SurgicalConsumables/1/Coveralls Photo of the body mannequin with the product on it.jpg";
import foto2 from "../../../img/products/SurgicalConsumables/2/Coveralls without sealing stripes Front image.jpg";
import foto22 from "../../../img/products/SurgicalConsumables/2/Coveralls without sealing stripes Photo of the body mannequin with the product on it.jpg";
import foto3 from "../../../img/products/SurgicalConsumables/3/No sleeve surgical gown Front image.jpg";
import foto33 from "../../../img/products/SurgicalConsumables/3/No sleeve surgical gown Photo of the body mannequin with the product on it.jpg";
import foto4 from "../../../img/products/SurgicalConsumables/4/Short sleeve surgical gown Front image.jpg";
import foto44 from "../../../img/products/SurgicalConsumables/4/Short sleeve surgical gown Photo of the body mannequin with the product on it）.jpg";
import foto5 from "../../../img/products/SurgicalConsumables/5/Long sleeve surgical gown with white cuffs Front image.jpg";
import foto55 from "../../../img/products/SurgicalConsumables/5/Long sleeve surgical gown with white cuffs Photo of the body mannequin with the product on it.jpg";
import foto6 from "../../../img/products/SurgicalConsumables/6/Long sleeve surgical gown with rubber cuffs Front image.jpg";
import foto66 from "../../../img/products/SurgicalConsumables/6/Long sleeve surgical gown with rubber cuffs Photo of the body mannequin with the product on it.jpg";
import foto7 from "../../../img/products/SurgicalConsumables/7/Surgical scrub suit Front image.jpg";
import foto77 from "../../../img/products/SurgicalConsumables/7/Surgical scrub suit Photo of the body mannequin with the product on it.jpg";
import foto8 from "../../../img/products/SurgicalConsumables/8/Surgical jacket Front image.jpg";
import foto88 from "../../../img/products/SurgicalConsumables/8/Surgical jacket Photo of the body mannequin with the product on it.jpg";
import foto9 from "../../../img/products/SurgicalConsumables/9/Disposable shoes coverby handmade（front image）.jpg";
import foto99 from "../../../img/products/SurgicalConsumables/9/Disposable shoes coverby handmade For the shoe cover.jpg";
import foto10 from "../../../img/products/SurgicalConsumables/10/Disposable shoe cover（Front image）.jpg";
import foto1010 from "../../../img/products/SurgicalConsumables/10/Disposable shoe cover For the shoe cover.jpg";
import fotoOnce from "../../../img/products/SurgicalConsumables/11/Disposable nursing cap（handmade） (Front image).jpg";
import foto1111 from "../../../img/products/SurgicalConsumables/11/Disposable nursing cap（handmade） (Photo of the mannequin with the product on it front image).jpg";
import foto12 from "../../../img/products/SurgicalConsumables/12/Disposable nursing cap (by machine) (Front image).jpg";
import foto1212 from "../../../img/products/SurgicalConsumables/12/Disposable nursing cap (by machine) (Photo of the mannequin with the product on it front image).jpg";
import foto13 from "../../../img/products/SurgicalConsumables/13/Surgical cap ties (handmade) (Front image).jpg";
import foto1313 from "../../../img/products/SurgicalConsumables/13/Surgical cap ties (handmade) (Photo of the mannequin with the product on it front image).jpg";
import foto14 from "../../../img/products/SurgicalConsumables/14/Surgical cap ties (by machine) (Front image).jpg";
import foto1414 from "../../../img/products/SurgicalConsumables/14/Surgical cap ties (by machine) (Photo of the mannequin with the product on it front image).jpg";

const SurgicalConsumables = (props) => {
  const products = [
    {
      id: 1,
      name: props.t("product.category3.products.0.productName"),
      img1: foto1,
      img2: foto11,
    },
    {
      id: 2,
      name: props.t("product.category3.products.1.productName"),
      img1: foto2,
      img2: foto22,
    },
    {
      id: 3,
      name: props.t("product.category3.products.2.productName"),
      img1: foto3,
      img2: foto33,
    },
    {
      id: 4,
      name: props.t("product.category3.products.3.productName"),
      img1: foto4,
      img2: foto44,
    },
    {
      id: 5,
      name: props.t("product.category3.products.4.productName"),
      img1: foto5,
      img2: foto55,
    },
    {
      id: 6,
      name: props.t("product.category3.products.5.productName"),
      img1: foto6,
      img2: foto66,
    },
    {
      id: 7,
      name: props.t("product.category3.products.6.productName"),
      img1: foto7,
      img2: foto77,
    },
    {
      id: 8,
      name: props.t("product.category3.products.7.productName"),
      img1: foto8,
      img2: foto88,
    },
    {
      id: 9,
      name: props.t("product.category3.products.8.productName"),
      img1: foto9,
      img2: foto99,
    },
    {
      id: 10,
      name: props.t("product.category3.products.9.productName"),
      img1: foto10,
      img2: foto1010,
    },
    {
      id: 11,
      name: props.t("product.category3.products.10.productName"),
      img1: fotoOnce,
      img2: foto1111,
    },
    {
      id: 12,
      name: props.t("product.category3.products.11.productName"),
      img1: foto12,
      img2: foto1212,
    },
    {
      id: 13,
      name: props.t("product.category3.products.12.productName"),
      img1: foto13,
      img2: foto1313,
    },
    {
      id: 14,
      name: props.t("product.category3.products.13.productName"),
      img1: foto14,
      img2: foto1414,
    },
  ];
  const productList = products.map((product) => (
    <div className="product-card col-12 col-md-2">
      <div className="mx-auto d-flex justify-content-start product-img">
        <img
          onMouseOver={(e) => (e.currentTarget.src = product.img2)}
          onMouseOut={(e) => (e.currentTarget.src = product.img1)}
          src={product.img1}
          alt="surgical consumable product"
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

export default SurgicalConsumables;
