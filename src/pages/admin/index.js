import Layout from "componentsAdmin/layout/Layout";
import clientAxios from "config/axios";
import Link from "next/link";

export async function getServerSideProps({params}) {
    const res = await clientAxios.get(`/api/dashboard/`)
    return {
      props: {
        totalClient: res.data.totalClient,
        totalNoClient: res.data.totalNoClient,
        totalOrders: res.data.totalOrders,
        totalProducts: res.data.totalProducts,
        totalProductsWithoutStock: res.data.totalProductsWithoutStock,
        totalSales: res.data.totalSales,
        orders: res.data.orders
      }, // will be passed to the page component as props
    }
  }

  

export default function Dashboard({totalClient, totalNoClient, totalOrders, totalProducts, totalProductsWithoutStock, totalSales, orders}) {

    console.log(orders);
    
    return (
      <Layout>
                    <div className="container mx-auto mt-6">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de clientes
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalClient}
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de compras realizadas por no clientes
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalNoClient}
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de ordenes
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalOrders}
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de productos
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalProducts}
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de productos sin stock
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalProductsWithoutStock}
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total de ventas
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            {totalSales}
                        </div>
                    </div>
                </div>
            </div>
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
                <h1 className="text-2xl font-semibold text-black">Ultimos ordenes</h1>
                {orders.length === 0 ? "No hay ordenes" : <tbody>
                    {orders.map(order=> (
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
                                {order.status === "No pagado" ? <span class="bg-green-100 text-gray-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">No pagado</span>: order.status === "Aprobado" ? <span class="bg-red-green text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">En proceso</span> : order.status === "Empaquetado" ? <span class="bg-yellow-100 text-yellow-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Empaquetado</span> : <span class="bg-indigo-100 text-indigo-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Entregado</span>}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/admin/orders/${order.id}`} className="font-medium text-blue-600  hover:underline">Ver</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                }
        </table>
      </Layout>
    )
  }
  