import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
      <>
      <Head>
        <title>I Sekai Shop</title>
      </Head>
        <Header />
        <Navbar/>
            {children}
        <Footer/>
      </>
    )
  }
  