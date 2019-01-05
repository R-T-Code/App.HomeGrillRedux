export function onAddSpecialInput(e) {
    return {
        type: 'ON_ADD_SPECIAL_INPUT',
        targetName: e.target.name,
        targetValue: e.target.value
    }
}

export function onAddSpecialSubmit(e){
    e.preventDefault();
    return {
        type: 'ON_ADD_SPECIAL_SUBMIT'
    }
}
