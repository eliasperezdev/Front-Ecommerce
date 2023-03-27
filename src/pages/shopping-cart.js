import Layout from 'components/layout/Layout'
import shoppingCartContext from 'context/shoppingCart/shoppingCartContext'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

export default function HowToBuy() {

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { shoppingCart, addToCart, delFromCart, totalPrice, total,upOrder } = ShoppingCartContext

    useEffect(() => {
        totalPrice()
      }, [shoppingCart])

      const onSubmit = (e) => {
        e.preventDefault()
        console.log(shoppingCart);
        upOrder(shoppingCart)
      }

  return (
    <Layout>
        <div className=" pt-5">
            <h1 className="mb-10 text-center text-2xl font-bold">Carrito de compras</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
                {shoppingCart.map(product => (
                    <>
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <Image
                        src={product.urlImage}
                        alt={product.name}
                        width={150}
                        height={250}
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <button 
                                onClick={()=>delFromCart(product)}
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            > - </button>
                            <div className="h-8 w-8 border bg-white text-center text-xs outline-none">
                                {product.quantify}
                            </div>
                            <button 
                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                onClick={()=>addToCart(product)}
                            > + </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">{product.price}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                    </>
                ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{total}</p>
                </div>
                <div className="flex justify-between">
                <p className="text-gray-700">Envio</p>
                <p className="text-gray-700">0</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">${total}</p>
                </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                    onClick={onSubmit}
                >Continuar</button>
            </div>
            </div>
        </div>
    </Layout>
  )
}
