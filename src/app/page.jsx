import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Express the infinity, yourself</h1>
      <p className={styles.desc}>
        A world that you have enclosed deep inside of you, deserved to be put into life through words. Let those words flow and help us become instrumental in giving it a right direction.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/writing2.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>
  );
};

export default Home;