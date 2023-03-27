import { useReducer } from "react";
import shoppingCartContext from "./shoppingCartContext";
import shoppingCartReducer from "./shoppingCartReducer";

import { 
    ADD_TO_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    CLEAR_CART,
    TOTAL_PRICE
} from '../../types';
import clientAxios from "../../config/axios";

const shoppingCartState = ({children}) => {

    const initialState={
        shoppingCart: [],
        total: 0,
    }

        // Definir el reducer
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ state, dispatch ] = useReducer(shoppingCartReducer, initialState);

        const addToCart =async product => {
                 dispatch({
                    type: ADD_TO_CART,
                    payload: product
                })
            
        }

        const delFromCart =async (product, all= false) => {
            if(all) {
                dispatch({
                    type: REMOVE_ALL_FROM_CART,
                    payload: product
                })
            } else {
                dispatch({
                    type: REMOVE_ONE_FROM_CART,
                    payload: product
                })
            }
        }

        const clearCart = () => {
            dispatch({
                type: CLEAR_CART
            })
        }

        const totalPrice = () => {
            dispatch({
                type: TOTAL_PRICE
            })
        }

        const upOrder =async order => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post('/api/orders', order)
            } catch (error) {
                console.log(error.response);
            }
        }


    return (
        <shoppingCartContext.Provider
            value= {{
                shoppingCart: state.shoppingCart,
                total: state.total,
                addToCart,
                delFromCart,
                clearCart,
                totalPrice,
                upOrder
            }}
        >
            {children}
        </shoppingCartContext.Provider>
    )
} 

export default shoppingCartState