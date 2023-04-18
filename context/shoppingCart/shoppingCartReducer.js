import { 
    ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, TOTAL_PRICE, SET_CART
} from '../../types';

let newState

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            let itemInCart = state.shoppingCart.find(item => item.id === action.payload.id)
            newState = itemInCart ? {
                ...state,
                shoppingCart: state.shoppingCart.map((item) => item.id === action.payload.id ? {...item, quantify: item.quantify+1} : item
            )}: {
                ...state,
                shoppingCart: [...state.shoppingCart, {...action.payload, quantify: 1}]
            }
            localStorage.setItem('carrito', JSON.stringify(newState.shoppingCart)); // Guardar el nuevo estado en el localStorage
            return newState
        case REMOVE_ONE_FROM_CART:
            let itemToDelete = state.shoppingCart.find((item) => item.id === action.payload.id);
            console.log(itemToDelete);

            newState = itemToDelete.quantify > 1
            ? {
                ...state,
                shoppingCart: state.shoppingCart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantify: item.quantify - 1 }
                    : item
                ),
            }
            : {
                ...state,
                shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload.id),
                };
            localStorage.setItem('carrito', JSON.stringify(newState.shoppingCart)); // Guardar el nuevo estado en el localStorage
            case REMOVE_ALL_FROM_CART:
                return {
                    ...state,
                    shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload),
                };
            case SET_CART:
                const cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) : null
                return {
                    ...state,
                    shoppingCart: cart ? cart : [],
                }
            case TOTAL_PRICE:
                return {
                    ...state,
                    total: state.shoppingCart.reduce((sum, product) => sum + product.price*product.quantify, 0)
                }

        default:
            return state;
    }
}