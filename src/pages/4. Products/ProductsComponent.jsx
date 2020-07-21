import React from 'react';
import ProductList from './components/ProductList';
import './products.css'
import FadeInOnScroll from '../../components/FadeInOnScroll';


function ProductsComponent(props) {
    return (
        <div ref={props.ProductsRef} className='page products-wrapper'>
            <FadeInOnScroll>
            <div className='title-filter-wrapper'>
                <div className='projects-title'>
                    <h1>PRODUCTS</h1>
                </div>
                <div className='projects-btn'>
                    <button>
                        Show filters
                    </button>
                </div>
            </div>
            </FadeInOnScroll>
           <ProductList/>
        </div>
    )
}

export default ProductsComponent
