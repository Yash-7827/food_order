import './App.css';
import Header from './Components/Layout/Header'
import {React,useState} from 'react';
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartContextProvider';


function App() {
  
  const[ cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onCartShow={showCartHandler}></Header>
      <Meals/>
    </CartProvider>
  );
}

export default App;