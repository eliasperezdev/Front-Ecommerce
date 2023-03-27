import Layout from "components/layout/Layout";
import Breadcrumb from "components/products/Breadcrumb";
import ProductDetails from "components/products/ProductDetails";

export default function Home() {
    return (
      <Layout>
        <Breadcrumb/>
        <ProductDetails/>
      </Layout>
    )
  }
  