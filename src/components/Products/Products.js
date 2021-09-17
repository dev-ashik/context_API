import React, {useContext, useEffect, useState} from 'react';
import {categoryContext} from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';
const AllProducts = [
    {name:'lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'},
    {name:'Samsung', category:'mobile'}, {name:'Nokia', category:'mobile'}, {name:'Apple', category:'Mobile'},
    {name:'Nokia', category:'camera'}, {name:'Nikkon', category:'camera'}, {name:'Sony', category:'Camera'}
]


const Products = () => {
    const [category] = useContext(categoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const matchedProduct = AllProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProduct);
    },[category])
   

    return (
        <div className="componentArea">
            <h2>This is Products. selected category: {category}</h2>
           {
               products.map(pd => <ProductDetails products={pd}/>)
           }
        </div>
    );
};

export default Products;