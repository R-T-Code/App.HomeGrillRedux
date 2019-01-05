import React from 'react'; 
import style from './index.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions/settingsActions';

const Settings = (props) => {
    return (
        <div className={style.settings}>
            <h2 className={style.heading}>Add Special Item</h2>
            <form className={style.form}>
                <input
                    value={props.menu.itemName}
                    name='itemName'
                    onChange={e => props.onAddSpecialInput(e)} 
                    className={style.input} 
                    type='text' 
                    placeholder='item name'/>
                <input 
                    value={props.menu.itemPrice}
                    name='itemPrice'
                    onChange={e => props.onAddSpecialInput(e)} 
                    className={style.input}  
                    type='number' 
                    placeholder='price'/>
                <button 
                    onClick={(e) => props.onAddSpecialSubmit(e)}
                    className={style.btn}>Add to Menu</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps, actions)(Settings);