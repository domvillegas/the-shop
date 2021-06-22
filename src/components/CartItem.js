import React from 'react';

const CartItem = (props) => {

    return(
        <div className='cart-item'>
            <i onClick={() => props.deleteItemHandler(props.itemKey)} className="fas fa-times delete-icon"></i>
            <h3>{props.title}</h3>
            <img alt={props.title} src={props.image}></img>
            <p>Price: ${props.price}</p>
            {/* <p>{props.description}</p> */}
        </div>
    )
}

export default CartItem