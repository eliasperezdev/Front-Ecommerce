export default function Footer() {
    return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
            <div className="col-span-1 space-y-8">
                <h1 className="text-2xl">I Sekai</h1>
                <div className="mr-2">
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-facebook-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-instagram-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-twitter-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>

            <div className="col-span-2 gap-8">
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Navegación</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Inicio</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Tienda</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Sobre nosotros</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">¿Quienes somos?</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">¿Como comprar?</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contactanos</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">email</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">redes sociales</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
  