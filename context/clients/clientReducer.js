import { 
    GET_CLIENTS,
    GET_ORDERS,
    GET_SELLERS,
    GET_USERS,
    GET_ORDER,
    UPDATE_STATUS
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }           
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            }   
        case UPDATE_STATUS:
            return {
                ...state,
                order: action.payload
            }       
        default:
            return state;
    }
}