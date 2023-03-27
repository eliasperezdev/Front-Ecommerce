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
    CERRAR_SESION
} from '../../types';
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthState = ({children}) => {

    const initialState={
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: null
    }

        // Definir el reducer
        const [ state, dispatch ] = useReducer(authReducer, initialState);

        /**
         * 
         * @param {*} nombre 
         */


        //Registrar usuarios
        const registrarUsuarios =async datos => {
            try {
                console.log(datos);
                const respuesta = await clientAxios.post('/api/users', datos)
                dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: respuesta.data
                })


            } catch (error) {
                console.log(error.response.data.msg);
                dispatch({
                    type: REGISTRO_ERROR,
                    payload: error.response.data
                })
            }
            //Limpiar alerta
            setTimeout(() => {
                dispatch({
                    type: OCULTAR_ALERTA
                })  
            }, 3000);
        }

        //Autenticar usuarios
        const iniciarSesion = async datos => {
            try {
                console.log(datos);
                const respuesta = await clientAxios.post('/api/login', datos)
                console.log(respuesta.data.token);
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: respuesta.data.message.token
                })
            } catch (error) {
                console.log(error.response);
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response
                })
            }
            //Limpiar alerta
            setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })  
        }, 3000);
        }

        //Retornar usuario autenticado
        const usuarioAutenticado = async () => {
            const token = localStorage.getItem('token')
            if(token) {
                tokenAuth(token)
            }
            try {
                const  respuesta = await clientAxios.get('/api/login')
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
        const cerrarSesion=()=> {
            
        }


    return (
        <authContext.Provider
            value= {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                usuarioAutenticado,
                registrarUsuarios,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {children}
        </authContext.Provider>
    )
} 

export default AuthState