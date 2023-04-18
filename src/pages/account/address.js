import Address from "components/account/Address";
import Layout from "components/layout/Layout";
import clientAxios from "config/axios"
import authContext from "context/auth/authContext"
import userContext from "context/user/userContext";
import Link from "next/link";
import { useContext,useEffect } from "react"

export default function Info() {
    const UserContext = useContext(userContext)
    const {getAddress, address, deleteAddress } = UserContext

    useEffect(() => {
        getAddress()
    }, [])


    return (
        <Layout>
            <div className="container mt-10">
                <div className="flex justify-evenly">
                    <h1 className="text-center text-2xl font-bold">Mis direcciones</h1>
                    <Link href={"/account/new-address"} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Agregar dirección</Link>
                </div>
                <div className="grid grid-cols-2  md:grid-cols-3  gap-4" >
                {address.length === 0? "no hay direcciones" : address.map(addres=>(
                    <Address key={addres.id} addres={addres}/>
                ))}
                </div>
            </div>
        </Layout>
    )
  }
