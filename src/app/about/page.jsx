
import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          We give you a canvas where you can draw your thoughts, emotions and souls
        </h1>
        <p className={styles.desc}>
          We provide you a platform where you can express yourself through words. We believe that every person has a story to tell and we are here to help you tell yours. We are here to help you become a better version of yourself. We are here to help you become ALIVE.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>500 K+</h1>
            <p>Tales told</p>
          </div>
          <div className={styles.box}>
            <h1>20 K+</h1>
            <p>Souls arrived</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Happy Hearts</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/writing1.gif"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default AboutPage