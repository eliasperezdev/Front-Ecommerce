import productContext from "context/product/productContext"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect } from "react"
import Product from "./product"

export default function Products() {

    const ProductContext = useContext(productContext)
    const { products, getProducts} = ProductContext

    useEffect(() => {
        getProducts()
      }, [])
  

    return (
        <div class="col-span-3">
            <div class="flex items-center mb-4">
                <select name="sort" id="sort"
                    class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option value="">Mas nuevo</option>
                    <option value="price-low-to-high">Menor precio</option>
                    <option value="price-high-to-low">Mayor precio</option>
                </select>
            </div>

            <div class="grid grid-cols-3 gap-6">
                {products?.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
