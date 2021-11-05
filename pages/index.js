import Head from 'next/head'
import Image from 'next/image'

import Menu from '../components/Menu'

// import styles from '../styles/Home.module.scss'
import ilustrationHome from '../public/illustrations/Home.svg'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Desafio | Privatecode</title>
        <meta name="description" content="Landingpage para o desafio da privatecode" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#252160" />
      </Head>

      <header>
        <Menu />
      </header>
    </div>
  )
}