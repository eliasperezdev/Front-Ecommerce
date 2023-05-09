import authContext from "context/auth/authContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdAddShoppingCart, MdCategory, MdOutlineAutoAwesomeMosaic, MdOutlineDashboard, MdOutlineTvOff, MdPermIdentity, MdRemoveShoppingCart, MdSpatialAudioOff, MdStore, MdViewTimeline } from "react-icons/md";

const Sidebar = ({isMenuOpen}) => {

  const AuthContext = useContext(authContext)
  const {usuario,logout} = AuthContext
  const onLogout = () => {
    logout()
  } 

  return (
    <aside
      className={`w-64 bg-gradient-to-r from-red-600 to-red-700 text-white h-full fixed left-0 p-0 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"} md:block`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center">
        {/* Coloca aquí tu logo */}
        <Image 
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Logo"
        />
      </div>

      {/* Lista de enlaces */}
      <nav className="mt-8">
        <ul className="space-y-1">
          {/* Enlace 1 */}
          <li>
            <Link
              href="/admin"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdOutlineDashboard />
              <span> Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdOutlineAutoAwesomeMosaic />
              <span>Productos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/orders"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdAddShoppingCart />
              <span>Ordenes activas</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/sales"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdRemoveShoppingCart />
              <span>Ordenes finalizadas</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/clients"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdSpatialAudioOff />
              <span>Clientes</span>
            </Link>
          </li>
          {usuario?.RoleId === 1 ? 
          <li>
            <Link
              href="/admin/users"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdPermIdentity />
              <span>Vendedores</span>
            </Link>
          </li> : null}
          <li>
            <Link
              href="/admin/category"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdCategory />
              <span>Categorías</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/editorials"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdViewTimeline />
              <span>Editoriales</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 transition-colors font-semibold duration-300 hover:bg-red-900 gap-2"
            >
              <MdStore />
              <span>Volver a la tienda</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              activeClassName="bg-red-900"
              className="flex items-center px-4 py-2 "
            >
              <button className=" items-center transition-colors font-semibold duration-300 hover:bg-red-900 gap-2 flex" onClick={onLogout} >
                  <MdOutlineTvOff/>
                   Cerrar sesión
              </button> 
            </Link>
          </li>

          {/* Agrega más enlaces según tus necesidades */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;