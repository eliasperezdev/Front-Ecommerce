import clientAxios from "config/axios";
import clientContext from "context/clients/clientContext";
import React, { useContext, useState } from "react";

const Modal = ({modal, setModal}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [updateRoleCheck, setupdateRole] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const ClientContext = useContext(clientContext)
  const {updateRole} = ClientContext


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit =async () => {
    try {
        const res = await clientAxios.get(`/api/users/dni/${searchQuery}`)
        console.log(res.data);
        setUser(res.data)
        setSelectedValue(res.data.RoleId)
        console.log(selectedValue);
      } catch (error) {

       console.log(error);
      }
  };

  const handleModalClose = () => {
    setModal(!modal)
  }

  const handleSelectChange =async event => {
          
    setSelectedValue(event.target.value);

    const userModified = user
    userModified.RoleId = Number(event.target.value)

    updateRole(userModified)

  };

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        {/* Fondo del modal */}
        <div
        className="fixed inset-0 bg-gray-500 opacity-75"
        onClick={handleModalClose} // Agrega el event listener para cerrar el modal
        >
            
        </div>
        {/* Contenido del modal */}
        <div className="bg-white z-50 rounded-lg p-8 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Buscar por DNI</h2>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 mb-4 rounded-md"
            placeholder="Ingresa tu búsqueda"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleSearchSubmit}
          >
            Buscar
          </button>
            {user? <div className="mt-5">
                <p className="text-xl font-semibold">{user.name + " " + user.lastName}</p>
                <p>Rol: {user.RoleId === 2 ? <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Vendedor</span> : <>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Cliente</span>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " onClick={()=>setupdateRole(!updateRoleCheck)}>Cambiar rol</button>
                {updateRoleCheck ? <>
                    <label for="role" className="block mb-2 text-sm font-medium text-gray-900">Cambiar privilegios</label>
                        <select id="role" value={selectedValue} onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value={2}>Vendedor</option>
                        <option value={3}>Cliente</option>
                    </select></>: null}
                </>

}</p>
            </div> : ""}
        </div>

      </div>
    </div>
  );
};

export default Modal;