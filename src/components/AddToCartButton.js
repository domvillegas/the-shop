import React from 'react';

const AddToCartButton = ({setState, cart, cartCountStateValue, keyCount}) => {
    const toCartHandler = (event) => {

        setState({
            cart: [...cart, {key: keyCount, itemId: event}],
            cartCount: cartCountStateValue + 1,
            keyCount: keyCount + 1
        })
    }

    return(
    <button onClick={(event) => toCartHandler(event.target.parentElement.parentElement.id)}>add to cart</button>
    )
}

export default AddToCartButton