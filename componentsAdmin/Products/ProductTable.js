import productContext from 'context/product/productContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'

export default function ProductTable({product}) {

    const ProductContext = useContext(productContext)
  const {getProduct, deleteProduct } = ProductContext

  const onClickProduct = () => {
    getProduct(product.id)
  }

  const onClickDelete = () => {
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
            deleteProduct(product.id)
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
    <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
        <td className="px-6 py-4 font-semibold text-gray-900">
            {product.name}
        </td>
        <td className="px-6 py-4">
            <span class={`${product.stock > 2 ? "bg-green-100 text-green-800" :" bg-red-200 text-red-800"} text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}>{product.stock}</span>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900">
            ${product.price}
        </td>
        <td className="px-6 py-4">
                <Link 
                    href={`/admin/product/${product.id}`}
                    onClick={onClickProduct}
                    className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Editar
                </Link>
        </td>
    </tr>
  )
}

