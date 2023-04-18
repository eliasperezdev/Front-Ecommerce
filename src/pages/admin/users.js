import Layout from "componentsAdmin/layout/Layout";
import { useContext, useEffect, useState } from "react";
import clientContext from "../../../context/clients/clientContext";
import Modal from "componentsAdmin/Clients/ModalSeller";
import authContext from "context/auth/authContext";

export default function Dashboard() {

  const ClientContext = useContext(clientContext)
  const {getUsers, users} = ClientContext

  const AuthContext = useContext(authContext)
  const {usuario} = AuthContext

    useEffect(() => {
        getUsers()
    }, [])
    console.log(users);

    const [modal, setModal] = useState(false)

    const clickModal = ( ) => {
        setModal(!modal)
    }

    return (
      <Layout>
        <div className="flex justify-between">
            <h1 className="font-bold text-xl">Vendedores</h1>
            {usuario?.RoleId === 1 ? <button onClick={clickModal}>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar vendedor</button>
            </button> : null}
        </div>
        {modal && <Modal modal={modal} setModal={setModal}/>}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Telefono
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user=> (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {user.name}
                    </th>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                    {user.phone}
                    </td>
                    <td className="px-6 py-4">
                         


                    </td>
                </tr>
                ))

                }
            </tbody>
        </table>
    </div>
      </Layout>
    )
  }
  