import Product from "components/products/product"
import productContext from "context/product/productContext"
import Image from "next/image"
import { useContext, useEffect } from "react"

export default function Recommend() {

    const ProductContext = useContext(productContext)
    const { recommends, getRecommends} = ProductContext

    useEffect(() => {
        getRecommends()
      }, [])


    return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Recomendados</h2>
        <div className="grid grid-cols-4 gap-6">
            {recommends?.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </div>
    )
  }