import React from 'react';
import {connect} from 'react-redux';
import style from './index.module.scss';
import * as actions from '../../actions/ordersActions';

const Tables = (props) => {
    const tables = props.tables.tables.map((table, i) => {
        const tableOrders = props.orders.orders.filter(item => item.activeTable === i).map((item, i ) => {
                return <li className={style.orderItem} key={i}>{item.name} <span>{item.price}€</span></li>
            })
        return <div 
                    key={i} 
                    className={i === props.orders.activeTable ? [style.table, style.active].join(' ') : style.table}  
                    onClick={() => props.onActiveTableChange(i)}><h3>{table}</h3>
                    <ul className={style.list}>
                        {tableOrders}
                    </ul>
                    <button 
                        onClick={() => props.onCheckout(props.orders.orders, i)} 
                        className={style.button}>Check Out</button>
                </div>
    });
    
   

    return (
        <div className={style.tables}> 
            {tables}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
        orders: state.orders
    }
}
export default connect(mapStateToProps, actions)(Tables);