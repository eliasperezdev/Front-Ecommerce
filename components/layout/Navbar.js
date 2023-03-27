import Link from "next/link"
import { useContext, useEffect } from "react"
import authContext from "../../context/auth/authContext";
import productContext from "../../context/product/productContext";

export default function Navbar() {

    const AuthContext = useContext(authContext)
    const {autenticado} = AuthContext

    const ProductContext = useContext(productContext)
    const {getCategories, categories} = ProductContext

    useEffect(() => {
        getCategories()
      }, [])



  return (
    <nav className="bg-blue-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">Categorias</span>
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    {categories?.map(category =>( 
                        <Link 
                            key={category.id} href="/"
                            legacyBehavior
                            >
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">{category.name}</span>
                    </a>
                        </Link>
                    ))}
                    
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <Link
                        legacyBehavior
                        href="/"
                    >
                        <a className="text-gray-200 hover:text-white transition">Inicio</a>
                    </Link>
                    <Link
                        legacyBehavior
                        href="/shop"
                    >
                        <a className="text-gray-200 hover:text-white transition">Tienda</a>
                    </Link>
                    <Link
                        legacyBehavior
                        href="/about-us"
                    >
                        <a className="text-gray-200 hover:text-white transition">Sobre nosotros</a>
                    </Link>
                    <Link
                        legacyBehavior
                        href="/how-to-buy"
                    >
                        <a className="text-gray-200 hover:text-white transition">¿Como comprar?</a>
                    </Link>
                    <Link
                        legacyBehavior
                        href="/contact"
                    >
                        <a className="text-gray-200 hover:text-white transition">Contacto</a>
                    </Link>
                </div>
                {autenticado ? 
                    <button
                        className="text-gray-200 hover:text-white transition"
                    >
                        Cerrar sesión
                    </button>  : 
                    <Link href={"/login"} legacyBehavior>
                        <a className="text-gray-200 hover:text-white transition">
                            <div className="text-2xl">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Iniciar sesión</div>
                        </a>
                    </Link> }
            </div>
        </div>
    </nav>
  )
}
