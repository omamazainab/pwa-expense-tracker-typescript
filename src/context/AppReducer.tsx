export default (state,action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload,...state.transactions]
            }
        default:
            return state
    }
}