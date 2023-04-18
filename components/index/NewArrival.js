import Product from "components/products/product"
import clientAxios from "config/axios"
import productContext from "context/product/productContext"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"

export default function NewArrival() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const lastestProducts = async () => {
            const data = await clientAxios.get('/api/products/lastest')
            console.log(data);
            setProducts(data.data)
        } 
        lastestProducts()
      }, [])
  
      
    return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Nuevos ingresos</h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            {products?.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </div>
    )
  }
  