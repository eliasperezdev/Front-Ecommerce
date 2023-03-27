import Layout from "componentsAdmin/layout/Layout";
import Link from "next/link";
import { useContext, useEffect } from "react";
import clientContext from "../../../context/clients/clientContext";

export default function Dashboard() {

  const ClientContext = useContext(clientContext)
  const {getClients, clients} = ClientContext

    useEffect(() => {
      getClients()
    }, [])

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
                {clients?.map(client=> (
                  <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {client.name + " " + client.lastName}
                        {client.RoleId === 1 ? <span class=" mx-4 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Vendedor</span>
                        : null}
                    </th>
                    <td className="px-6 py-4">
                        {client.email}
                    </td>
                    <td className="px-6 py-4">
                    {client.phone}
                    </td>
                    <td className="px-6 py-4">
                        <Link href={"/admin/orders/2"} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver ordenes</Link>
                    </td>
                </tr>
                ))

                }
            </tbody>
        </table>
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                </li>
                <li>
                    <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                </li>
                <li>
                    <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                </li>
                <li>
                    <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
      </Layout>
    )
  }
  