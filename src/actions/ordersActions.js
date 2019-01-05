export function onActiveTableChange(i) {
    return {
        type: 'ON_ACTIVE_TABLE_CHANGE',
        tableIndex: i
    }
}

export function onOrderAdd(i, listItem, pagePath) {
    return {
        type: 'ON_ORDER_ADD',
        i,
        listItem,
        pagePath
    }
}

export function onCheckout (orders, tableIndex){
    return{
        type: 'ON_CHECK_OUT_CLICK',
        orders,
        tableIndex
    }
}