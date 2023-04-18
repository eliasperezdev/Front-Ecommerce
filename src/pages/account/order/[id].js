import Layout from "components/layout/Layout";
import clientAxios from "config/axios";
import Image from "next/image";

export async function getServerSideProps({params}) {
 
    const res = await clientAxios.get(`/api/orders/order/${params.id}`)
    return {
      props: {
        order: res.data
      }, // will be passed to the page component as props
    }
  }



export default function Order({order}) {
    return (
      <Layout>
        <h1 className="m-10 text-center text-2xl font-bold">Orden N°{order.id}</h1>
        <div className="grid grid-flow-row-dense lg:grid-cols-2">
          <div className="container">
            <div class="container mx-auto py-8">
              <p className="text-2xl my-5 "><span className="font-semibold text-gray-900">Datos de compra:</span></p>
              <div class="max-w-md mx-auto bg-white rounded-lg shadow-md px-6 py-4">
                <p class="text-gray-700 font-semibold mb-2 text-xl">Fecha: <span class="text-gray-600">{order.dateTime}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Total: <span class="text-gray-600">{order.totalSale}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Descuentos: <span class="text-gray-600">{order.tax}</span></p>
                <p class="text-gray-700 font-semibold mb-2 text-xl">Estado: <span class="text-gray-600">{order.status}</span></p>
              </div>
            </div>
            <div>
                <p className="text-2xl my-5 "><span className="font-semibold text-gray-900">Dirección de envio:</span></p>
                <div class="container mx-auto py-8">
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
            <div className="rounded-lg md:w-2/3">
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
                      <p className="text-gray-700 mb-4">Precio: ${product.Product.price - product.Product.descuento}</p>
                      <p className="text-gray-500 mb-4 line-through">Precio original: {product.Product.price}</p>
                      <p className="mb-4">Cantidad: {product.quantity}</p>
                    </div>
                  </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
