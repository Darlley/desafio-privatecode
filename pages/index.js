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

import ilustration45 from '../public/illustrations/image45.png'
import ilustration43 from '../public/illustrations/image43.png'

import parceiros from '../public/parceiros.png'

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
          <h1>
            Você escolhe
            <br />o que aprender<span>.</span>
          </h1>
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

      <div className={styles.sectionParceiros}>
        <div className={styles.parceirosImageContainer}>
          <Image src={parceiros} width={1270} heigth={168} />
        </div>
        <div className={styles.parceirosImageBg}></div>
      </div>

      <main className={styles.main}>
        <section className={styles.main_section}>
          <div className={styles.section_left}>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                <Image src={mathRoot} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>100% focado na Matemática</h3>
                <p>
                  Todo material é construído por profissionais especializados e
                  com foco no perfil de cada vestibular.
                </p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                <Image src={workspace} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>Acompanhamento de perto</h3>
                <p>
                  Todo o suporte que você precisa para aprender o conteúdo dos
                  principais vestibulares!.
                </p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <div className={styles.left__container__image}>
                <Image src={mathCompass} width={20} height={20} />
              </div>
              <div className={styles.left__container__description}>
                <h3>Matemática de um jeito fácil</h3>
                <p>
                  Resolução instantânea de qualquer equação algébrica na
                  plataforma, além de vídeos, apostilas, simulados e central de
                  dúvidas 24h!
                </p>
              </div>
            </div>
            <div className={styles.section__left__container}>
              <Link href="#">
                <a className="btnPrimary">
                  Quero ser aprovado
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.section_right}>
            <Image src={description} width={691} height={738} />
          </div>
        </section>

        <section className={styles.main_section}>
          <div className={styles.main_section_container}>
            <div className={styles.section_container_image}>
              <Image src={ilustration45} width={450} height={450} />
            </div>
            <div>
              <span>Quer ser aprovado?</span>
              <h3>Se seu foco é ser aprovado, nós estamos aqui por você.</h3>
              <p>
                Somos um cursinho online especialista em ensinar matemática.
                Temos os melhores professores mestres e doutores para tirar suas
                dúvidas e te ensinar matemática desde a teoria até a resolução
                de exercícios de todos os níveis.
              </p>
            </div>
          </div>

          <div className={styles.main_section_container}>
            <div className={styles.section_container_image}>
              <Image src={ilustration43} width={450} height={450} />
            </div>
            <div>
              <span>100% MATEMÁTICA</span>
              <h3>Matemática para quem quer entrar na facul.</h3>
              <p>
                Somos um cursinho online especialista em ensinar matemática.
                Temos os melhores professores mestres e doutores para tirar suas
                dúvidas e te ensinar matemática desde a teoria até a resolução
                de exercícios de todos os níveis.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.main_section}>
          <div className={styles.main_section_card_title}>
            <span>NOSSOS PLANOS</span>
            <h2>Invista no seu futuro</h2>
          </div>

          <div className={styles.section_card}>
            <div className={styles.section_cardContainer}>
              <div className={styles.section_card_titleContainer}>
                <div className={styles.card_title}>
                  <span>1 ano de acesso</span>
                  <h3>Plano Recomendado</h3>
                </div>
                <div className={styles.section_card_starContainer}>
                  <p>
                    <span>70%</span> <br />
                    de desconto
                  </p>
                </div>
              </div>

              <div className={styles.section_cardContent}>
                <span>vantagens</span>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Acesso a todos os benefícios da Plataforma <br />
                    (Videoaulas, Exercícios, Apostilas e muito mais)
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    36 aulas ao vivo
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Revisão para o ENEM
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Grupo no Whatsapp com professores e alunos
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Reforço para FUVEST, Unicamp e Vestibulares de Medicina
                  </li>
                </ul>
              </div>

              <div className={styles.section_cardValues}>
                <div className={styles.cardValuesContainer}>
                  <div className={styles.cardValuesContainerPosition}>
                    <div>
                      <span>R$</span>
                    </div>
                    <div>
                      <p>
                        de R$178,80
                        <br />
                        <span>49,90</span>
                        /ano
                      </p>
                    </div>
                  </div>
                  <div className={styles.cardValuesContainerPosition}>
                    <p>Menos de 5 reais por mês :)</p>
                  </div>
                </div>
                <div className={styles.cardValuesContainer}>
                  <Link href="#">
                    <a className={styles.buttonCard}>Eu quero!</a>
                  </Link>
                </div>
              </div>

            </div>

            <div className={styles.section_cardContainer}>
              <div className={styles.section_card_titleContainer}>
                <div className={styles.card_title}>
                  <span>6 meses de acesso</span>
                  <h3>Plano Aprovado</h3>
                </div>
              </div>

              <div className={styles.section_cardContent}>
                <span>vantagens</span>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Acesso a todas as video aulas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Ganhe pontos resolvendo questões e troque por prêmios
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    3.000 exercícios com resolução em vídeo
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    4 apostilas com todo o conteúdo de Matemática
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>
                    Reforço para FUVEST, Unicamp e Vestibulares de Medicina
                  </li>
                </ul>
              </div>

              <div className={styles.section_cardValues}>
                <div className={styles.cardValuesContainer}>
                  <div className={styles.cardValuesContainerPosition}>
                    <div>
                      <span>R$</span>
                    </div>
                    <div>
                      <p>
                        <span>39,90</span>
                        /semestre
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.cardValuesContainer}>
                  <Link href="#">
                    <a className={styles.buttonCard}>Eu quero!</a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  )
}
