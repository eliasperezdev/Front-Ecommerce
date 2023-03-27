import { useRouter } from 'next/router'
import Layout from "componentsAdmin/layout/Layout";
import TableOrderClient from 'componentsAdmin/Orders/TableOrderClient';
export default function Order() {
    const router = useRouter()
    const { id } = router.query
    return (
      <Layout>
        <div className="flex justify-between">
            <div className='flex'>
              <h1 className="font-bold text-3xl">Elias Perez</h1>
              <h1 className='text-md text-gray-500'>Orden #{id}</h1>
            </div>
            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancelar pedido</button>
        </div>
        <div className='my-8'>
          <div className='grid gap-x-8 grid-cols-3'>
            <div className='text-center'>
              <h1 className='text-md font-bold text-gray-500 uppercase '>Email</h1>
              <p className='text-xl font-bold '>example@gmail.com</p>
            </div>
            <div className='text-center'>
              <h1 className='text-md font-bold text-gray-500 uppercase '>Telefono</h1>
                <p className='text-xl font-bold '>3644311916</p>
            </div>           
            <div className='text-center'>
              <h1 className='text-md font-bold text-gray-500 uppercase '>Tipo de entrega</h1>
                <p className='text-xl font-bold '>Envio a domicilio</p>
            </div>
          </div>
        </div>
        <TableOrderClient/>
        <div className='my-8'>
          <h1 className='text-md font-semibold'>Detalles adicionales</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nunc id mauris ullamcorper dignissim id at eros. Mauris finibus massa orci, vel luctus enim hendrerit sit amet. Nulla quis ex scelerisque, convallis dui eu, cursus tellus. Nulla interdum, libero at pharetra dapibus, ex metus rhoncus felis, a elementum velit velit in ante. Maecenas consectetur ex ut felis facilisis, ut vestibulum magna hendrerit. Duis iaculis ullamcorper dolor, convallis interdum justo egestas quis. Duis dictum neque at convallis scelerisque.</p>
        </div>
        <div className='py-3'>
          <h1 className='text-md font-semibold'>Datos de envio</h1>

        </div>
        <div className='py-3'>
          <h1 className='text-md font-semibold'>Estado de envio</h1>
          <div className='flex gap-4 pt-5'>
              <span class="bg-indigo-100 text-indigo-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Preparando</span>
              <span class="bg-purple-100 text-purple-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Preparado</span>
              <span class="bg-yellow-100 text-yellow-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Enviado</span>
              <span class="bg-green-100 text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">Entregado</span>
          </div>
        </div>
      </Layout>
    )
  }