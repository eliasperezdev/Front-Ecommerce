import '@/styles/globals.css'
import AuthState from '../../context/auth/authState'
import ProductState from '../../context/product/productState'
import ClientState from '../../context/clients/clientState'
import ShoppingCartState from '../../context/shoppingCart/shoppingCartState'
import UserState from '../../context/user/userState'
import { ProtectedRoute } from 'routes/unProtected'

export default function App({ Component, pageProps }) {
  return (
    <AuthState>
      <UserState>
        <ShoppingCartState>
          <ClientState>
            <ProductState>
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            </ProductState>
          </ClientState>
        </ShoppingCartState>
      </UserState>
    </AuthState>
)}
