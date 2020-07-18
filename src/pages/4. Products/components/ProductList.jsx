import React from "react";
import Fade from "react-reveal/Fade";


const ProductList = (props) => {
  const products = [
    {
      id: 1,
      name: "Producto1",
      price: "20USD",
      brand: "Brand1",
    },
    {
      id: 2,
      name: "Producto2",
      price: "35USD",
      brand: "Brand2",
    },
    {
      id: 3,
      name: "Producto3",
      price: "40USD",
      brand: "Brand3",
    },
    {
      id: 4,
      name: "Producto4",
      price: "15USD",
      brand: "Brand4",
    },
    {
      id: 5,
      name: "Producto5",
      price: "20USD",
      brand: "Brand5",
    },
    {
      id: 6,
      name: "Producto6",
      price: "35USD",
      brand: "Brand6",
    },
    {
      id: 7,
      name: "Producto7",
      price: "40USD",
      brand: "Brand7",
    },
    {
      id: 8,
      name: "Producto8",
      price: "15USD",
      brand: "Brand8",
    },
  ];

  const productList = products.map((product) => (
    <Fade>
    <div className="product-card col-12 col-md-6">
      <img className="card-img" src={product.img} alt="" />
      <div className="product-text">
      <div className="price-brand-wrapper">
        <h3>{product.name}</h3>
        <p className='product-price'>{product.price}</p>
      </div>
      <p className='product-brand'>{product.brand}</p>
      </div>
    </div>
    </Fade>
  ));

  return <div className="row product-list">{productList}</div>;
};

export default ProductList;
