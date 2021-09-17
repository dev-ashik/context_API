import React, {useContext} from 'react';
import {categoryContext} from '../../App';
import Products from '../Products/Products';

const Home = () => {
    const category = useContext(categoryContext);
    return (
        <div className="componentArea">
            <h1>This is Home. selected category: {category}</h1>
            <Products/>
        </div>
    );
};

export default Home;