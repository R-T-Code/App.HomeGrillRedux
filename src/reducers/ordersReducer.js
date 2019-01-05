import * as types from "../actions/types";

const initialState = {
    activeTable: 0,
    orders: [],
    totalSale: 0,
    count: null
}


export default (state=initialState, action) => {
   switch (action.type) {
        case types.ON_ACTIVE_TABLE_CHANGE: {
            return {...state, activeTable: action.tableIndex}
        }
        case types.ON_ORDER_ADD: {
            if(action.pagePath !== '/orders'){
                return state
            } else {
                const updatedOrders = [...state.orders];
                const newOrder = {activeTable: action.i, ...action.listItem};
                updatedOrders.push(newOrder);
                return {...state, orders: updatedOrders}
            }
        }
        case types.ON_CHECK_OUT_CLICK: {
            // get an array of checked out items names
            const chekecdOutItems = action.orders.filter(order => order.activeTable === action.tableIndex).map(item => {
                return item.name;
            });

            // get count array from state
            const count = {...state.count};
            // go throught checked out items and update count array
            chekecdOutItems.forEach((itemName) => {count[itemName] = (count[itemName] || 0) + 1});

            const forTotalSale = action.orders
                                    .filter(order => order.activeTable === action.tableIndex)
                                    .reduce((total, current) => { return total + current.price}, 0);
            const totalSale = state.totalSale + forTotalSale;

            const orders = action.orders.filter(order => order.activeTable !== action.tableIndex);
            return {...state, orders, totalSale, count};
        }
       
       default : return state
   }
}