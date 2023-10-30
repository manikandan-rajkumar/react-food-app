import { Fragment } from 'react';
import classes from './Header.module.css'
import food from '../../assets/food-header-2.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Taste Hub</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={food} alt="It is an Food table" />
            </div>
        </Fragment>
    );
}

export default Header;