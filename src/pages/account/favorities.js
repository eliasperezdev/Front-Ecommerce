import Favorite from "components/account/favorite";
import Layout from "components/layout/Layout";
import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import userContext from "context/user/userContext";
import { useContext, useEffect } from "react";

export default function Order({order}) {
    const UserContext = useContext(userContext)
    const {getFavorities, favorities} = UserContext

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { addToCart } = ShoppingCartContext

    useEffect(() => {
        getFavorities()
    }, [])

    

    return (
      <Layout>
        <div className="container mt-10">
            <h1 className="mb-10 text-center text-2xl font-bold">Mis favoritos</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
                {favorities.map(favorite => (
                    <Favorite favorite={favorite} key={favorite.id} />
                ))}
            </div>
            </div>
        </div>
      </Layout>
    )
  }
  
