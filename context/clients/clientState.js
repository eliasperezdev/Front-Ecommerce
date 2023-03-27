import { useReducer } from "react";
import clientContext from "./clientContext";
import clientReducer from "./clientReducer";

import { 
    GET_CLIENTS,
    GET_USERS,
    UPDATE_ROLE
} from '../../types';
import clientAxios from "../../config/axios";

const clientState = ({children}) => {

    const initialState={
        clients: [],
        users: [],
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
                console.log(error.response);
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
                console.log(error.response);
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
                const respuesta = await clientAxios.post(`/api/users/role/${user.id}`, config)
                
                dispatch({
                    type: UPDATE_ROLE,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
            }
        }

    return (
        <clientContext.Provider
            value= {{
                clients: state.clients,
                users: state.users,
                getClients,
                getUsers,
                updateRole
            }}
        >
            {children}
        </clientContext.Provider>
    )
} 

export default clientState