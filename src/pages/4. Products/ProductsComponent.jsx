import React from 'react';
import ProductList from './components/ProductList';
import './products.css'


function ProductsComponent(props) {
    return (
        <div ref={props.ProductsRef} className='page products-wrapper'>
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
           <ProductList/>
        </div>
    )
}

export default ProductsComponent
