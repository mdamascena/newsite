import Head from 'next/head'
import IndexCP from '../../components/boleto/IndexCP'

export default function Home() {
  return (
    <>
        <Head>
            <title>Valoreal Crédito Online</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <IndexCP />
    </>

  )
}
