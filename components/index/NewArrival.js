import Product from "components/products/product"
import productContext from "context/product/productContext"
import Image from "next/image"
import { useContext, useEffect } from "react"

export default function NewArrival() {

    const ProductContext = useContext(productContext)
    const { products, getProducts} = ProductContext

    useEffect(() => {
        getProducts()
      }, [])
  
      
      const productsFilter = products?.filter((product, index) => index < 4 )
    return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Nuevos ingresos</h2>
        <div className="grid grid-cols-4 gap-6">
            {productsFilter?.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </div>
    )
  }
  