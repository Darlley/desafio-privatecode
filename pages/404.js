import Link from 'next/link';
import styles from '../styles/Error.module.scss';

import Menu from '../components/Menu';

import { useRouter } from 'next/router'

export default function Custom404(){
  const router = useRouter()

  return (
    <>
    <div className={styles.pageError}>
    <Menu />
      <div className={styles.errorContainer}>
        <h1>404 - A pagina {router.asPath} não foi encontrada <i className="bi bi-exclamation-triangle"></i></h1>
        <p>Entre em contato conosco ou volte ao <Link href="/"><a>menu inicial</a></Link> :)</p>
      </div>
    </div>
    </>
  )
}