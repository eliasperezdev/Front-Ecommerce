import { 
    GET_CATEGORIES,
    GET_EDITORIALS,
    GET_PRODUCTS,
    UP_PRODUCT,
    UP_CATEGORY,
    UP_EDITORIAL,
    DELETE_EDITORIAL,
    DELETE_CATEGORY,
    DELETE_PRODUCT,
    GET_EDITORIAL,
    GET_CATEGORY,
    GET_PRODUCT,
    EDIT_PRODUCT,
    GET_RECOMMENDS
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }                 
        case GET_EDITORIAL:
            return {
                ...state,
                editorial: action.payload
            }     
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }     
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }           
        case GET_EDITORIALS:
            return {
                ...state,
                editorials: action.payload
            }       
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }   
        case GET_RECOMMENDS:
            return {
                ...state,
                recommends: action.payload
            }   
        case UP_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }   
        case UP_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }  
        case UP_EDITORIAL:
            return {
                ...state,
                editorials: [...state.editorials, action.payload]
            } 
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
            } 
        case DELETE_EDITORIAL:
            return {
                ...state,
                editorials: state.editorials.filter((element) => element.id !== action.payload)
            } 
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((element) => element.id !== action.payload)
            }   
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((element) => element.id !== action.payload)
            }     
        default:
            return state;
    }
}