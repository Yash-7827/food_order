import { useContext,useEffect,useState } from 'react';

import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const[btnIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfItemsInCart = items.reduce((currNum, item)=>{
        return currNum + item.amount;
    },0);

    const btnClasses= `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false);
        },300);

        return ()=>{
            clearTimeout(timer);
        };
    },[items]);


    return(
        <button className={btnClasses} onClick={props.onCartShow}>
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