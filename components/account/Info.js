import authContext from "context/auth/authContext"
import { useContext } from "react"

export default function Info() {

    const AuthContext = useContext(authContext)
    const {usuario} = AuthContext

    return (
        <>
        <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Información personal</h3>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">{usuario.name + " " + usuario.lastName}</h4>
                    <p class="text-gray-800">Email: {usuario.email}</p>
                    <p class="text-gray-800">Telefono: {usuario.phone}</p>
                    <p class="text-gray-800">DNI: {usuario.dni}</p>
                </div>
            </div>
        <div class="col-span-9 grid grid-cols-3 gap-4">

             <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Dirección trabajo</h3>
                    <a href="#" class="text-primary">Editar</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">John Doe</h4>
                    <p class="text-gray-800">Medan, North Sumatera</p>
                    <p class="text-gray-800">20371</p>
                    <p class="text-gray-800">0811 8877 988</p>
                </div>
            </div>

            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Dirección caa</h3>
                    <a href="#" class="text-primary">Editar</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">John Doe</h4>
            <p></p>
                    <p class="text-gray-800">Medan, North Sumatera</p>
                    <p class="text-gray-800">20317</p>
                    <p class="text-gray-800">0811 8877 988</p>
                </div>
            </div>

        </div>
        </>
    )
  }
  