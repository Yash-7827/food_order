import { useContext } from 'react';

import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItemsInCart = cartCtx.items.reduce((currNum, item)=>{
        return currNum + item.amount;
    },0);

    return(
        <button className={classes.button} onClick={props.onCartShow}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfItemsInCart}
            </span>
        </button>
    );
}

export default HeaderCartButton;