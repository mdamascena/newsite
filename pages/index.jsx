import Head from "next/head"
import IndexPrincipal from "../components/PRINCIPAL/IndexPRINCIPAL"

export default function Principal() {
    return (
        <>
            <Head>
                <title>Valoreal Crédito Online</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <IndexPrincipal />
        </>
    )
}