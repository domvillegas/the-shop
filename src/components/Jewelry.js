import React from 'react';
import Item from './Item';
import Loading from './Loading'

const Jewelry = ({items, cart, setState, cartCountStateValue, keyCount, itemInfoHandler}) => {
    const jewelry = items.filter(item => item.category === "jewelery");

    const jewelryMapped = jewelry.map(item => <Item itemInfoHandler={itemInfoHandler} keyCount={keyCount}  cartCountStateValue={cartCountStateValue} cart={cart} setState={setState} key={item.id} id={item.id} title={item.title} imageURL={item.image} description={item.description} price={item.price}/>)

    return(
        <div id='jewelry-container'>
            {jewelry ? jewelryMapped : <Loading />}
        </div>
    )
}

export default Jewelry