import * as types from "../actions/types";
import menu from './menu';

const initialState = {
    menu,
    activeCat: 0,
    itemName: '',
    itemPrice: ''
}

export default (state=initialState, action) => {
   switch (action.type) {
        case types.ON_MENU_SELECTION_CLICK: {
           return {...state, activeCat: action.i}
       }
        case types.ON_ADD_SPECIAL_INPUT:
            const newState = {...state};
            newState[action.targetName] = action.targetValue
            return newState;
        case types.ON_ADD_SPECIAL_SUBMIT:
            const menu = {...state.menu}
            if(state.itemName && state.itemPrice){
                menu.special.push({name: state.itemName.charAt(0).toUpperCase() + state.itemName.slice(1), price: parseFloat(state.itemPrice)});
            } 
            return {...state, menu, itemName:'', itemPrice: ''}

       default : return state
   }
}