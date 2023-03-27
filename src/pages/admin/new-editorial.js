import Error from 'components/Error'
import Layout from 'componentsAdmin/Layout/Layout'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import productContext from "../../../context/product/productContext";
import { useRouter } from "next/router";

export default function NewEditorial() {

    const router = useRouter()

    const ProductContext = useContext(productContext)
    const {upEditorial} = ProductContext
  
    const formik = useFormik({
      initialValues: {
          name: ''
      },
      validationSchema: Yup.object({
          name: Yup.string()
            .required('El nombre es requerido'),
      }),
      onSubmit: valores => {
        upEditorial(valores)
          router.push('/admin/editorials')
      }
  });
  
  
  return (
    <Layout>
        <h1 className="font-bold text-xl">Nueva editorial</h1>
          <form className='py-8' onSubmit={formik.handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-xl font-medium text-gray-900">Nombre de la editorial</label>
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
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar producto</button>
          </form>
    </Layout>
  )
}
