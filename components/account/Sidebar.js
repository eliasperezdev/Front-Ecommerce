
export default function Sidebar() {
    return (
        <div class="col-span-3">
            <div class="px-4 py-3 shadow items-center">
                    <p class="text-gray-600">Hola,</p>
                    <h4 class="text-gray-800 font-medium">Elias</h4>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <a href="#" class="relative text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                        Control de cuenta
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Información personal
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Puntos de retiros
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Cambiar contraseña
                    </a>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-box-archive"></i>
                        </span>
                        Mis ordenes
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        Cancelados
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        My reviews
                    </a>
                </div>
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-arrow-right-from-bracket"></i>
                        </span>
                        Logout
                    </a>
                </div>

            </div>
        </div>
    )
  }
  