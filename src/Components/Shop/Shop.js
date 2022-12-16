import React from 'react'
import products from '../../data/products'
import Cards from '../Cards/Cards';

import styles from './Shop.module.css'

export default function Shop({ clickHandler }) {

    return (
        <ul className={styles['shop-cards__container']}>
            {products.map((item) => (
                <Cards key={item.id} item={item} onClickHandler={clickHandler} />
            ))}
        </ul>
  )
}
