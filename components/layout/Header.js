import productContext from "context/product/productContext";
import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import Link from "next/link"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context/auth/authContext";
import { Toaster } from "react-hot-toast";
import { MdCardGiftcard, MdFavorite, MdManageAccounts } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx"
import Image from "next/image";


export default function Prueba() {

    const router = useRouter()

    const AuthContext = useContext(authContext)
    const {usuarioAutenticado, usuario, logout, autenticado} = AuthContext

    const CartContext = useContext(shoppingCartContext)
    const {setCart} = CartContext

    useEffect(() => {
        getCategoriesShop()
      }, [])

        useEffect(() => {
        usuarioAutenticado()
        setCart()
        }, [])

        const ShoppingCartContext = useContext(shoppingCartContext)
        const { shoppingCart } = ShoppingCartContext

        const ProductContext = useContext(productContext)
        const { getSearch, getCategoriesShop, categories } = ProductContext

        const [ textSearch, setTextSearch ] = useState("")

        const onSearch = () => {
        getSearch(textSearch)
        router.push("/search")
        }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    logout()
  } 

  return (
    <>
    <header className="bg-gradient-to-b from-red-600 to-red-700 text-white">
      <div className="container mx-auto flex justify-between items-center py-1">
        <Link className="flex items-center" href={"/"}>
          <Image src="/logo.png" width={60} height={60} alt="I sekai"/>
          <h1 className="text-lg font-semibold mx-2"> I sekai</h1>
        </Link>
        <div className="max-w-screen-sm">   
            <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" 
                    name="search" 
                    onChange={e=>setTextSearch(e.target.value)}
                    id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-b from-red-500 to-red-600" placeholder="Buscar.." />
                <button type="submit" onClick={onSearch} className="text-white font-bold absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
            </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
            <Link href={"/shopping-cart"} legacyBehavior>
                    <a className="text-center text-gray-700 text-yellow-400 font-bold hover:text-primary transition relative">
                        <div className="text-2xl">
                            <MdCardGiftcard />
                        </div>
                        <div
                            className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            {shoppingCart.length}</div>
                    </a>
                </Link>
            </li>
          {autenticado? 
            <>
            <li>
                <Link href={"/account/account"} legacyBehavior>
                    <a className="text-yellow-400 font-bold hover:text-gray-400">
                        <div className="text-2xl">
                            <MdManageAccounts />
                        </div>
                    </a>
                </Link> 
            </li>
            <li>
                <Link href={"/account/favorities"} legacyBehavior>
                    <a className="text-yellow-400 font-bold hover:text-gray-400">
                        <div className="text-2xl">
                            <MdFavorite />
                        </div>
                    </a>
                </Link> 
            </li>
            </>
            : null }
            <li>
                {autenticado && (usuario?.RoleId===1 || usuario?.RoleId===2)? 
                <Link href={"/admin"} legacyBehavior>
                    <a className="text-yellow-400 font-bold hover:text-gray-400">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Adminitración</div>
                    </a>
                </Link> 
                : null }
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex ">
            <Link href={"/shopping-cart"} legacyBehavior>
                    <a className="text-center text-gray-700 text-yellow-400 font-bold hover:text-primary transition relative">
                        <div className="text-2xl">
                            <MdCardGiftcard />
                        </div>
                        <div
                            className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            {shoppingCart.length}</div>
                    </a>
                </Link>
          <button
            onClick={handleMenuToggle}
            className="focus:outline-none focus:text-gray-400 mx-10"
          >
            <RxHamburgerMenu/>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 right-0 bg-gray-900 w-full z-20">
            <ul className="flex flex-col items-center pt-4 space-y-4">
              {autenticado? 
                <>
                <li>
                    <Link href={"/account/account"} legacyBehavior>
                        <a className="text-yellow-400 font-bold hover:text-gray-400">
                            <div className="text-xl flex">
                                <MdManageAccounts />
                                Cuenta
                            </div>
                        </a>
                    </Link> 
                </li>
                <li>
                    <Link href={"/account/favorities"} legacyBehavior>
                        <a className="text-yellow-400 font-bold hover:text-gray-400">
                            <div className="text-xl flex">
                                <MdFavorite />
                                Favoritos
                            </div>
                        </a>
                    </Link> 
                </li>
                </>
                : null }
              <li>
                {autenticado && (usuario?.RoleId===1 || usuario?.RoleId===2)? 
                <Link href={"/admin"} legacyBehavior>
                    <a className="text-yellow-400 font-bold hover:text-gray-400">
                        <div className="text-xl">
                            Adminitración
                        </div>
                    </a>
                </Link> 
                : null }
            </li>
              <li>
                <button
                    className="text-yellow-400 font-bold hover:text-gray-400"
                    onClick={handleDropdownToggle}
                >
                    <p className="text-xl">
                        Categorías
                    </p>
                </button>
              </li>
                {isOpen && categories.length > 0 ?
                    categories?.map(category =>( 
                    <li key={category.id}>
                        <Link 
                             href={{ pathname: '/shop', query: { category: category.id } }}
                             className="text-yellow-400 font-bold hover:text-gray-400"
                            >
                            <span className="text-xl">{category.name}</span>
                        </Link>
                    </li>
                    )) : null 
                    }
            </ul>
            
          </div>
        )}
      </div>
    </header>
    <nav className="bg-gradient-to-b from-red-600 to-red-700 border-4 border-yellow-500 hidden md:block">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">Categorías</span>
                <div
                    className="absolute w-full left-0 top-full bg-red-600 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
                    {categories?.map(category =>( 
                        <Link 
                            key={category.id}
                            className="flex  text-white items-center px-6 py-3 hover:bg-gray-100 transition"
                            href={{ pathname: '/shop', query: { category: category.id } }}
                            >
                            <span className="ml-6 text-white font-semibold text-sm">{category.name}</span>
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
                        href={{ pathname: '/shop', query: { category: undefined } }}
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
                    <button className="text-gray-200 hover:text-white transition" onClick={onLogout} >
                        Cerrar sesión
                    </button>  : 
                    <div className="flex">
                    <Link href={"/login"} legacyBehavior>
                        <a className="text-gray-200 hover:text-white transition">
                            <div className="text-2xl">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Iniciar sesión</div>
                        </a>
                    </Link>
                    <Link href={"/register"} legacyBehavior>
                    <a className="text-gray-200 hover:text-white transition mx-2">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Registrarse</div>
                    </a>
                </Link></div> }
            </div>
        </div>
    </nav>
    <Toaster 
            position="bottom-right"
        />
    </>
  );
};
