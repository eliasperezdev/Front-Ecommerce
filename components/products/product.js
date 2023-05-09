import authContext from "context/auth/authContext";
import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import userContext from "context/user/userContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsFillHeartFill, BsInfoSquare } from "react-icons/bs";

export default function Product({product}) {

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { addToCart } = ShoppingCartContext

    const UserContext = useContext(userContext)
    const { addFavorite } = UserContext

    const AuthContext = useContext(authContext)
    const { autenticado } = AuthContext

    const onClickFavorite = ( ) => {
        addFavorite(product.id)
    }

    return (
        <div key={product.id} className="bg-white shadow rounded overflow-hidden group container items-center">
            <div className="relative">
                    <Image
                        src={product.urlImage}
                        alt={product.name}
                        width={200}
                        height={150}
                        style={{objectFit:"cover"}}
                    />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link key={product.id} href={`/products/${product.id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="Ver producto">
                        <BsInfoSquare />
                    </Link>
                    {autenticado? 
                        <button href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="Agregar a favorito"
                        onClick={onClickFavorite}
                        >
                        <BsFillHeartFill />
                    </button>: null
                    }
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <Link key={product.id} href={`/products/${product.id}`}>
                    <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product.name}</h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className={`text-xl text-primary font-semibold ${product.descuento > 0 ? "line-through" : null}`}>${product.price} </p>
                    <p className={`text-md text-gray-500 font-semibold`}>{product.descuento > 0 ? (product.price - product.descuento ): null} </p>
                    {product.stock <= 0 ? <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Sin stock</span> : null}
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                </div>
            </div>
            <button onClick={()=>addToCart(product)}
                disabled= {product.stock <= 0 ? true : false}
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                >Agregar al carrito
            </button>
        </div>
    )
}
