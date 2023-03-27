import Error from "components/Error";
import Layout from "components/layout/Layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import authContext from "../../context/auth/authContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Link from "next/link";

export default function Home() {

    const AuthContext = useContext(authContext)
    const { iniciarSesion, mensaje, autenticado } = AuthContext

    const router = useRouter()

    useEffect(() => {
        if(autenticado) {
            router.push('/')
        }
    }, [autenticado, router])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('El email no es válido')
                        .required('El Email es Obligatorio'),
            password: Yup.string()
                        .required('El password no puede ir vacio')
        }),
        onSubmit: valores => {
            iniciarSesion(valores)
            router.push("/")
        }
    });
    return (
      <>
        <Layout>
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Bienvenido de nuevo
                </p>
                <form onSubmit={formik.handleSubmit}>
                    <div className="space-y-2">
                        <div>
                            <label for="email" className="text-gray-600 mb-2 block">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="tu.correo@domain.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                              />
                            { formik.touched.email && formik.errors.email ? (
                            <Error message={formik.errors.email} />
                          ) : null }
                        </div>
                        <div>
                            <label for="password" className="text-gray-600 mb-2 block">Contraseña</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                />
                            { formik.touched.password && formik.errors.password ? (
                            <Error message={formik.errors.password} />
                          ) : null }
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <a href="#" className="text-primary">Recuperar contraseña</a>
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                    </div>
                </form>

                <p className="mt-4 text-center text-gray-600">¿No tienes cuenta? <Link href="/register"
                        className="text-primary">Registrese ahora</Link></p>
            </div>
        </div>
        </Layout>
      </>
    )
  }
  