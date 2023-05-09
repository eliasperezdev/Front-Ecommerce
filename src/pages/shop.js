import Layout from "components/layout/Layout";
import Products from "components/products/Products";
import Sidebar from "components/products/Sidebar";
import clientAxios from "config/axios";
import productContext from "context/product/productContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export async function getServerSideProps(context) {
  const { category } = context.query;

  // Utiliza el valor de `category` para filtrar los datos

  return {
    props: {
      // Pasa los datos filtrados como propiedades a la página
      idCategory: category
    }
  }
}

export default function Home({idCategory}) {
  console.log("id category", idCategory);

  const ProductContext = useContext(productContext)
  const { categories, editorials, getEditorials} = ProductContext

  const router = useRouter();
  const { query } = router;

  const [products, setProducts] = useState([])
  const [editorialCheck, setEditorial] = useState(null)
  const [categoryCheck, setCategory] = useState(idCategory||undefined)
  const [order, setOrder] = useState("desc")
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(1000000)

  useEffect(() => {
    getEditorials()
    if(query && Object.keys(router.query).length > 0) {
      console.log(query.category);
      setCategory(query.category)
    }
  }, [])
  
  useEffect(() => {      
    const getProducts =async ( ) => {
      console.log("category: ", categoryCheck);
      try {
        const respuesta = await clientAxios.get(`/api/products/${editorialCheck}/${categoryCheck}/${order}/${min}/${max}`)
        console.log(respuesta.data.response.products);
        setProducts(respuesta.data.response.products)
      } catch (error) {
        setProducts([])
        //toast.error('No hay productos');
      }
    }
    getProducts()
  }, [editorialCheck, categoryCheck, order, setCategory])
  
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value === categoryCheck ? undefined : value);
  }
  
  const handleEditorialChange = (e) => {
    const value = e.target.value;
    setEditorial(value === editorialCheck ? null : value);
  }


    const filterClick = () => {
      const getProducts =async ( ) => {
        try {
          const respuesta = await clientAxios.get(`/api/products/${editorialCheck}/${categoryCheck}/${order}/${min}/${max}`)
          console.log(respuesta.data.response.products);
          setProducts(respuesta.data.response.products)
        } catch (error) {
          toast.error('No hay productos');
        }
      }
      getProducts()
    }


    return (
      <Layout>
        <div className="container py-4 flex items-center gap-3">
            <p className="text-gray-600 font-medium">Tienda</p>
        </div>
        <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categorías</h3>
                    <div className="space-y-2">
                        {categories?.map(category=> (
                            <div key={category.id} className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  onChange={handleCategoryChange} 
                                  checked={Number(categoryCheck) === category.id}
                                  value={category.id}
                                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label className="text-gray-600 ml-3 cusror-pointer">{category.name}</label>
                            </div>
                        ))}
                        
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Editoriales</h3>
                    <div className="space-y-2">
                        {editorials?.map(editorial=> (
                            <div key={editorial.id} className="flex items-center">
                                <input 
                                  type="checkbox"
                                  onChange={handleEditorialChange}
                                  checked={Number(editorialCheck) === editorial.id}
                                  value={editorial.id}
                                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label className="text-gray-600 ml-3 cusror-pointer">{editorial.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Precio</h3>
                    
                    <div className="flex items-center mb-4">
                    <select 
                        onChange={(e)=>setOrder(e.target.value)}
                        className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                        <option value={"desc"} >Mas nuevo</option>
                        <option value={"asc"} >Mas viejo</option>
                    </select>
                </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Precio</h3>
                    <div className="mt-4 flex items-center">
                        <input type="number"
                            onChange={(e)=>{setMin(e.target.value)}}
                            value={min}
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min"
                          />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="number"
                            onChange={(e)=>{setMax(e.target.value)}}
                            value={max}
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max"
                          />
                    </div>
                    <button onClick={filterClick}>Filtrar</button>
                </div>
            </div>
        </div>
          {products.length === 0 ? "No hay productos" : <Products products={products}/> }
        </div>

      </Layout>
    )
  }
  