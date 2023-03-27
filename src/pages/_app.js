import '@/styles/globals.css'
import AuthState from '../../context/auth/authState'
import ProductState from '../../context/product/productState'
import ClientState from '../../context/clients/clientState'
import ShoppingCartState from '../../context/shoppingCart/shoppingCartState'

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartState>
      <ClientState>
        <ProductState>
          <AuthState>
            <Component {...pageProps} />
          </AuthState>
        </ProductState>
      </ClientState>
    </ShoppingCartState>
)}
