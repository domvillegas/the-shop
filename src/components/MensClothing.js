import React from 'react';
import Item from './Item';
import Loading from './Loading'

const MensClothing = ({items, cart, setState, cartCountStateValue, keyCount, itemInfoHandler}) => {
    const mensClothing = items.filter(item => item.category === "men's clothing");

    const mensClothingMapped = mensClothing.map(item => <Item itemInfoHandler={itemInfoHandler} keyCount={keyCount}  cartCountStateValue={cartCountStateValue} cart={cart} setState={setState} key={item.id} id={item.id} title={item.title} imageURL={item.image} description={item.description} price={item.price}/>)

    return(
        <div id='mens-clothing-container'>
            {mensClothing ? mensClothingMapped : <Loading />}
        </div>
    )
}

export default MensClothing