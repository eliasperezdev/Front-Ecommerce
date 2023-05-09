import Layout from 'componentsAdmin/layout/Layout'
import clientAxios from 'config/axios'
import authContext from 'context/auth/authContext'
import clientContext from 'context/clients/clientContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

export async function getServerSideProps({params}) {
    const res = await clientAxios.get(`/api/users/user/${params.id}`)
    return {
      props: {
        client: res.data.user,
        order: res.data.order
      }, // will be passed to the page component as props
    }
  }

  


export default function Client({client,order}) {

  return (
    <Layout>
     <div className="bg-gray-100 rounded-lg p-4">
        <div className='flex justify-between'>
            <h1 className="text-4xl font-bold mb-4">{client.lastName + " " + client.name}</h1>

        </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <p className="text-sm font-medium text-gray-600 mb-2">Email:</p>
          <p className="text-lg text-gray-800">{client.email}</p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm font-medium text-gray-600 mb-2">Teléfono:</p>
          <p className="text-lg text-gray-800">{client.phone}</p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm font-medium text-gray-600 mb-2">Teléfono:</p>
          <p className="text-lg text-gray-800">teléfono</p>
        </div>
      </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        N° de orden
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
    <tbody>
        {order?.map(or=> (
            <tr key={or.id} className="bg-white border-b hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {or.id}
            </th>
            <td className="px-6 py-4">
                {or.dateTime}
            </td>
            <td className="px-6 py-4">
                {or.status}
            </td>
            <td className="px-6 py-4">
                <Link href={`/admin/orders/${or.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver orden</Link>
            </td>
        </tr>
        ))

        }
    </tbody>
    </table>
    </Layout>
  )
}
