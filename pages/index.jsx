import Head from "next/head"
import IndexPrincipal from "../components/PRINCIPAL/IndexPRINCIPAL"

export default function Principal() {

    return (
        <>
            <Head>
                <title>Valoreal Crédito Online</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#00024A" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Dongle:wght@300&family=Gochi+Hand&family=Poppins&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/8d9284e27b.js" crossOrigin="anonymous" async></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
            </Head>
            <IndexPrincipal />
        </>
    )
}