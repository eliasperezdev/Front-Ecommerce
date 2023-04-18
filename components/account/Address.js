import userContext from "context/user/userContext";
import { useContext } from "react"

export default function Address({addres}) {
    const UserContext = useContext(userContext)
    const { deleteAddress } = UserContext

    const onDelete = () => {
        deleteAddress(addres.id)
    }


    return (
        <>
        <div className="order-4 border-red-200 border-t-red-500">
            <div className="flex justify-center">
                <div
                    className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                    <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    {addres.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600">
                        {addres.postalCode}
                    </p>
                    <p className="mb-4 text-base text-neutral-600">
                        {addres.location}
                    </p>
                    <p className="mb-4 text-base text-neutral-600">
                        {addres.province}
                    </p>
                    <p className="mb-4 text-base text-neutral-600">
                        {addres.street + " " + addres.altitude}
                    </p>
                    <button 
                        type="button" 
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={onDelete}
                    >Eliminar</button>
                </div>
                </div>

        </div>
        </>
    )
  }
