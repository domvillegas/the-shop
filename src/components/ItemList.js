import React from 'react';
import Item from './Item.js'

const ItemList = ({items}) => {
    console.log(items)
    return items.map(item => {
        return(
            <Item key={item.id} title={item.title} imageURL={item.image} description={item.description} price={item.price}/>
        )
    })
}

export default ItemList