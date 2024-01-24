import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Living Lores</div>
      <div className={styles.text}>
        living lores © All rights reserved.
      </div>
    </div>
  )
}

export default Footer