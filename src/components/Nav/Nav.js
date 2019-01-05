import React from 'react';
import style from './index.module.scss';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className={style.nav}>
            <p className={style.name}>MENU</p>
            <p className={style.logo}>Home <span className={style.span}>GRILL</span></p>
            <ul className={style.list}>
                <NavLink activeClassName={style.active} className={style.link} to='/orders'>Orders</NavLink>
                <NavLink activeClassName={style.active} className={style.link} to='/statistics'>Statistics</NavLink>
                <NavLink activeClassName={style.active} className={style.link} to='/settings'>Settings</NavLink>
            </ul>
        </div>
    )
}

export default Nav;