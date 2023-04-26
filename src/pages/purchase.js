import Layout from "components/layout/Layout";
import Error from "components/Error";
import userContext from "context/user/userContext";
import { useContext, useEffect, useState } from "react";
import clientAxios from "config/axios";
import authContext from "context/auth/authContext";
import shoppingCartContext from "context/shoppingCart/shoppingCartContext";

export default function Purchase() {

    const UserContext = useContext(userContext)
    const {getAddress, address } = UserContext

    const AuthContext = useContext(authContext)
    const {autenticado, usuario} = AuthContext

    const ShoppingCartContext = useContext(shoppingCartContext)
    const { upOrder, shoppingCart } = ShoppingCartContext

    const [selectedValue, setSelectedValue] = useState('');

    const [additionalData, setText] = useState('');

    const handleTextChange = (event) => {
      setText(event.target.value);
    };

    useEffect(() => {
        getAddress()
    }, [])

    useEffect(() => {
        const fetchaddres = async () => {
          try {
            console.log(selectedValue);
            const response = await clientAxios.get(`/api/address/${selectedValue}`);
            const data = response.data.address
            setFormData({
                ...formData,
                idAddress: data.id,
                name: data.name,
                location: data.location,
                province: data.province,
                postalCode: data.postalCode,
                street: data.street,
                altitude: data.altitude,
                department: data.department,
            });
          } catch (err) {
            console.error(err);
          }
        };
        fetchaddres();
      }, [selectedValue]);

      const [userData, setUserData] = useState({
        dni: usuario?.dni || "",
        UserId: usuario?.id || "",
        nameClient: usuario?.name || "",
        lastName: usuario?.lastName || "",
        email: usuario?.email || "",
      })
    
      const [formData, setFormData] = useState({
        idAddress:"",
        name: '',
        location: '',
        province: '',
        postalCode: '',
        street: '',
        altitude: '',
        department: '',
        text: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

      const handleChangeUser = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          console.log(formData);
            upOrder({userData,formData, shoppingCart, additionalData});
        } else {
          console.log(formErrors);
          console.log(usuario);
          setErrors(formErrors);
        }
      };
    
      const validateForm = () => {
        const formErrors = {};
        const { name, location, province, postalCode, street, altitude, } = formData;
        const {dni, nameClient, lastName, email} = userData
    
        // Validación de campos obligatorios
        if (!name) {
          formErrors.name = 'El nombre es obligatorio';
        }
        if (!location) {
          formErrors.location = 'La ubicación es obligatoria';
        }
        if (!province) {
          formErrors.province = 'La provincia es obligatoria';
        }
        if (!postalCode) {
          formErrors.postalCode = 'El código postal es obligatorio';
        }
        if (!street) {
          formErrors.street = 'La calle es obligatoria';
        }
        if (!altitude) {
          formErrors.altitude = 'La altitud es obligatoria';
        }
        if (!dni) {
          formErrors.dni = 'El DNI es obligatoria';
        }
        if (!nameClient) {
          formErrors.nameClient = 'El nombre es obligatorio';
        }
        if (!lastName) {
          formErrors.lastName = 'El apellido es obligatoria';
        }
        if (!email) {
          formErrors.email = 'El Email es obligatoria';
        }


        return formErrors;
      };

      const handleSelectChange = event => {
        setSelectedValue(event.target.value);
      };

  return (
    <Layout>
      <div className="container">
        <h1 className="text-center text-2xl font-bold mb-5 py-8">Datos del comprador</h1>
        {autenticado ? "": 
        <div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <label className="block mb-2 text-xl font-medium text-gray-900">Nombre</label>
            <input 
                type="text" 
                id="nameClient"  
                name="nameClient" 
                disabled={/*selectedValue === ""? false : true*/ false}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={userData.nameClient}
                onChange={handleChangeUser}
                />
            { <Error message={errors.nameClient} /> && errors.nameClient }
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label className="block mb-2 text-xl font-medium text-gray-900">Apellido</label>
            <input 
                type="text" 
                id="lastName" 
                name="lastName"
                disabled={/*selectedValue === ""? false : true*/ false}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={userData.lastName}
                onChange={handleChangeUser}
            />
            { <Error message={errors.lastName} /> && errors.lastName }
        </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label className="block mb-2 text-xl font-medium text-gray-900">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email"
                disabled={/*selectedValue === ""? false : true*/ false}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={userData.email}
                onChange={handleChangeUser}
            />
            { <Error message={errors.email} /> && errors.email }
        </div>
      </div>}
      <div className="flex justify-between">
        
            <h1 className="text-center text-2xl font-bold mb-5">Datos de envío</h1>
            {autenticado ? 
            <div>
                {address.length===0? null: 
                    <select value={selectedValue} onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected value={""} >Seleccione una dirección guardada</option>
                    {address.map(addres => (
                        <option 
                            key={addres.id} 
                            value={addres.id}
                        >{addres.name}</option>
                    ))}
                </select>
                }
            </div>
            : 
        null
    }
        </div>
        <form className='py-8' onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <label className="block mb-2 text-xl font-medium text-gray-900">Identificación de la dirección</label>
            <input 
                type="text" 
                id="name"  
                name="name" 
                placeholder="Por ejemplo: casa, trabajo, etc"
                disabled={selectedValue === ""? false : true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.name}
                onChange={handleChange}
                />
            { <Error message={errors.name} /> && errors.name }
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label className="block mb-2 text-xl font-medium text-gray-900">Ciudad</label>
            <input 
                type="text" 
                id="location" 
                name="location"
                disabled={selectedValue === ""? false : true}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.location}
                onChange={handleChange}
            />
            { <Error message={errors.location} /> && errors.location }
        </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <label for="ISBN" className="block mb-2 text-xl font-medium text-gray-900">Provincia</label>
                <input 
                    type="text" 
                    id="province" 
                    name="province"
                    disabled={selectedValue === ""? false : true}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    value={formData.province}
                    onChange={handleChange}
                    />
                    { <Error message={errors.province} /> && errors.province }

            </div>
            <div className="relative z-0 w-full mb-6 group">
                    <label for="price" className="block mb-2 text-xl font-medium text-gray-900">Codido postal</label>
                    <input 
                        type="number" 
                        id="postalCode" 
                        name="postalCode" 
                        disabled={selectedValue === ""? false : true}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        value={formData.postalCode}
                        onChange={handleChange}
                        />
                        { <Error message={errors.postalCode} /> && errors.postalCode }
                </div>
            </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Calle</label>
                    <input 
                        type="text" 
                        id="street" 
                        name="street" 
                        disabled={selectedValue === ""? false : true}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    { <Error message={errors.street} /> && errors.street }
                </div>
            </div>
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                    <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Altura</label>
                    <input 
                        type="number" 
                        id="altitude" 
                        name="altitude" 
                        disabled={selectedValue === ""? false : true}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formData.altitude}
                        onChange={handleChange}
                    />
                    { <Error message={errors.altitude} /> && errors.altitude }
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">Departamento</label>
                    <input 
                        type="number" 
                        id="department" 
                        name="department" 
                        disabled={selectedValue === ""? false : true}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
            {autenticado ? null : 
            <div>
            <h1 className="text-center text-2xl font-bold mb-5">Datos de facturacion</h1>
              <div className="relative z-0 w-full mb-6 group">
                      <label for="descuento" className="block mb-2 text-xl font-medium text-gray-900">DNI del comprador</label>
                      <input 
                          type="number" 
                          id="dni" 
                          name="dni" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={userData.dni}
                          onChange={handleChangeUser}
                      />
                  </div>
                  { <Error message={errors.dni} /> && errors.dni }
                </div>
        }
            <h1 className="text-center text-2xl font-bold mb-5">Datos adicionales</h1>
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Información adicional para el envio</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="escriba lo que requiera.." value={additionalData} onChange={handleTextChange}></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-3 w-full text-center mr-2 my-10">Realizar el pago</button>
        </form>

      </div>
    </Layout>
  )
}
