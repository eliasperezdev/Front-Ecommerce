import Sidebar from "components/layout/PruebaSidebar";
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isMenuOpen={isMenuOpen}/>
      <header className="bg-gradient-to-b from-red-600 to-red-700 text-white w-full md:hidden">
        <div className="container mx-auto flex justify-between items-center py-1">
          <div className="flex items-center" href={"/"}>
            <Image src="/logo.png" width={60} height={60} alt="I sekai"/>
            <h1 className="text-lg font-semibold mx-2"> I sekai</h1>
          </div>
          <button
              onClick={handleMenuToggle}
              className="focus:outline-none focus:text-gray-400 mx-10"
            >
              <RxHamburgerMenu/>
            </button>
        </div>
      </header>

      {/* Contenido del Dashboard */}
      <div className="flex flex-col flex-grow">
        {/* Header del Dashboard */}
        {/* Aquí puedes colocar tu header, logo, buscador, botones, etc. */}

        {/* Contenido principal del Dashboard */}
        <div className="flex-grow">
          {/* Aquí puedes colocar el contenido principal de tu Dashboard */}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;