import Layout from "components/layout/Layout";
import Products from "components/products/Products";
import Sidebar from "components/products/Sidebar";

export default function Home() {
    return (
      <Layout>
        <div className="container py-4 flex items-center gap-3">
            <p className="text-gray-600 font-medium">Tienda</p>
        </div>
        <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <Sidebar/>
        <Products/> 
        </div>

      </Layout>
    )
  }
  