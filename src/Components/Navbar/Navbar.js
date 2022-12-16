import React from 'react'

import styles from './Navbar.module.css'
import { BsCart3 } from "react-icons/bs";

export default function Navbar({ setShowSwitcher,showCartAmount }) {
    const showCart = () => {
        setShowSwitcher(false)
    }
    const showShop = () => {
        setShowSwitcher(true)
    }
    return (
    <nav className={styles['nav']}>
        <section>
            <div onClick={showCart}>
                <p>
                    <BsCart3/>       
                    <span>{showCartAmount}</span>
                </p>
            </div>
            <div onClick={showShop}>
                <h1>Suits</h1>
            </div>
        </section>
    </nav>
  )
}
