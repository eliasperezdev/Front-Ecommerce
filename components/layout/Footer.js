import Image from "next/image";

export default function Footer() {
    return (
    <footer className="bg-gradient-to-b from-red-600 to-red-900 pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
            <div className="col-span-1">
                <div className="">
                    <Image src="/logo.png" width={150} height={150} alt="I sekai"/>
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
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">isekai@gmail.com</a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Isekai</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
  