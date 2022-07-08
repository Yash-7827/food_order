import { useState,useRef } from 'react';

import classes from './MealItemForm.module.css' 
import Input from '../../UI/Input';

const MealItemForm = (props) =>{
    const [formIsValid, setFormIsValid] = useState(true);
    const amnountInputRef = useRef();

    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredAmount = amnountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) 
        {
            setFormIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amnountInputRef}
                label='Amount'
                input={{
                    id :'amount_' + props.id,
                    type : 'number',
                    min : '1',
                    max : '5',
                    step : '1',
                    defaultValue : 1 
                }}
            />
            <button className={classes.button}>+ ADD</button>
            {!formIsValid && <p>The amount is not valid. (1-5)</p>}
        </form>
    );
}

export default MealItemForm;