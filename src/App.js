import { useEffect, useState } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';

import './App.css';


const App = () => {

    const [showSwitcher, setShowSwitcher] = useState(true);
    const [cart, setCart] = useState([])     

    const clickHandler = (item) => {                     
        if (cart.indexOf(item) !== -1) {
            alert('این محصول در سبد شما موجود است') 
            return
        };
        setCart([...cart,item])
    }

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
    
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
      };
    


    return (
        <>
            <Navbar  setShowSwitcher={setShowSwitcher} showCartAmount={cart.length} />
            <main>
                {showSwitcher ? 
                <Shop clickHandler={clickHandler}/> :
                 <Cart cart={cart} setCart={setCart} handleChange={handleChange} setShowSwitcher={setShowSwitcher}/>}
            </main>
            { showSwitcher && <Footer />}
        </>
    )
}

export default App;
