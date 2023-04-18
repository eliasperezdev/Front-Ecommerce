import Link from 'next/link'
import React from 'react'

export default function Client({client}) {
  return (
    <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {client.name + " " + client.lastName}
            {client.RoleId === 1 || client.RoleId === 2 ? <span class=" mx-4 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Vendedor</span>
            : null}
        </th>
        <td className="px-6 py-4">
            {client.email}
        </td>
        <td className="px-6 py-4">
        {client.phone}
        </td>
        <td className="px-6 py-4">
            <Link href={`/admin/client/${client.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver ordenes</Link>
        </td>
    </tr>
  )
}
