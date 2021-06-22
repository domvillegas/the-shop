import React from 'react';
import AddToCartButton from './AddToCartButton.js'
import InfoButton from './InfoButton.js'

const Item = ({ title, imageURL, description, price, setState, id, cart, cartCountStateValue, keyCount, itemInfoHandler}) => {
    return(
        <div id={id} className='item-container'>
            <h1 className='item-title'>{title}</h1>
            <img src={imageURL} alt={description}></img>
            <p className='price'>${price}</p>
            <div className='buttons-containers'>
                <AddToCartButton keyCount={keyCount} cartCountStateValue={cartCountStateValue} cart={cart} setState={setState}/>
                <InfoButton itemInfoHandler={itemInfoHandler} />
            </div>
        </div>
    )
}

export default Item