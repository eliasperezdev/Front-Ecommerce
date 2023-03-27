import React from 'react'

export default function TableOrderClient() {
  return (
    
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nombre del producto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Precio
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Descuento
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cantidad
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Blue lock
                    </th>
                    <td class="px-6 py-4">
                        $2500
                    </td>
                    <td class="px-6 py-4">
                        -
                    </td>
                    <td class="px-6 py-4">
                        2
                    </td>
                </tr>
                <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Remera one piece
                    </th>
                    <td class="px-6 py-4">
                        #2500
                    </td>
                    <td class="px-6 py-4">
                        2
                    </td>
                    <td class="px-6 py-4">
                        1
                    </td>
                </tr>
                <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        La muerte de superman
                    </th>
                    <td class="px-6 py-4">
                        $5000
                    </td>
                    <td class="px-6 py-4">
                        Especial
                    </td>
                    <td class="px-6 py-4">
                        1
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

  )
}
