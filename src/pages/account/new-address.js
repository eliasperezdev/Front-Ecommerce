import FormAddress from "components/account/FormAddress";
import Layout from "components/layout/Layout";
import Link from "next/link";
import { useContext,useEffect } from "react"

export default function Info() {

    return (
        <Layout>
            <FormAddress />
        </Layout>
    )
  }
