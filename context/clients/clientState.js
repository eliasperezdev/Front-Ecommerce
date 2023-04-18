import { useReducer } from "react";
import clientContext from "./clientContext";
import clientReducer from "./clientReducer";

import { 
    GET_CLIENTS,
    GET_USERS,
    UPDATE_ROLE,
    GET_ORDERS,
    GET_ORDER,UPDATE_STATUS

} from '../../types';
import clientAxios from "../../config/axios";
import Swal from "sweetalert2";

const clientState = ({children}) => {

    const initialState={
        clients: [],
        users: [],
        orders: [],
        order: null
    }

        // Definir el reducer
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ state, dispatch ] = useReducer(clientReducer, initialState);

        const getClients =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get('/api/users', config)
                dispatch({
                    type: GET_CLIENTS,
                    payload: respuesta.data.users
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: error.response,
                  })
            }
        }

        const getUsers =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get('/api/users/seller', config)
                dispatch({
                    type: GET_USERS,
                    payload: respuesta.data.users
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: error.response,
                  })
            }
        }

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
                const respuesta = await clientAxios.get('/api/orders', config)
                dispatch({
                    type: GET_ORDERS,
                    payload: respuesta.data.orders
                })
            } catch (error) {
                console.log(error);
                
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                  })
            }
        }

        const getOrdersFinished =async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.get('/api/orders/finished', config)
                dispatch({
                    type: GET_ORDERS,
                    payload: respuesta.data.orders
                })
            } catch (error) {
                console.log(error);
                
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                  })
            }
        }


        const getOrder =async (id) => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            console.log(id);

            try {
                const respuesta = await clientAxios.get(`/api/orders/order/${id}`, config)
                console.log(respuesta);

                dispatch({
                    type: GET_ORDER,
                    payload: respuesta.data
                })
            } catch (error) {

                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                  })
            }
        }

        const updateRole =async (user) => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post(`/api/users/updateRole/${user.id}`, user ,config)
                console.log(respuesta);
                Swal.fire(
                    'Privilegio actualizado',
                    'Se ha actualizado correctamente!',
                    'success'
                  )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: error.response,
                  })
            }
        }

        const updateStatus =async (order) => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post(`/api/orders/status/${order.id}`, order ,config)
                Swal.fire(
                    respuesta.data.status,
                    'Se ha actualizado correctamente!',
                    'success'
                  )
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: error.response,
                  })
            }
        }

    return (
        <clientContext.Provider
            value= {{
                clients: state.clients,
                users: state.users,
                orders: state.orders,
                order: state.order,
                getClients,
                getUsers,
                updateRole,
                getOrders,
                getOrder,
                updateStatus,
                getOrdersFinished
            }}
        >
            {children}
        </clientContext.Provider>
    )
} 

export default clientState