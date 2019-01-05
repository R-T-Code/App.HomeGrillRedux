import React from 'react';
import Tables from '../Tables/Tables';
import {connect} from 'react-redux';
import * as actions from '../../actions/ordersActions';
import style from './index.module.scss';

const Orders = (props) => {
    return (
        <div className={style.orders}>
            <Tables 
                onActiveTableChange={props.onActiveTableChange}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, actions)(Orders);