import Layout from "components/layout/Layout";
import clientAxios from "config/axios";
import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import Image from "next/image";
import { useContext, useState } from "react";

export async function getServerSideProps({params}) {
    const res = await clientAxios.get(`/api/products/${params.id}`)
    return {
      props: {
        product: res.data
      }, // will be passed to the page component as props
    }
  }



export default function Product({product}) {
    const [count, setCount] = useState(0)

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { addToCart } = ShoppingCartContext
    return (
      <Layout>
            <div className="container grid grid-cols-2 gap-6 py-8">
                <div>
                    <Image 
                        src={product.urlImage}
                        alt={product.name}
                        width={300}
                        height={500}
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-medium uppercase mb-2">{product.name}</h2>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Disponibilidad: </span>
                            {product.stock? 
                            <span className="text-green-600">En Stock</span> :
                            <span className="text-red-600">Sin stock</span>}
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Editorial: </span>
                            <span className="text-gray-600">{product.Editorial.name}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Categoria: </span>
                            <span className="text-gray-600">{product.Category.name}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">ISBN: </span>
                            <span className="text-gray-600">{product.isbn}</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">${product.price}</p>
                    </div>

                    <p className="mt-4 text-gray-600">{product.description}</p>

                    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <button
                            onClick={()=>addToCart(product)}
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <i className="fa-solid fa-bag-shopping"></i> Añadir al carrito
                        </button>
                    </div>

                </div>
            </div>
      </Layout>
    )
  }
  
