import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
      <>
      <Head>
        <title>I Sekai Shop</title>
      </Head>
        <Header />
            {children}
        <Footer/>
      </>
    )
  }
  