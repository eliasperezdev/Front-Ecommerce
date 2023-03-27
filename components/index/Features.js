export default function Features() {
    return (
    <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/images/icons/delivery-van.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Envios a domicilio</h4>
                    <p className="text-gray-500 text-sm"></p>
                </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/images/icons/money-back.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Tarjetas</h4>
                    <p className="text-gray-500 text-sm">Aceptamos todas las tarjetas</p>
                </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/images/icons/service-hours.svg" alt="Delivery" className="w-12 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Atención lunes a viernes</h4>
                    <p className="text-gray-500 text-sm">Atención personalizada</p>
                </div>
            </div>
        </div>
    </div>
    )
  }
  