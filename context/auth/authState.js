import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    OCULTAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION,
    GET_ORDERS,
    GET_ADDRESS
} from '../../types';
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const AuthState = ({children}) => {

    const initialState={
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: null,
        orders: null
    }

        // Definir el reducer
        const [ state, dispatch ] = useReducer(authReducer, initialState);

        const router = useRouter()

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
                const respuesta = await clientAxios.get(`/api/orders/${state.usuario.id}`, config)
                dispatch({
                    type: GET_ORDERS,
                    payload: respuesta.data.orders
                })
            } catch (error) {
                console.log(error.response);
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
                const respuesta = await clientAxios.get(`/api/address/${state.usuario.id}`, config)
                dispatch({
                    type: GET_ADDRESS,
                    payload: orders
                })
                
            } catch (error) {
                console.log(error.response);
            }
        }

        //Registrar usuarios
        const registrarUsuarios =async datos => {
            try {
                const respuesta = await clientAxios.post('/api/users', datos)
                dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: respuesta.data
                })
                router.push("/")

            } catch (error) {
                toast.error(error.response.data);
            }
        }

        //Autenticar usuarios
        const iniciarSesion = async datos => {
            try {
                console.log(datos);
                const respuesta = await clientAxios.post('/api/login', datos)
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: respuesta.data.message.token
                })
                router.push("/")
            } catch (error) {
                toast.error(error.response.data);
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response
                })
            }
        }

        //Retornar usuario autenticado
        const usuarioAutenticado = async () => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const  respuesta = await clientAxios.get('/api/login', config)
                if(respuesta.data) {
                    dispatch({
                        type: USUARIO_AUTENTICADO,
                        payload: respuesta.data
                    })
                }
            } catch (error) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response
                })
            }
        }


        //Cerrar sesion
        const logout=()=> {
            dispatch({
                type: CERRAR_SESION
            })
        }


    return (
        <authContext.Provider
            value= {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                orders: state.orders,
                usuarioAutenticado,
                registrarUsuarios,
                iniciarSesion,
                logout,
                getOrders
            }}
        >
            {children}
        </authContext.Provider>
    )
} 

export default AuthState