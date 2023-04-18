import { 
    GET_ORDERS,
    ADD_ADDRESS,
    GET_FAVORITIES,
    ADD_FAVORITE,
    GET_ADDRESS,
    DELETE_ADDRESS,
    DELETE_FAVORITE
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }  
        case GET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }  
        case GET_FAVORITIES:
            return {
                ...state,
                favorities: action.payload
            }  
        case ADD_ADDRESS:
            return {
                ...state,
                address: [...state.address, action.payload]
            }  
        case ADD_FAVORITE:
            return {
                ...state,
                favorities: [...state.favorities, action.payload]
            }    
        case DELETE_ADDRESS:
            return {
                ...state,
                address: state.address.filter((element) => element.id !== action.payload)
            } 
        case DELETE_FAVORITE:
            return {
                ...state,
                favorities: state.favorities.filter((element) => element.id !== action.payload)
            } 
        default:
            return state;
    }
}