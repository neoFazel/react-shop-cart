import React from 'react'

export default function CartCards({ item }) {
    const {id, img, title, price, brand} = item
    return (
    <li>
        <div>
            <img src={img} alt='title' width={125} />
            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{brand}</p>
                <p>{price}</p>
            </div>
        </div>
    </li>
  )
}   
