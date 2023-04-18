import Error from "components/Error";
import Layout from "componentsAdmin/layout/Layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext, useEffect } from "react";
import productContext from "../../../../context/product/productContext";
import { useRouter } from "next/router";

export default function Dashboard() {

  const router = useRouter()
  const { id } = router.query

  const ProductContext = useContext(productContext)
  const {upProduct, getCategories, product, getEditorials, categories, editorials, editProduct} = ProductContext

  useEffect(() => {
    getCategories()
    getEditorials()
  }, [])


  const formik = useFormik({
    initialValues: {
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        condition: product.condition,
        descuento: product.descuento,
        recommend: product.recommend,
        CategoryId: product.CategoryId,
        isbn: product.isbn,
        EditorialId: product.EditorialId
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .required('El nombre es requerido'),
        price: Yup.number()
          .min(1,'El precio es requerido'),
        stock: Yup.number().integer()
          .required('El stock es requerido'),
        description: Yup.string()
          .required('La descripción es requerido'),
        condition: Yup.boolean("Seleccione un valor")
          .required('La condición es requerido'),
        recommend: Yup.boolean("Seleccione un valor")
          .required('La recomendación es requerido'),
        CategoryId: Yup.number()
        .required('La categoria es requerido'),
    }),
    onSubmit: valores => {
        editProduct(valores)
        router.push('/admin/products')
    }
});

    return (
    <Layout>
      {product? 
      <>
        <h1 className="font-bold text-xl">Nuevo producto</h1>
        <form className='py-8' onSubmit={formik.handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <label className="block mb-2 text-xl font-medium text-gray-900">Nombre del producto</label>
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
                <label className="block mb-2 text-xl font-medium text-gray-900">Seleccione la categoria</label>
                <select 
                  id="CategoryId" 
                  name="CategoryId" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  {...formik.getFieldProps('CategoryId')}
                >
                    <option >Seleccione</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                { formik.touched.CategoryId && formik.errors.CategoryId ? (
                  <Error message={formik.errors.CategoryId} />
                ) : null }
            </div>
        </div>
          <div className="relative z-0 w-full mb-6 group">
              <label className="block mb-2 text-xl font-medium text-gray-900">Descripción del producto</label>
              <textarea 
                rows={4} 
                id="description"  
                name="description" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                value={formik.values.description}
                onChange={formik.handleChange}
                />
              { formik.touched.description && formik.errors.description ? (
                <Error message={formik.errors.description} />
              ) : null }
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-xl font-medium text-gray-900">Seleccione la editorial</label>
                <select 
                  id="EditorialId" 
                  name="EditorialId" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  {...formik.getFieldProps('EditorialId')}
                >
                    <option >Seleccione</option>
                    {editorials.map(editorial => (
                      <option key={editorial.id} value={editorial.id}>{editorial.name}</option>
                    ))}
                </select>
                { formik.touched.EditorialId && formik.errors.EditorialId ? (
                  <Error message={formik.errors.EditorialId} />
                ) : null }
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <label for="ISBN" className="block mb-2 text-xl font-medium text-gray-900">ISBN</label>
                  <input 
                    type="text" 
                    id="isbn" 
                    namw="isbn"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Solo si aplica" 
                    value={formik.values.isbn}
                    onChange={formik.handleChange}
                    />
                  { formik.touched.isbn && formik.errors.isbn ? (
                  <Error message={formik.errors.isbn} />
                ) : null }
              </div>
              <div className="relative z-0 w-full mb-6 group">
                    <label for="price" className="block mb-2 text-xl font-medium text-gray-900">Stock</label>
                    <input 
                        type="number" 
                        id="stock" 
                        name="stock" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                        />
                    { formik.touched.stock && formik.errors.stock ? (
                    <Error message={formik.errors.stock} />
                  ) : null }
                </div>
            </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <label for="price" className="block mb-2 text-xl font-medium text-gray-900">Precio</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        />
                    { formik.touched.price && formik.errors.price ? (
                    <Error message={formik.errors.price} />
                  ) : null }
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Descuento</label>
                    <input 
                        type="number" 
                        id="descuento" 
                        name="descuento" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.descuento}
                        onChange={formik.handleChange}
                       />
                    { formik.touched.descuento && formik.errors.descuento ? (
                    <Error message={formik.errors.descuento} />
                  ) : null }
                </div>
              </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-6 group">
                    <label for="price" className="block mb-2 text-xl font-medium text-gray-900">Condición</label>
                    <select 
                      id="condition" 
                      name="condition" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      {...formik.getFieldProps('condition')}
                    >
                        <option >Seleccione</option>
                        <option value={1}>Activo</option>
                        <option value={0}>Inactivo</option>
                    </select>
                    { formik.touched.condition && formik.errors.condition ? (
                    <Error message={formik.errors.condition} />
                  ) : null }
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label for="recommend" className="block mb-2 text-xl font-medium text-gray-900">Recomendado</label>
                    <select 
                      id="recommend" 
                      name="recommend" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      {...formik.getFieldProps('recommend')}
                    >
                        <option >Seleccione</option>
                        <option value={1}>Recomendado</option>
                        <option value={0}>No recomendado</option>
                    </select>
                    { formik.touched.recommend && formik.errors.recommend ? (
                    <Error message={formik.errors.recommend} />
                  ) : null }
                </div>
            </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label for="category" className="block mb-2 text-xl font-medium text-gray-900">Subir imagenes</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                </div>
              </div>
          
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">actualizar producto</button>
        </form>
        </>: "No existe el producto"}

      </Layout>
    )
  }
  