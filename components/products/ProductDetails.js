export default function ProductDetails() {
    return (
    <div class="container grid grid-cols-2 gap-6">
        <div>
            <img src="../assets/images/bluelock.jpeg" alt="product" class="w-full"/>
            <div class="grid grid-cols-5 gap-4 mt-4">
                <img src="../assets/images/bluelock.jpeg" alt="product2"
                    class="w-full cursor-pointer border border-primary"/>
                <img src="../assets/images/bluelock.jpeg" alt="product2" class="w-full cursor-pointer border"/>
                <img src="../assets/images/bluelock.jpeg" alt="product2" class="w-full cursor-pointer border"/>
                <img src="../assets/images/bluelock.jpeg" alt="product2" class="w-full cursor-pointer border"/>
                <img src="../assets/images/bluelock.jpeg" alt="product2" class="w-full cursor-pointer border"/>
            </div>
        </div>

        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">Blue lock</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Disponibilidad: </span>
                    <span class="text-green-600">En Stock</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Editorial: </span>
                    <span class="text-gray-600">Ivrea</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Categoria: </span>
                    <span class="text-gray-600">Manga</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">ISBN: </span>
                    <span class="text-gray-600">978 - 950 - 0000 - 00 - 0</span>
                </p>
            </div>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p class="text-xl text-primary font-semibold">$45.00</p>
            </div>

            <p class="mt-4 text-gray-600">La eliminación del seleccionado japonés del Mundial de 2018 impulsa a la Asociación de Fútbol de Japón a iniciar un programa para captar jugadores de los equipos de escuelas secundarias y prepararlos para la próxima Copa del Mundo en 2022. Pero no de la forma más habitual…

                El objetivo es destruir la mentalidad perdedora de los futbolistas japoneses. Para eso, introduce un nuevo y radical régimen de entrenamiento: aislar a 300 jóvenes delanteros en una escuela/prisión llamada “Blue Lock” para que entrenen rigurosamente y, así, producir al delantero más egoísta del mundo.</p>

            <div class="mt-4"><h3>Cantidad</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>

            <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <a href="#"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i class="fa-solid fa-bag-shopping"></i> Añadir al carrito
                </a>
            </div>

        </div>
    </div>
    )
  }
  