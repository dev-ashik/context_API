import React, {useContext} from 'react';
import {categoryContext} from '../../App';

const Header = () => {
    // console.log(count);
    const [ category, setCategory] = useContext(categoryContext);
    return (
        <div className="componentArea">
            <h1>This is Header. selected category: {category}</h1>
            <button onClick={()=>setCategory("Laptop")}>Laptop</button>
            <button onClick={()=>setCategory("Mobile")}>Mobile</button>
            <button onClick={()=>setCategory("Camera")}>Camera</button>
            
        </div>
    );
};

export default Header;