import React from 'react';
import {Link} from 'react-router-dom'

const InfoButton = ({itemInfoHandler}) => {
    return(
        <Link to='/info' style={{display: 'inline'}}>
            <button onClick={(event) => itemInfoHandler(event)}>info</button>
        </Link>
    )
}

export default InfoButton