import React from 'react';
import { ApiTopProducts } from '../apifolder/TopProductsApi'
import Product from './Product';

function Products () {
  return <div className='p-5 flex flex-wrap'>
      {
          ApiTopProducts.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;

