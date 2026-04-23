import Head from "next/head";

import PageTransicao from "../components/geral/PageTransicao";

export default function PageTransicaoRoute() {
  return (
    <>
      <Head>
        <title>Transicao | Valoreal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageTransicao />
    </>
  );
}
