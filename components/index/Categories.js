import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import productContext from "../../context/product/productContext";

export default function Categories() {

    const ProductContext = useContext(productContext)
    const { categories} = ProductContext

    const categoriesFilter = categories?.filter((category, index) => index < 6 )

    return (
    <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Por categorias</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
            { categoriesFilter?.map(category=>( 
                <div key={category.id} className="relative rounded-sm overflow-hidden group">
                        <Image
                            src={category.urlImage}
                            alt={category.description}
                            width={500}
                            height={300}
                        />
                    <Link  href={{ pathname: '/shop', query: { category: category.id } }} as={`/shop?category=${category.id}`} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                         >{category.name}
                    </Link>
                </div>
            ))}
        </div>
    </div>
    )
  }
  