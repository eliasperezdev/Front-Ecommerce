import Layout from "componentsAdmin/layout/Layout";
import TableProducts from "componentsAdmin/Products/TableProducts";
import Link from "next/link";
import { useContext, useEffect } from "react";
import productContext from "../../../context/product/productContext";
import Swal from 'sweetalert2'

export default function Category() {

  const ProductContext = useContext(productContext)
  const {categories, getCategories, deleteCategory } = ProductContext

    useEffect(() => {
      getCategories()
    }, [])


    const onClickDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas seguro?',
            text: "Esta acción es irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              deleteCategory(id)
              swalWithBootstrapButtons.fire(
                'Eliminada',
                'LA editorial fue eliminada',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Se ha cancelado el borrado',
                'error'
              )
            }
          })
    } 

    return (
      <Layout>
        <div className="flex justify-between">
            <h1 className="font-bold text-xl">Categorias</h1>
            <Link href={"/admin/new-category"}>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar categoria</button>
            </Link>
        </div>
            
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {categories?.map(category=> (
                    <tr key={category.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                        {category.name}
                    </td>
                    <td className="w-32 p-4">
                        {category.condition? <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Activo</span>
                        : <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Inactivo</span>
                      }
                    </td>
                    <td className="">
                        
                      {/*<button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Editar</button> */}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
      </Layout>
    )
  }
  