import Layout from "components/layout/Layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";
import Error from "components/Error";

export default function Home() {

    const AuthContext = useContext(authContext)
    const { registrarUsuarios, mensaje, autenticado } = AuthContext

    const router = useRouter()
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: "",
            lastName: "",
            phone: "",
            dni: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('El email no es válido')
                        .required('El Email es Obligatorio'),
            password: Yup.string()
                        .min(8, 'La contraseña debe tener al menos 8 caracteres')
                        .matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula')
                        .required('La contraseña es requerida'),
            name: Yup.string()
                    .matches(/^[a-zA-Z]+$/, 'El nombre solo puede contener letras')
                    .required('El nombre es requerido'),
            lastName: Yup.string()
                    .matches(/^[a-zA-Z]+$/, 'El apellido solo puede contener letras')
                    .required('El apellido es requerido'),
            phone: Yup.string()
                    .required('El teléfono es requerido'),
            dni: Yup.string()
                    .required('El DNI es requerido')
                    .max(8, 'El DNI no puede tener más de 8 caracteres')
        }),
        onSubmit: valores => {
            registrarUsuarios(valores)

        }
    });

    return (
        <Layout>
                <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Crear cuenta</h2>
            <p className="text-gray-600 mb-6 text-sm">
                Cree una nueva cuenta
            </p>
            <form onSubmit={formik.handleSubmit} >
                <div className="space-y-2">
                    <div>
                        <label for="name" className="text-gray-600 mb-2 block">Nombre</label>
                        <input type="text" name="name" id="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu nombre"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            />
                            { formik.touched.name && formik.errors.name ? (
                                <Error message={formik.errors.name} />
                            ) : null }
                    </div>
                    <div>
                        <label for="lastName" className="text-gray-600 mb-2 block">Apellido</label>
                        <input type="text" name="lastName" id="lastName"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu apellido"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            />
                            { formik.touched.lastName && formik.errors.lastName ? (
                                <Error message={formik.errors.lastName} />
                            ) : null }
                    </div>
                    <div>
                        <label for="phone" className="text-gray-600 mb-2 block">Teléfono</label>
                        <input type="text" name="phone" id="phone"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu teléfono"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            />
                            { formik.touched.phone && formik.errors.phone ? (
                                <Error message={formik.errors.phone} />
                            ) : null }
                    </div>
                    <div>
                        <label for="dni" className="text-gray-600 mb-2 block">DNI</label>
                        <input type="text" name="dni" id="dni"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu DNI"
                            value={formik.values.dni}
                            maxLength={8}
                            onChange={formik.handleChange}
                            />
                            { formik.touched.dni && formik.errors.dni ? (
                                <Error message={formik.errors.dni} />
                            ) : null }
                    </div>
                    <div>
                        <label for="email" className="text-gray-600 mb-2 block">Email</label>
                        <input type="email" name="email" id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            />
                            { formik.touched.email && formik.errors.email ? (
                                <Error message={formik.errors.email} />
                            ) : null }
                    </div>
                    <div>
                        <label for="password" className="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="La contraseña debe tener al menos una letra mayúscula"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />

                        { formik.touched.password && formik.errors.password ? (
                                <Error message={formik.errors.password} />
                            ) : null }
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Crear cuenta</button>
                </div>
            </form>

            <p className="mt-4 text-center text-gray-600">¿Ya tiene cuenta? <a href="login.html"
                    className="text-primary">Inicie sesión</a></p>
        </div>
    </div>
        </Layout>
    )
  }
  