import shoppingCartContext from "context/shoppingCart/shoppingCartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Product({product}) {

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { addToCart } = ShoppingCartContext

    return (
        <div key={product.id} className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
                <Image
                    src={product.urlImage}
                    alt={product.name}
                    width={300}
                    height={500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link key={product.id} href={`/products/${product.id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="Ver producto">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="Agregar a favorito">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a href="#">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product.name}</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">${product.price}</p>
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
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Agregar al carrito</button>
        </div>
    )
}
