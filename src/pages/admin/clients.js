import Layout from "componentsAdmin/layout/Layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import clientContext from "../../../context/clients/clientContext";
import Client from "componentsAdmin/Clients/Client";
import ReactPaginate from "react-paginate";

export default function Dashboard() {

  const ClientContext = useContext(clientContext)
  const {getClients, clients} = ClientContext

    useEffect(() => {
      getClients()
    }, [])

          // Estado para el número de página actual
  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 10;

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;

    // Función para manejar el cambio de página
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };
    

    return (
      <Layout>
        <div className="flex justify-between pb-5">
            <h1 className="font-bold text-xl">Clientes</h1>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Telefono
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {clients.slice(startIndex, endIndex).map(client=> (
                  <Client key={client.id} client={client} />
                ))

                }
            </tbody>
        </table>
        <ReactPaginate
        pageCount={Math.ceil(clients.length / productsPerPage)}
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
  