import React from 'react';
import style from './index.module.scss';
import {connect} from 'react-redux';
import * as actionsMenu from '../../actions/menuActions';
import * as actionsOrders from '../../actions/ordersActions';
import { FaUtensils } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa';
import { FaMapSigns } from 'react-icons/fa';
import { FaCocktail } from 'react-icons/fa';

const actions = {...actionsMenu, ...actionsOrders};
const icons = [<FaCocktail/>, <FaUtensils/>, <FaCookieBite/>, <FaMapSigns/>];

const Menu = (props) => {
    const menuSelections = Object.keys(props.menu.menu);
    const menu = menuSelections.map((selection,i) => {
        return <li 
                key={i} 
                onClick={() => props.onMenuSelection(i)}
                className={ props.menu.activeCat === i ?  [style.active, style.selection].join(' ')  : style.selection}>
                <p className={style.icon}>{icons[i]}</p> {selection}</li>
    });

    const activeCat =  menuSelections[props.menu.activeCat];
    
    let selectionList = props.menu.menu[activeCat].map((listItem, i) => {
        return <li 
                    key={i} 
                    className={style.listItem}
                    onClick= {()=> props.onOrderAdd(props.orders.activeTable, listItem, props.history.location.pathname)}> {listItem.name}  <span>{listItem.price}€</span></li>
    })
    // If there are no list items in a list (in our case in special tab) display a message instead
    if(props.menu.menu[activeCat].length === 0) {
        selectionList = <li>Here You can add your day's specials. You can do it in a Settings tab</li>
    }
    
    return (
       <div className={style.menu}>
           <ul className={style.selections}>
            {menu}
           </ul>
           <ul className={style.selectionList}>
            {selectionList}
           </ul>
       </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        orders: state.orders
    }
}

export default connect(mapStateToProps, actions)(Menu);