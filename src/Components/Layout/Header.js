import React from 'react'
import classes from './Header.module.css'
import meals from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onCartShow={props.onCartShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='Tasty Food!'/>
            </div>
        </React.Fragment>
    );
}

export default Header;