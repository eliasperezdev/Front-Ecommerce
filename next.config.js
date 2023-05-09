/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  serverRuntimeConfig: {
    // Permitir descarga de archivos
    headers: {
      'Content-Disposition': 'attachment',
    },
  },
  devIndicators: {
    autoPrerender: false,
  },
  server: {
    // Reemplaza la dirección IP por la dirección IP de tu máquina
    // También puedes utilizar '0.0.0.0' para escuchar en todas las interfaces
    // de red, pero esto puede ser inseguro en algunos casos
    host: '192.168.1.43',
  },
}


module.exports = nextConfig
