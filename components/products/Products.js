import productContext from "context/product/productContext"
import { useContext, useEffect, useState } from "react"
import Product from "./product"
import ReactPaginate from "react-paginate"

export default function Products({products}) {

    const [currentPage, setCurrentPage] = useState(0);

    // Cantidad de productos por página
    const productsPerPage = 12;
  
    // Calcular el índice de inicio y fin de los productos para la página actual
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
  
      // Función para manejar el cambio de página
      const handlePageChange = ({ selected }) => {
          setCurrentPage(selected);
        };
      
  

    return (
        <div className="col-span-3">


            <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                {products.slice(startIndex, endIndex).map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
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
