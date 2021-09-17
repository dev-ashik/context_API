import React, {useContext} from 'react';
import {categoryContext} from '../../App';

const ProductDetails = (props) => {
    const {name} = props.products;
    return (
        <div className="componentArea">
            <h3>This is ProductDetails</h3>
            <h4>Selected Product: {name}</h4>
            {/* <button onClick={()=>setCount(count + 1)}>Increment</button> */}
        </div>
    );
};

export default ProductDetails;