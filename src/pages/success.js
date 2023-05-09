import Loader from 'components/Loader';
import Layout from 'components/layout/Layout'
import clientAxios from 'config/axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

export default function Success() {
  const router = useRouter();

  const [ order, setOrder ] = useState("")
  const [ loader, setLoader ] = useState(true)

  useEffect(() => {
    const { query } = router;
    const fetchData = async () => {
      try {
         const res =await clientAxios.post('/api/orders/feedback', query)
         setOrder(res.data)
         setLoader(false)
       } catch (error) {

        console.log(error);
       }
    }

      fetchData()
  }, [router.query])
  
  return (
    <Layout>
        {loader ? <Loader text="Verificando la compra" /> :
        router.query.collection_status? 
        <div className='flex justify-center'>
          <div class="max-w-md bg-white p-8 rounded-lg shadow-md ">
            <h1 class="text-3xl font-bold mb-4 text-gray-900">¡Gracias por su compra!</h1>
            <p class="text-gray-700">Su compra ha sido completada exitosamente. Agradecemos su confianza en nuestro servicio.</p>
            <p class="text-gray-700 text-xl mt-4">Detalles de la compra:</p>
            <p class="text-gray-700 mt-4">Número de transacción: {order.id}</p>
            <p class="text-gray-700 mt-4">Total pagado: {order.totalSale}</p>
            <div class="mt-4">
              <Link href={`/account/order/${order.id}`} class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">Ir a ver el estado de la compra</Link>
            </div>
          </div>
        </div> : "Algo fallo"
      }
    </Layout>
  )
}
