import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const ProductCard = ({ match }) => {

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const {
    params: { productId },
  } = match;

  useEffect(() => {
    const API_BASE_URL = `products`;
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${productId}`);
        setProduct(result.data);
        console.log('data', result.data)
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchProduct();
  }, [productId]);

  return (
    <>
    <Link to={`/`}>Go back to search books</Link>
  <p>{productId}</p>
  <div className="product-img">
            <img src={productId.img} alt="" />
          </div>
          <div className="product-text">
            <div className="price-brand-wrapper">
              <h3>{productId.name}</h3>
              <p className="product-price">{productId.price}</p>
            </div>
            <p className="product-brand">{productId.brand}</p>
          </div>
    {/* {loading && (
      <div style={{ color: `green` }}>
        loading book detail for book ID: <strong>{productId}</strong>
      </div>
    )}
    {error && (
      <div style={{ color: `red` }}>
        some error occurred, while fetching api
      </div>
    )} */}
  </>
  );
};

export default ProductCard;