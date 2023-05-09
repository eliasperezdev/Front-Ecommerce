import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {SiReacthookform} from "react-icons/si"

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
                        <h3 className="text-xl font-semibold text-white uppercase tracking-wider">Navegación</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-md font-base text-white hover:text-gray-900 block">Inicio</a>
                            <a href="#" className="text-md font-base text-white hover:text-gray-900 block">Tienda</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white uppercase tracking-wider">Sobre nosotros</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-md font-base text-white hover:text-gray-900 block">¿Quienes somos?</a>
                            <a href="#" className="text-md font-base text-white hover:text-gray-900 block">¿Como comprar?</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white uppercase tracking-wider">Contactanos</h3>
                        <div className="mt-4 space-y-4">
                            <p className="text-md font-base text-white hover:text-gray-900 block flex gap-2"><HiOutlineMail />isekai@gmail.com</p>
                            <a href="https://www.instagram.com/i.sekai.shop/" rel="noopener noreferrer" className="text-md font-base text-white hover:text-gray-900 block flex gap-2"><BsInstagram />Isekai</a>
                            <Link className="text-md font-base text-white hover:text-gray-900 block flex gap-2" href={"/contact"}>
                                <SiReacthookform/>Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
  