import { useContext } from 'react';

import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

const MealItem = (props) => {

const price = `₹${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) =>{
        cartCtx.addItem(
            {
                id : props.id,
                name : props.title,
                amount : amount,
                price : props.price
            }
        );
    };


    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>

            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>

        </li>
    );
}

export default MealItem;
