import authContext from "context/auth/authContext"
import Link from "next/link"
import { useContext } from "react"

export default function Sidebar() {

    const AuthContext = useContext(authContext)
    const {usuario} = AuthContext

    return (
        <div className="col-span-3">
            <div className="px-4 py-3 shadow items-center">
                    <p className="text-gray-600">Hola,</p>
                    <h4 className="text-gray-800 font-medium">{usuario?.name}</h4>
            </div>

            <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div className="space-y-1 pl-8">
                    <div className="relative text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-address-card"></i>
                        </span>
                        Datos personales
                    </div>
                    <h4 className="text-gray-700 font-medium">{usuario?.name + " " + usuario?.lastName}</h4>
                    <p className="text-gray-800">Email: {usuario?.email}</p>
                    <p className="text-gray-800">Teléfono: {usuario?.phone}</p>
                    <p className="text-gray-800">DNI: {usuario?.dni}</p>
                    
                    <Link href="/account/address" className="relative text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-address-card"></i>
                        </span>
                        Mis direcciones
                    </Link>
                </div>
               

                <div className="space-y-1 pl-8 pt-4">
                    <Link href="#" className="relative hover:text-primary block font-medium capitalize transition">
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fa-regular fa-arrow-right-from-bracket"></i>
                        </span>
                        Cerrar sesión
                    </Link>
                </div>

                

            </div>
        </div>
    )
  }
  