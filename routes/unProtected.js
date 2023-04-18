import { routes }  from "../constants"
import { useContext } from "react";
import authContext from "../context/auth/authContext";
import { useRouter } from "next/router";

const isBrowser = () => typeof window !=="undefined";

export const ProtectedRoute = ({ children}) => {
    const router = useRouter()
    const AuthContext = useContext(authContext)
    const { usuario } = AuthContext

    const isAuthenticated = usuario
    let unProtectedRoutes = [
        routes.ACCOUNT,
        routes.ADDRESS,
        routes.FAVORITIES,
        routes.NEW_CATEGORY,
        routes.NEW_EDITORIAL,
        routes.NEW_PRODUCT,
        routes.PROFILE,
        routes.ADMIN,
        routes.CATEGORY,
        routes.CLIENTS,
        routes.EDITORIALS,
        routes.PRODUCTS,
        routes.SALES,
        routes.ORDERS,
    ]

    let pathIsProtected = unProtectedRoutes.indexOf(router.pathname) !== -1

    if(isBrowser() && !isAuthenticated && pathIsProtected) {
        router.push(routes.LOGIN);
    }

    return children
}

