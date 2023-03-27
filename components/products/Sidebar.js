import { useContext, useEffect } from "react";
import productContext from "../../context/product/productContext";

export default function Sidebar() {



    const ProductContext = useContext(productContext)
    const { categories, editorials, getEditorials } = ProductContext

    useEffect(() => {
        getEditorials()
      }, [])


    return (
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categorias</h3>
                    <div className="space-y-2">
                        {categories?.map(category=> (
                            <div key={category.id} className="flex items-center">
                                <input type="checkbox" name="cat-1" id="cat-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                <label for="cat-1" className="text-gray-600 ml-3 cusror-pointer">{category.name}</label>
                            </div>
                        ))}
                        
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Editoriales</h3>
                    <div className="space-y-2">
                        {editorials?.map(editorial=> (
                            <div key={editorial.id} className="flex items-center">
                                <input type="checkbox" name="cat-1" id="cat-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                <label for="cat-1" className="text-gray-600 ml-3 cusror-pointer">{editorial.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Precio</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min"/>
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max"/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  