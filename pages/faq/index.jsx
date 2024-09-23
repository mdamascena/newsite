import Head from "next/head"
import IndexFAQ from "../../components/FAQ/indexFAQ"

export default function FAQ() {
    return (
        <>
            <Head>
                <title>Valoreal - FAQ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <IndexFAQ/> 
        </>
    )
}