import React from 'react';
import Item from './Item';
import Loading from './Loading'

const Electronics = ({items, cart, setState, cartCountStateValue, keyCount, itemInfoHandler}) => {
    const electronics = items.filter(item => item.category === "electronics");

    const electronicsMapped = electronics.map(item => <Item itemInfoHandler={itemInfoHandler}   keyCount={keyCount} cartCountStateValue={cartCountStateValue} cart={cart} setState={setState} key={item.id} id={item.id} title={item.title} imageURL={item.image} description={item.description} price={item.price}/>)

    return(
        <div id='electronics-container'>
            {electronics ? electronicsMapped : <Loading />}
        </div>
    )
}

export default Electronics