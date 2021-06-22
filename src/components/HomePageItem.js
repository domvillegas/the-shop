import React from 'react';
import { Link } from 'react-router-dom';

const HomePageItem = ({imageURL, category}) => {

    const pathname = category.replace(/'/g, '').replace(/ /g, '');

    return(
        <Link to={`/${pathname}`}>
            <div id='homepage-item'>
                <h2>{category} <i id='arrow' className="fas fa-arrow-right"></i></h2>
                <img alt={category} src={imageURL}></img>
            </div>
        </Link>
    )
}

export default HomePageItem