import React from 'react'

import styles from './Cards.module.css'


export default function Cards({ item, onClickHandler}) {
    const {id, img, title, price, brand} = item
  return (
    <>
        <li className={styles['item-card']}>
            <img src={img} alt={`${title}  has broken`}/>
            <div>
                <h2>{title}</h2>
                <ul className={styles['desc-list']}>
                    <li>{brand} <span>: برند</span></li>
                    <li><span>قیمت محصول:</span>  {`${price} تومان`}</li>
                </ul>
                <button  className={styles['btn']} onClick={() => onClickHandler(item)} > خرید محصول</button>
            </div>

        </li>
    </>
  )
}
