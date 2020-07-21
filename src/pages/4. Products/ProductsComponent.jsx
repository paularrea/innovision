import React from "react";
import ProductList from "./components/ProductList";
import "./products.css";

function ProductsComponent(props) {
  return (
    <div ref={props.ProductsRef} className="page products-wrapper">
      <ProductList />
    </div>
  );
}

export default ProductsComponent;
