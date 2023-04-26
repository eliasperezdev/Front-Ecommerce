import Layout from "components/layout/Layout"
import Product from "components/products/product"
import productContext from "context/product/productContext"
import { useContext, useEffect } from "react"

export default function Search() {

    const ProductContext = useContext(productContext)
    const { search } = ProductContext

    console.log(search);

    return (
        <Layout>
            <div className="container">
                <h1 className="mb-10 text-center text-2xl font-bold">Resultados de la busquedas</h1>
                <div class="col-span-3">
                    <div class="grid grid-cols-3 gap-6">
                        {search?.length===undefined?<div className="my-32 font-semibold text-2xl ">No hay resultados</div> : search?.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
