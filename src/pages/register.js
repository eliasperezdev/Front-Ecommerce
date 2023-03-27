import Layout from "components/layout/Layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";

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
                        .required('El password no puede ir vacio'),
            name: Yup.string()
                    .required('El nombre es requerido'),
            lastName: Yup.string()
                    .required('El apellido es requerido'),
            phone: Yup.string()
                    .required('El telefono es requerido'),
            dni: Yup.string()
                    .required('El DNI es requerido')
        }),
        onSubmit: valores => {
            registrarUsuarios(valores)
            router.push("/")
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
                    </div>
                    <div>
                        <label for="lastName" className="text-gray-600 mb-2 block">Apellido</label>
                        <input type="text" name="lastName" id="lastName"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu apellido"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            />
                    </div>
                    <div>
                        <label for="phone" className="text-gray-600 mb-2 block">Telefono</label>
                        <input type="text" name="phone" id="phone"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu telefono"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            />
                    </div>
                    <div>
                        <label for="dni" className="text-gray-600 mb-2 block">DNI</label>
                        <input type="text" name="dni" id="dni"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu DNI"
                            value={formik.values.dni}
                            onChange={formik.handleChange}
                            />
                    </div>
                    <div>
                        <label for="email" className="text-gray-600 mb-2 block">Email</label>
                        <input type="email" name="email" id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Tu email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            />
                    </div>
                    <div>
                        <label for="password" className="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
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
  