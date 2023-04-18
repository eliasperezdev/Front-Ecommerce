import Link from 'next/link'
import React, { useContext, useState } from 'react'
import ProductTable from './ProductTable'
import ReactPaginate from 'react-paginate';

export default function TableProducts({products}) {

      // Estado para el número de página actual
  const [currentPage, setCurrentPage] = useState(0);

  // Cantidad de productos por página
  const productsPerPage = 10;

  // Calcular el índice de inicio y fin de los productos para la página actual
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;

    // Función para manejar el cambio de página
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };
    

  return (
 
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Producto
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Precio
                </th>
                <th scope="col" className="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            {products.slice(startIndex, endIndex).map(product=> (
                <ProductTable key={product.id} product={product}/>
            ))}
        </tbody>
    </table>
      {/* Renderizar el componente de paginación */}
      <ReactPaginate
        pageCount={Math.ceil(products.length / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="flex justify-center mt-4"
        pageClassName="bg-red-700 px-2 border-2 border-yellow-600"
        activeClassName="bg-blue-800 text-white"
        previousClassName="bg-yellow-700 border-2 border-red-800"
        nextClassName="bg-yellow-700 border-2 border-red-800"
      />
</div>

  )
}
