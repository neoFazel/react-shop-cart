import React, { useState, useEffect } from 'react'

import styles from './Cart.module.css'
import { BsCartDash } from "react-icons/bs";


export default function Cart( {cart, setCart, setShowSwitcher, handleChange  } ) {

  const [price, setPrice] = useState(0)

  const showShop = () => {
    setShowSwitcher(true)
  }

  const handleRemove = (id) => {
    console.log(id);
    const arr = cart.filter(item => item.id !== id);
    setCart(arr)
    handlePrice()
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  })

  return (
    <>
      {cart.length === 0 ? (
        <div className={styles['empty-cart']}>
          <div>
          <h1>!!!سبد خرید خالی است</h1>
            <BsCartDash className={styles['cart-icon']}/>
          </div>
            <button onClick={showShop}>بازگشت به فروشگاه</button>
        </div>
        ) : (
          <div className={styles['container']}>
            <div className={styles['total']}>
              <div>
                <div>
                  <p>سبد خرید شما</p>
                  <span>{price} تومان  </span>
                </div>
                <button>تکمیل خرید</button>
              </div>
            </div>
            <article className={styles['cart-items__container']}>
            {cart.map((item) => (
              <div key={item.id} className={styles['cart-item']}>
                <div className={styles['item-desc']}>
                  <h1>{ ` ${item.brand} ${item.title}`}</h1>
                </div>
                <div>
                  <img src={item.img} width='120' height='150'  alt={item.title} />
                  <div>
                    <p className={styles['item-price']}>{`${item.price}T قیمت`}</p>
                    <div className={styles['quantity-btns']}>
                      <button onClick={() => handleChange(item, -1)}>-</button>
                      <span>{item.amount}</span>
                      <button onClick={() => handleChange(item, 1)}>+</button>
                    </div>
                    <button className={styles['remove-btn']} onClick={() => handleRemove(item.id)}>حذف محصول</button>
                  </div>
                </div>
              </div>
            ))}
          </article>
          </div>
      )}
    </>
  )
}
