import React from 'react';

export default function Product ( { pic, price, description }){


    return(
        <div>
            <img src={pic}/>
            <p>${price}</p>
            <p>{description}</p>
            <button>Purchase</button>
        </div>
    )
}