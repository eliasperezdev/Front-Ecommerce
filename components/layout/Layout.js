import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
      <>
      <Head>
        <title>I Sekai Shop</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
          <div className="flex-grow">
            {children}

          </div>
        <Footer/>

      </div>
      </>
    )
  }
  