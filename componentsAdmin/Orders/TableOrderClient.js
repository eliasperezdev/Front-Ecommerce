import React from 'react'

export default function TableOrderClient({products}) {
    console.log(products);
  return (
    
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre del producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Precio
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Descuento
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Cantidad
                    </th>
                </tr>
            </thead>
            <tbody>
                {products?.map(product => (
                    <tr key={product.id} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {product.Product?.name}
                        </th>
                        <td className="px-6 py-4">
                            {product.price}
                        </td>
                        <td className="px-6 py-4">
                            {product.discount}
                        </td>
                        <td className="px-6 py-4">
                            {product.quantity}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  )
}
