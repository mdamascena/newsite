import Head from 'next/head'
import IndexAtendimento from '../../components/atendimento/IndexAtendimento'

export default function Atendimento() {
    return (
    <>
        <Head>
            <title>Atendimento Valoreal</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <IndexAtendimento/>
    </>
  )
}