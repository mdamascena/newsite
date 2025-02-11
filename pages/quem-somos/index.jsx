import Head from 'next/head'
import IndexQuemSomos from '../../components/quemsomos/IndexQuemSomos'

export default function CredLuz() {
    return (
        <>
            <Head>
                <title>Quem Somos</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <IndexQuemSomos/>
        </>
  )
}