import Image from 'next/image'
import Link from 'next/link'

import Menu from '../components/Menu'
import Head from '../src/infra/components/Head'

import styles from '../styles/Home.module.scss'

import ilustrationHome from '../public/illustrations/header.png'
import robot from '../public/icons/icon-robot.png'
import mathRoot from '../public/icons/math-root.svg'
import mathCompass from '../public/icons/math-compass.svg'
import workspace from '../public/icons/workspace.svg'
import description from '../public/description.jpg'

export default function Home() {
  return (
    <>
      <Head title="Página inicial" />
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

      <main className={styles.main}>

        <section className={styles.main_section}>
          <div className={styles.section_left}>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                  <Image src={mathRoot} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>100% focado na Matemática</h3>
                <p>Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular.</p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                <Image src={workspace} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>Acompanhamento de perto</h3>
                <p>Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!.</p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                <Image src={mathCompass} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>Matemática de um jeito fácil</h3>
                <p>Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!</p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <Link href="#"><a className="btnPrimary">
                Quero ser aprovado
                <i className="bi bi-arrow-right"></i>
              </a></Link>
            </div>
          </div>
          <div className={styles.section_right}>
            <Image src={description} width={691} height={738} />
          </div>
        </section>

        <section className={styles.main_section}></section>

      </main>

      <footer></footer>
    </>
  )
}