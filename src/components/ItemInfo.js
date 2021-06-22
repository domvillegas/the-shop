import React from 'react';
import AddToCartButton from './AddToCartButton'

const ItemInfo = ({itemInfo, cart, cartCountStateValue, keyCount, setState}) => {

    return(
            itemInfo.map(item => {
                return(
                    <div className='item-info-container' id={item.id} key={item.id}>
                        <div id='inner-info-container'>
                            <h1>{item.title}</h1>
                            <img alt={item.description} src={item.image}></img>
                            <p>${item.price}</p>
                            <AddToCartButton keyCount={keyCount} cartCountStateValue={cartCountStateValue} cart={cart} setState={setState}/>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })
    )
}

export default ItemInfo