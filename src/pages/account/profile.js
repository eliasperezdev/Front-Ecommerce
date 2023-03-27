import Profile from "components/account/profile";
import Layout from "components/layout/Layout";
import Sidebar from "components/account/Sidebar";

export default function Home() {
    return (
      <Layout>
        <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            <Sidebar/>  
            <Profile/>

        </div>
      </Layout>
    )
  }
  