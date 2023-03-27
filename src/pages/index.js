import Categories from "components/index/Categories";
import Features from "components/index/Features";
import NewArrival from "components/index/NewArrival";
import Recommend from "components/index/Recommend";
import Layout from "components/layout/Layout";
import { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";

export default function Home() {

  const AuthContext = useContext(authContext)
  const {usuarioAutenticado} = AuthContext

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      usuarioAutenticado()
    }
   
  }, []);

  return (
    
    <Layout>
      <Features/>
      <Categories/>
      <NewArrival/>
      <Recommend/>
    </Layout>
  )
}
