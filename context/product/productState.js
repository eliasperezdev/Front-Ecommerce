import { useReducer } from "react";
import productContext from "./productContext";
import productReducer from "./productReducer";

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
    GET_CATEGORY,
    GET_PRODUCT,
    EDIT_PRODUCT,
    GET_RECOMMENDS
} from '../../types';
import clientAxios from "../../config/axios";

const productState = ({children}) => {

    const initialState={
        products: [],
        product: {},
        recommends: [],
        
        //Category
        categories: [],
        category:{},
        editorials: [],
        editorial: {},
    }

        // Definir el reducer
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ state, dispatch ] = useReducer(productReducer, initialState);

        const getProduct = async (id) => {
            try {
                const respuesta = await clientAxios.get(`/api/products/${id}`)
                dispatch({
                    type: GET_PRODUCT,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const getCategory = async () => {
            try {
                const respuesta = await clientAxios.get(`/api/categories/${id}`)
                dispatch({
                    type: GET_CATEGORY,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const getEditorial = async () => {
            try {
                const respuesta = await clientAxios.get(`/api/editorials/${id}`)
                dispatch({
                    type: GET_ed,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const getCategories = async () => {
            try {
                const respuesta = await clientAxios.get('/api/categories')
                dispatch({
                    type: GET_CATEGORIES,
                    payload: respuesta.data.categories
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const getEditorials = async () => {
            try {
                const respuesta = await clientAxios.get('/api/editorials')
                dispatch({
                    type: GET_EDITORIALS,
                    payload: respuesta.data.editorials
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const upEditorial =async editorial => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.post('/api/editorials', editorial, config)
                dispatch({
                    type: UP_EDITORIAL,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const getProducts = async () => {
            try {
                const respuesta = await clientAxios.get('/api/products')
                dispatch({
                    type: GET_PRODUCTS,
                    payload: respuesta.data.products
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }

        const getRecommends = async () => {
            try {
                const respuesta = await clientAxios.get('/api/products/recommend')
                dispatch({
                    type: GET_RECOMMENDS,
                    payload: respuesta.data.products
                })
            } catch (error) {
                console.log(error.response);
                
            }
        }


        const upProduct =async product => {

            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                console.log(product);
                const respuesta = await clientAxios.post('/api/products', product, config)
                
                dispatch({
                    type: UP_PRODUCT,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const upCategory =async category => {

            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                console.log(category);
                const respuesta = await clientAxios.post('/api/categories', category, config)
                
                dispatch({
                    type: UP_CATEGORY,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const editProduct =async product => {
            console.log(product);
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const respuesta = await clientAxios.put(`/api/products/${product.id}`, product, config)
                dispatch({
                    type: EDIT_PRODUCT,
                    payload: respuesta.data
                })
            } catch (error) {
                console.log(error.response);
            }
        }

        const deleteEditorial =async id => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                await clientAxios.delete(`/api/editorials/${id}`, config)
                
                dispatch({
                    type: DELETE_EDITORIAL,
                    payload: id
                })
                console.log(respuesta);
            } catch (error) {
                console.log(error.response);
            }
        }

        const deleteCategory =async id => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                await clientAxios.delete(`/api/categories/${id}`, config)
                
                dispatch({
                    type: DELETE_CATEGORY,
                    payload: id
                })
                console.log(respuesta);
            } catch (error) {
                console.log(error.response);
            }
        }

        const deleteProduct =async id => {
            const token = localStorage.getItem('token')
            if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                await clientAxios.delete(`/api/products/${id}`, config)
                
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id
                })
                console.log(respuesta);
            } catch (error) {
                console.log(error.response);
            }
        }

    return (
        <productContext.Provider
            value= {{
                categories: state.categories,
                products: state.products,
                recommends: state.recommends,
                editorials: state.editorials,
                product: state.product,
                category: state.category,
                editorial: state.editorial,
                getCategories,
                getEditorials,
                upEditorial,
                getCategory,
                getEditorial,
                getProduct,
                deleteEditorial,
                getProducts,
                upProduct,
                upCategory,
                deleteCategory,
                deleteEditorial,
                editProduct,
                deleteProduct,
                getRecommends
            }}
        >
            {children}
        </productContext.Provider>
    )
} 

export default productState