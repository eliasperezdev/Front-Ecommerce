import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import Link from "next/link"
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";

export default function Header() {

    const router = useRouter()

    const AuthContext = useContext(authContext)
    const {usuarioAutenticado, usuario, cerrarSesion, autenticado} = AuthContext
  
      useEffect(() => {
        usuarioAutenticado()
      }, [])
  
      const redireccionar = () => {
        router.push("/")
        limpiarState()
      }

      const ShoppingCartContext = useContext(shoppingCartContext)
      const { shoppingCart } = ShoppingCartContext

    return (
    <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <Link href="/" legacyBehavior>
                    <h1 className="text-2xl bold">I Sekai</h1>
            </Link>

            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" name="search" id="search"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="Buscar"/>
                <button
                    className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Buscar</button>
            </div>

            <div className="flex items-center space-x-4">
                <Link href={"/shopping-cart"} legacyBehavior>
                    <a className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="text-xs leading-3">Carrito</div>
                        <div
                            className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            {shoppingCart.length}</div>
                    </a>
                </Link>
                {autenticado? 
                <Link href={"/account/account"} legacyBehavior>
                    <a className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Cuenta</div>
                    </a>
                </Link> 
                : null }

                {autenticado && usuario?.RoleId===1? 
                <Link href={"/admin"} legacyBehavior>
                    <a className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Adminitración</div>
                    </a>
                </Link> 
                : null }
            </div>
        </div>
    </header>
    )
  }
  