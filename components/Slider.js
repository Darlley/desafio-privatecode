import { useRef } from 'react'
import Image from 'next/image'

import styles from '../styles/Slider.module.scss'

// assets
import userImg from '../public/recomendacoes/user-undefined.png'
import darlleyImg from '../public/recomendacoes/darlley-brito.jpg'
import amandaImg from '../public/recomendacoes/amanda-merien.png'
import lucasImg from '../public/recomendacoes/lucas-correia.png'
import rodrigoImg from '../public/recomendacoes/rodrigo-godoi.png'
import stars from '../public/recomendacoes/avaliationStars.png'
import citation from '../public/illustrations/citation.png'

export default function Slider() {
  const slider = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()
    slider.current.scrollLeft -= slider.current.offsetWidth
  }
  const handleRightClick = e => {
    e.preventDefault()
    slider.current.scrollLeft += slider.current.offsetWidth
  }

  return (
    <div className={styles.sliderContainer}>
      <button
          className={styles.buttonsContainerButton}
          onClick={handleLeftClick}
          onTouchStart={handleLeftClick}
        >
          <i className="bi bi-chevron-left"></i>
      </button>
     
      <div className={styles.slideCards} ref={slider}>
        <div className={styles.slideCard}>
          <div className={styles.slideCardContainer}>
            <Image src={stars} width={162} height={26} />
          </div>
          <div className={styles.slideCardContainer}>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
          </div>
          <div className={styles.slideCardContainer}>
            <div>
              <Image src={darlleyImg} width={60} height={60} />
            </div>
            <div>
              <h3>Darlley Brito</h3>
              <p>Web Developer</p>
            </div>
            <div>
              <Image src={citation} width={44} height={34} />
            </div>
          </div>
        </div>

        <div className={styles.slideCard}>
          <div className={styles.slideCardContainer}>
            <Image src={stars} width={162} height={26} />
          </div>
          <div className={styles.slideCardContainer}>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
          </div>
          <div className={styles.slideCardContainer}>
            <div>
              <Image src={amandaImg} width={60} height={60} />
            </div>
            <div>
              <h3>Amanda Merien</h3>
              <p>Analista junior</p>
            </div>
            <div>
              <Image src={citation} width={44} height={34} />
            </div>
          </div>
        </div>

        <div className={styles.slideCard}>
          <div className={styles.slideCardContainer}>
            <Image src={stars} width={162} height={26} />
          </div>
          <div className={styles.slideCardContainer}>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
          </div>
          <div className={styles.slideCardContainer}>
            <div>
              <Image src={lucasImg} width={60} height={60} />
            </div>
            <div>
              <h3>Lucas Correia</h3>
              <p>CEO / Criative IT</p>
            </div>
            <div>
              <Image src={citation} width={44} height={34} />
            </div>
          </div>
        </div>

        <div className={styles.slideCard}>
          <div className={styles.slideCardContainer}>
            <Image src={stars} width={162} height={26} />
          </div>
          <div className={styles.slideCardContainer}>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
          </div>
          <div className={styles.slideCardContainer}>
            <div>
              <Image src={rodrigoImg} width={60} height={60} />
            </div>
            <div>
              <h3>Rodrigo Godoi</h3>
              <p>Presidente / Amazon</p>
            </div>
            <div>
              <Image src={citation} width={44} height={34} />
            </div>
          </div>
        </div>


        <div className={styles.slideCard}>
          <div className={styles.slideCardContainer}>
            <Image src={stars} width={162} height={26} />
          </div>
          <div className={styles.slideCardContainer}>
            <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
          </div>
          <div className={styles.slideCardContainer}>
            <div>
              <Image src={userImg} width={60} height={60} />
            </div>
            <div>
              <h3>Fulano Tal</h3>
              <p>Aluno</p>
            </div>
            <div>
              <Image src={citation} width={44} height={34} />
            </div>
          </div>
        </div>

        <div className={styles.slideCard}></div>
      </div>

      <button
          className={styles.buttonsContainerButton}
          onClick={handleRightClick}
          onTouchStart={handleRightClick}
        >
          <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  )
}
