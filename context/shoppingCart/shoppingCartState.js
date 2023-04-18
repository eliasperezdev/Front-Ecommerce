import { useReducer } from "react";
import shoppingCartContext from "./shoppingCartContext";
import shoppingCartReducer from "./shoppingCartReducer";

import { 
    ADD_TO_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    SET_CART,
    TOTAL_PRICE
} from '../../types';
import clientAxios from "../../config/axios";
import {toast,  Toaster } from 'react-hot-toast';

const shoppingCartState = ({children}) => {
    
    
    const initialState={
        shoppingCart: [],
        total: 0,
    }

        // Definir el reducer
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ state, dispatch ] = useReducer(shoppingCartReducer, initialState);

        const addToCart =async product => {
            const respuesta = await clientAxios.get(`/api/products/${product.id}`)
            let itemInCart = state.shoppingCart.find(item => item.id === product.id)
            if(!itemInCart || itemInCart.quantify < respuesta.data.stock){
                    dispatch({
                    type: ADD_TO_CART,
                    payload: product
                })
            toast.success('Se ha agregado al carrito');
            } else {
                toast.error('No hay suficiente stock');
            }
            
        }

        const delFromCart =async (product, all= false) => {
            if(all) {
                dispatch({
                    type: REMOVE_ALL_FROM_CART,
                    payload: product
                })
            } else {
                console.log("remove");
                dispatch({
                    type: REMOVE_ONE_FROM_CART,
                    payload: product
                })
            }
        }

        const setCart = () => {
            dispatch({
                type: SET_CART
            })
        }

        const totalPrice = () => {
            dispatch({
                type: TOTAL_PRICE
            })
        }

        const upOrder =async order => {
            try {
                const respuesta = await clientAxios.post('/api/orders', order)
                window.location.href = respuesta.data.link
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
                setCart,
                totalPrice,
                upOrder
            }}
        >
            {children}
        </shoppingCartContext.Provider>
    )
} 

export default shoppingCartState