import Layout from "components/layout/Layout";
import Error from "components/Error";
import userContext from "context/user/userContext";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext,useEffect } from "react"

export default function FormAddress() {
    const UserContext = useContext(userContext)
    const { addAddress } = UserContext

  const formik = useFormik({
    initialValues: {
        name: "",
        location: "",
        province: "",
        postalCode: "",
        street: "",
        altitude: 0,
        department: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
            .required('El nombre es requerido'),
        location: Yup.string()
            .required('La ciudad es requerido'),
        province: Yup.string()
            .required('La provincia es requerido'),
        postalCode: Yup.string()
            .required('El codigo postal es requerido'),
        street: Yup.string()
            .required('La calle es requerido'),
        altitude: Yup.number()
            .required(1,'El precio es requerido'),
    }),
    onSubmit: valores => {
        addAddress(valores)
    }
});

    return (
        <div className="container">
            <h1 className="font-bold text-xl">Nuevo dirección</h1>
            <form className='py-8' onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-xl font-medium text-gray-900">Nombre de la dirección</label>
                <input 
                    type="text" 
                    id="name"  
                    name="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                { formik.touched.name && formik.errors.name ? (
                    <Error message={formik.errors.name} />
                ) : null }
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-xl font-medium text-gray-900">Ciudad</label>
                <input 
                    type="text" 
                    id="location" 
                    namw="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    value={formik.values.location}
                    onChange={formik.handleChange}
                />
                { formik.touched.location && formik.errors.location ? (
                    <Error message={formik.errors.location} />
                ) : null }
            </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <label for="ISBN" className="block mb-2 text-xl font-medium text-gray-900">Provincia</label>
                    <input 
                        type="text" 
                        id="province" 
                        namw="province"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        
                        value={formik.values.province}
                        onChange={formik.handleChange}
                        />
                    { formik.touched.province && formik.errors.province ? (
                    <Error message={formik.errors.province} />
                    ) : null }
                </div>
                <div className="relative z-0 w-full mb-6 group">
                        <label for="price" className="block mb-2 text-xl font-medium text-gray-900">Código postal</label>
                        <input 
                            type="number" 
                            id="postalCode" 
                            name="postalCode" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            value={formik.values.postalCode}
                            onChange={formik.handleChange}
                            />
                        { formik.touched.postalCode && formik.errors.postalCode ? (
                        <Error message={formik.errors.postalCode} />
                    ) : null }
                    </div>
                </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Calle</label>
                        <input 
                            type="text" 
                            id="street" 
                            name="street" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={formik.values.street}
                            onChange={formik.handleChange}
                        />
                        { formik.touched.street && formik.errors.street ? (
                        <Error message={formik.errors.street} />
                    ) : null }
                    </div>
                </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                        <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Altura</label>
                        <input 
                            type="number" 
                            id="altitude" 
                            name="altitude" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={formik.values.altitude}
                            onChange={formik.handleChange}
                        />
                        { formik.touched.altitude && formik.errors.altitude ? (
                        <Error message={formik.errors.altitude} />
                    ) : null }
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Departamento</label>
                        <input 
                            type="number" 
                            id="department" 
                            name="department" 
                            placeholder="Solo si aplica" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                        />
                        { formik.touched.department && formik.errors.department ? (
                        <Error message={formik.errors.department} />
                    ) : null }
                    </div>
                </div>
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar dirección</button>
            </form>

        </div>
    )
  }
