import authContext from "context/auth/authContext"
import userContext from "context/user/userContext";
import Link from "next/link";
import { useContext,useEffect } from "react"

export default function Info() {
    const UserContext = useContext(userContext)
    const {getFavorities, getOrders, orders } = UserContext

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <>
            <div className="container mt-10">
                <h1 className="mb-10 text-center text-2xl font-bold">Mis ordenes</h1>
                <div className="grid grid-cols-2  md:grid-cols-3  gap-4" >
                {orders.length === 0 ? "No hay ordenes" : orders.map(order=>(
                    <div key={order.id} className="order-4 border-red-200 border-t-red-500">
                        <div class="flex justify-center">
                            <div
                                className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                                <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                N° de orden: {order.id}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600">
                                    {order.dateTime}
                                </p>
                                <Link
                                    href={`/account/order/${order.id}`}
                                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    Ver orden
                                </Link>
                            </div>
                            </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
  }
