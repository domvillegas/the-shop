import React from 'react';
import Item from './Item';
import Loading from './Loading'

const WomensClothing = ({items, setState, cart, cartCountStateValue, keyCount, itemInfoHandler}) => {

    const womensClothing = items.filter(item => item.category === "women's clothing");

    const womensClothingMapped = womensClothing.map(item => <Item itemInfoHandler={itemInfoHandler} keyCount={keyCount} cartCountStateValue={cartCountStateValue} cart={cart} setState={setState} key={item.id} id={item.id} title={item.title} imageURL={item.image} description={item.description} price={item.price}/>)

    return(
        <div id='womens-clothing-container'>
            {womensClothing ? womensClothingMapped : <Loading />}
        </div>
    )
}

export default WomensClothing