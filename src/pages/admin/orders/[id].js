import Layout from "componentsAdmin/layout/Layout";
import clientContext from 'context/clients/clientContext';
import { useContext, useEffect, useState } from 'react';

export async function getServerSideProps({params}) {
  const res = await clientAxios.get(`/api/orders/order/${params.id}`)
  return {
    props: {
      order: res.data
    }, // will be passed to the page component as props
  }
}

import Image from 'next/image';
import clientAxios from 'config/axios';
export default function Order({order}) {

    const ClientContext = useContext(clientContext)
    const {  updateStatus } = ClientContext

  const [selectedValue, setSelectedValue] = useState(order.status);

    
  const handleSelectChange =async event => {
        
      setSelectedValue(event.target.value);

      const ord = order
      ord.status = event.target.value

      updateStatus(ord)

    };

  

    console.log(order);
    return (
      <Layout>
        {order ? 
        <>
        <div className='lg:flex lg:justify-between mb-5'>
          <h1 className="text-center text-2xl font-bold">Orden N°{order.id}</h1>
          <div className='flex justify-between gap-4'>
            <div className=''>
              < label for="status" className="block text-sm font-medium text-gray-900">Estado</label>
              <select id="status" value={selectedValue} onChange={handleSelectChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value={"Aprobado"}>Aprobado</option>
                <option value={"Empaquetado"}>Empaquetado</option>
                <option value={"Enviado"}>Enviado</option>
                <option value={"Entregado"}>Entregado</option>
                <option value={"Cancelado"}>Cancelado</option>
              </select>
            </div>
            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Emitir factura</button>
          </div>

        </div>
        <div className="grid grid-flow-row-dense lg:grid-cols-2">
          <div className="container">
                <div class="container mx-auto">
                  <p className="text-2xl my-5 "><span className="font-semibold text-gray-900">Datos del cliente</span></p>
                  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md px-6 py-4">
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Nombre: <span class="text-gray-600">{order.User.lastName} {order.User.name}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Telefono: <span class="text-gray-600">{order.User.phone}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Email postal: <span class="text-gray-600">{order.User.email}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">DNI: <span class="text-gray-600">{order.User.dni}</span></p>
                  </div>
                </div>
            <div class="container mx-auto">
              <p className="text-2xl my-5 "><span className="font-semibold text-gray-900">Datos de compra:</span></p>
              <div class="max-w-md mx-auto bg-white rounded-lg shadow-md px-6 py-4">
                <p class="text-gray-700 font-semibold mb-2 text-xl">Fecha: <span class="text-gray-600">{order.dateTime}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Total: <span class="text-gray-600">{order.totalSale}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Descuentos: <span class="text-gray-600">{order.tax}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Estado: <span class="text-gray-600">{order.status}</span></p>
              </div>
            </div>
            <div>
                <div class="container mx-auto mb-5">
                <p className="text-2xl my-5 "><span className="font-semibold text-gray-900">Dirección de envio:</span></p>
                  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md px-6 py-4">
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Calle: <span class="text-gray-600">{order.Address.street} {order.Address.altitude}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Altura: <span class="text-gray-600">{order.Address.altitude}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Codigo postal: <span class="text-gray-600">{order.Address.postalCode}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Ciudad: <span class="text-gray-600">{order.Address.location}</span></p>
                    <p class="text-gray-700 font-semibold mb-2 text-xl">Provincia: <span class="text-gray-600">{order.Address.province}</span></p>
                  </div>
                </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg">
                {order.products?.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md flex p-4">
                     <Image
                        src={product.Product?.urlImage}
                        alt={product.Product?.name}
                        width={150}
                        height={250}
                    />
                    <div className="flex-grow mx-5">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.Product?.name}</h2>
                      <p className="mb-4">Cantidad: {product.quantity}</p>
                    </div>
                  </div>
                ))}
            </div>
            </div>
          </div>
        </div> </>
            : "Cargando"}
      </Layout>
    )
  }