import * as Actions from './actions'

export default (state, action) => {
    switch(action.type){
        case Actions.GET_TRANSACTIONS: return {
            ...state,
            transactions: action.payload
        };

        case Actions.ADD_TRANSACTION: return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        };

        case Actions.DELETE_TRANSACTION: return {
            ...state,
            transactions: state.transactions.filter( tr => tr._id !== action.payload)
        };
        
        case Actions.TRANSACTION_ERROR: return {
            ...state,
            error: action.payload
        };

        default: return state;
    }
}