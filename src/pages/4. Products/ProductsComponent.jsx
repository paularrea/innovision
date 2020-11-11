import React from "react";
import ProductList from "./components/ProductList";
import "./products.css";
import { Helmet } from "react-helmet";

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
      <ProductList />
    </div>
  );
}

export default ProductsComponent;
