import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Alive</div>
      <div className={styles.text}>
        alive © All rights reserved.
      </div>
    </div>
  )
}

export default Footer