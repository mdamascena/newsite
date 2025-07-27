import Head from 'next/head'
import IndexResetSenha from '../../components/resetsenha/IndexResetSenha'

export default function ResetSenha() {
    return (
        <>
            <Head>
                <title>Nova senha</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <IndexResetSenha/>
        </>
  )
}