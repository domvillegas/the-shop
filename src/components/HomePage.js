import React from 'react';
import Loading from './Loading';
import HomePageItem from './HomePageItem'

const HomePage = ({items}) => {
    const womensItem = items.find(item => item.category === "women's clothing")
    const mensItem = items.find(item => item.category === "men's clothing")
    const jewelryItem = items.find(item => item.category === "jewelery")
    const electronicsItem = items.find(item => item.category === "electronics")

    return(
        <div id='homepage-items-container'>
            {womensItem ? <HomePageItem category={womensItem.category} imageURL={womensItem.image}/> : <Loading />}
            {mensItem ? <HomePageItem category={mensItem.category} imageURL={mensItem.image}/> : <Loading />}
            {jewelryItem ? <HomePageItem category={jewelryItem.category} imageURL={jewelryItem.image}/> : <Loading />}
            {electronicsItem ? <HomePageItem category={electronicsItem.category} imageURL={electronicsItem.image}/> : <Loading />}
        </div>
    )
}

export default HomePage