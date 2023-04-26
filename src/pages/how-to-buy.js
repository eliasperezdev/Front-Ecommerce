import Layout from 'components/layout/Layout'
import React from 'react'

export default function HowToBuy() {
  return (
    <Layout>
          <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">¿Cómo comprar en nuestra tienda?</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-4">
            <p className="font-semibold">Busca el producto que te interese:</p>
            <p>Explora nuestro catálogo y encuentra los productos que más te gusten.</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Agrega el producto al carrito:</p>
            <p>Haz clic en el botón "Agregar al carrito" en la página del producto para añadirlo a tu carrito de compras.</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Revisa tu carrito de compras:</p>
            <p>En la parte superior de la página encontrarás un icono de carrito de compras. Haz clic en él para revisar los productos que has agregado y su precio total.</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Inicia sesión o crea una cuenta (opcional):</p>
            <p>Para completar tu compra, necesitas iniciar sesión o crear una cuenta en nuestro sitio web.</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Completa tu compra:</p>
            <p>Sigue las instrucciones en pantalla para proporcionar la información de envío y de pago necesaria para completar tu compra.</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Recibe tu pedido:</p>
            <p>¡Listo! Ahora solo tienes que esperar a que llegue tu pedido a la dirección que proporcionaste. ¡Gracias por comprar en nuestra tienda!</p>
          </li>
        </ol>
      </div>
    </section>
    </Layout>
  )
}
