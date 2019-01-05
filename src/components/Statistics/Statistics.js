import React from 'react';
import {connect} from 'react-redux';
import style from './index.module.scss';

const Statistics = (props) => {
    // Make an array of objects with item name and count
    const valuesArray = props.orders.count && Object.keys(props.orders.count)
                            .map((name, i) => {
                            return  {name: name, count: Object.values(props.orders.count)[i]}
                            })
                            .map((item, i) => {
                                return <li key={i} className={style.item}>
                                                        <p className={style.sold}>{item.name}</p>
                                                        <p ></p>
                                                        <p className={style.perDay}>{item.count}</p>
                                                        </li>
                            });

    return (
        <div className={style.stats}>
            <p className={style.sales} >Total sale for a day: {props.orders.totalSale.toFixed(2)}</p>
            <ul className={style.list}>
                <li className={style.item}>
                    <p className={style.sold}>ITEM</p>
                    <p className={style.perDay}>SOLD PER DAY</p>
                </li>
                {valuesArray}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Statistics);