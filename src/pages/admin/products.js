import Layout from "componentsAdmin/layout/Layout";
import TableProducts from "componentsAdmin/Products/TableProducts";
import Link from "next/link";
import { useContext, useEffect } from "react";
import productContext from "../../../context/product/productContext";

export default function Dashboard() {

  const ProductContext = useContext(productContext)
  const {getProducts, products} = ProductContext

    useEffect(() => {
      getProducts()
    }, [])

    return (
      <Layout>
        <div className="flex justify-between">
            <h1 className="font-bold text-xl">Productos</h1>
            <Link href={"/admin/new-product"}>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar producto</button>
            </Link>
        </div>
            
            <TableProducts products={products}/>
      </Layout>
    )
  }
  