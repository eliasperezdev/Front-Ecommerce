import Layout from 'components/layout/Layout'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <Layout>
        <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h1 class="text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
              <p class="text-gray-600">Somos una empresa dedicada a ofrecer productos para nuestros clientes. Nuestro equipo está compuesto por expertos en el campo que trabajan arduamente para brindar una experiencia de compra excepcional.</p>
              <p class="text-gray-600 mt-4">Estamos comprometidos con la satisfacción del cliente y nos esforzamos por superar las expectativas en cada oportunidad. Nuestros valores fundamentales incluyen la calidad, la integridad y el servicio al cliente.</p>
            </div>
            <div class="mt-10 md:mt-0">
              <Image src="/logo.png" alt="Imagen de la empresa" width={300} height={300}/>
            </div>
          </div>
        </main>
    </Layout>
  )
}
