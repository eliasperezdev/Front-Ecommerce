import { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";

import { 
    GET_ORDERS,
    GET_ADDRESS,
    ADD_ADDRESS,
    GET_FAVORITIES,
    ADD_FAVORITE,
    DELETE_ADDRESS,
    DELETE_FAVORITE
} from '../../types';
import clientAxios from "../../config/axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const UserState = ({children}) => {

    const initialState={
        orders: [],
        favorities: [],
        address: [],
    }

    const router = useRouter()

        // Definir el reducer
        const [ state, dispatch ] = useReducer(userReducer, initialState);

        const getOrders =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get(`/api/orders/user`, config)
                dispatch({
                    type: GET_ORDERS,
                    payload: respuesta.data.orders
                })
            } catch (error) {
                console.log(error);
            }
        }

        const getAddress =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get(`/api/address`, config)
                console.log(respuesta);
                dispatch({
                    type: GET_ADDRESS,
                    payload: respuesta.data.addresses
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const getFavorities =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get(`/api/favorities`, config)
                dispatch({
                    type: GET_FAVORITIES,
                    payload: respuesta.data.favorities
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const addAddress =async address => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post('/api/address', address, config)
                dispatch({
                    type: ADD_ADDRESS,
                    payload: respuesta.data
                })
                toast.success('Se agregó la nueva dirección');
                router.push('/account/address')
            } catch (error) {
                toast.error(error.response.data);
            }
        }

        const addFavorite =async favorite => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post('/api/favorities', {ProductId: favorite}, config)
                console.log(respuesta);
                dispatch({
                    type: ADD_FAVORITE,
                    payload: respuesta.data
                })
                toast.success('Se agregó a favortio');
            } catch (error) {
                toast.error(error.response.data);
            }
        }

        const deleteAddress =async id => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                await clientAxios.delete(`/api/address/${id}`, config)
                
                dispatch({
                    type: DELETE_ADDRESS,
                    payload: id
                })
                toast.success('Se ha eliminado correctamente');
            } catch (error) {
                toast.error(error.response.data);
            }
        }

        const deleteFavorite =async id => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                await clientAxios.delete(`/api/favorities/${id}`, config)
                
                dispatch({
                    type: DELETE_FAVORITE,
                    payload: id
                })
                toast.success('Se elimino el favorito');
            } catch (error) {
                toast.error(error.response.data);
            }
        }

    return (
        <userContext.Provider
            value= {{
                orders: state.orders,
                address: state.address,
                favorities: state.favorities,
                getOrders,
                getAddress,
                getFavorities,
                addAddress,
                addFavorite,
                deleteAddress,
                deleteFavorite
            }}
        >
            {children}
        </userContext.Provider>
    )
} 

export default UserState