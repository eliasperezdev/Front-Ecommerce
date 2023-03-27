import Info from "components/account/Info";
import Sidebar from "components/account/Sidebar";
import Layout from "components/layout/Layout";

export default function Account() {
    return (
    <Layout>
        <div className="flex">
            <Sidebar/>
            <Info/>

        </div>
    </Layout>
    )
  }
  