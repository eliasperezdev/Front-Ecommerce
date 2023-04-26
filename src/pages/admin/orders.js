import OrderBadge from "componentsAdmin/Orders/BadgeOrders";
import Layout from "componentsAdmin/layout/Layout";
import clientContext from "context/clients/clientContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Dashboard() {

  const ClientContext = useContext(clientContext)
  const {getOrders, orders} = ClientContext

    useEffect(() => {
        getOrders()
    }, [])
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
      <Layout>
        <div className="flex justify-between pb-5">
            <h1 className="font-bold text-xl">Ordenes</h1>
            {/*}
          <div className="flex">
            <select id="small" className="block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  ml-10">
              <option selected>Filtrar</option>
              <option value="US">Hoy</option>
              <option value="CA">Activos</option>
              <option value="FR">Finalizados</option>
              <option value="DE">Cancelados</option>
            </select>
    </div> */}
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Comprador
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-3">
                        # Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            
                {orders.length === 0 ? "No hay ordenes" : <tbody>
                    {orders.slice(startIndex, endIndex).map(order=> (
                        <tr key={order.id} className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {order.User.name + " " + order.User.lastName}
                            </th>
                            <td className="px-6 py-4">
                                {order.dateTime}
                            </td>
                            <td className="px-6 py-4">
                                {order.id}
                            </td>
                            <td className="px-6 py-4">
                                <OrderBadge status={order.status} />
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/admin/orders/${order.id}`} className="font-medium text-blue-600  hover:underline">Ver</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                }
        </table>
        <ReactPaginate
        pageCount={Math.ceil(orders.length / productsPerPage)}
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
            
      </Layout>
    )
  }
  