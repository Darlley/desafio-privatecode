import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../components/Menu'

import styles from '../styles/Home.module.scss'

import ilustrationHome from '../public/illustrations/header.png'
import robot from '../public/icon-robot.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio | Privatecode</title>
        <meta
          name="description"
          content="Landingpage para o desafio da privatecode"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#252160" />
      </Head>

      <Menu />
      <header className={styles.header}>

        <div className={styles.headerContent}>
          <div className={styles.retangule}></div>

          <div>
            <Image src={robot} width={51} height={37} />
            <span>Seja aprovado no Enem e Vestibulares :)</span>
          </div>
          <h1>Você escolhe<br />o que aprender<span>.</span></h1>
          <p>
            Aqui você terá toda assistência que precisa com materiais
            desenvolvidos por <strong>mestres e doutores em matemática</strong>.
          </p>
          <Link href="#">
            <a className={styles.headerButtom}>
              Veja nossos planos
              <i className="bi bi-arrow-right"></i>
            </a>
          </Link>

        </div>

        <div className={styles.ilustrations}>
          <Image src={ilustrationHome} width={656} height={586} />
        </div>

      </header>
    </>
  )
}
