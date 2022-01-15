import React from 'react';

const Counter = ({quantity,product_id, changeQuantity}) => {
    console.log(product_id)
    return (<input
    type="number" 
    className="form-control" 
    value={quantity} 
    onChange={e=>{
        changeQuantity(product_id,e.target.value);
    }} />  );
}
 
export default Counter ;






				