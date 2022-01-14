import React from 'react';
import { useSelector } from 'react-redux';
import './listMyProduct.css'
import { ListOneProduct } from './ListOneProduct';

export const ListMyProduct = () => {

    const {products} = useSelector(state => state.products);
 
    return (
        <div className="pointer container-1" >
            {
                products.map(dato => (
                    <ListOneProduct
                    key={dato.id}
                    {...dato}
                    />
                ))
                
            }
            
        </div>
    )
}
