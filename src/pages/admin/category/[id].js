import Error from "components/Error";
import Layout from "componentsAdmin/layout/Layout";
import { useFormik, setFieldValue } from "formik";
import * as Yup from 'yup';
import { useContext, useEffect, useState } from "react";
import productContext from "context/product/productContext";
import clientAxios from "config/axios";

export default function NewCategory({category}) {

  const ProductContext = useContext(productContext)
  const {editCategory} = ProductContext

  const [selectedFile, setSelectedFile] = useState('')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
        id: category.id,
        name: category.name,
        description: category.description,
        condition: category.condition,
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .required('El nombre es requerido'),
        description: Yup.string()
          .required('La descripción es requerido'),
        condition: Yup.boolean("Seleccione un valor")
        .required('La condición es requerido'),
    }),
    onSubmit: valores => {
        valores.file = selectedFile
        editCategory(valores);
    }
});


    return (
      <Layout>
        <h1 className="font-bold text-xl" >Nueva categoria</h1>
        <form className='py-8' onSubmit={formik.handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <label for="name" className="block mb-2 text-xl font-medium text-gray-900">Nombre de la categoria</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="nombre de la categoria" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                { formik.touched.name && formik.errors.name ? (
                  <Error message={formik.errors.name} />
                ) : null }
            </div>
            <div className="relative z-0 w-full mb-6 group">
                    <label for="condition" className="block mb-2 text-xl font-medium text-gray-900">Condición</label>
                    <select 
                      id="condition" 
                      name="condition" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      {...formik.getFieldProps('condition')}
                    >
                        <option>Seleccione</option>
                        <option value={1}>Activo</option>
                        <option value={0}>Inactivo</option>
                    </select>
                    { formik.touched.condition && formik.errors.condition ? (
                    <Error message={formik.errors.condition} />
                  ) : null }
                </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <label for="category" className="block mb-2 text-xl font-medium text-gray-900">Descripción de la categoria</label>
              <textarea 
                id="description" 
                name="description" 
                rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Escriba la descripción de la categoria"
                value={formik.values.description}
                onChange={formik.handleChange}
                ></textarea>
              { formik.touched.description && formik.errors.description ? (
                <Error message={formik.errors.description} />
              ) : null }
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <label for="category" className="block mb-2 text-xl font-medium text-gray-900">Subir imagenes</label>
              <input id="file" name="file" type="file" onChange={ (e) => setSelectedFile(e.target.files[0])} />
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      </Layout>
    )
  }
  
  export async function getServerSideProps({params}) {
    const res = await clientAxios.get(`/api/categories/${params.id}`)
    return {
      props: {
        category: res.data
      }, // will be passed to the page component as props
    }
  }
  