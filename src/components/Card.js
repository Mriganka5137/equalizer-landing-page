import styles from "./Card.module.css";
import android from "../assets/icon-android.svg";
import apple from "../assets/icon-apple.svg";
function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Premium EQ</h2>
      <p className={styles.description}>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className={styles.price_month}>
        <span className={styles.price}>$4</span>/ month
      </p>
      <p className={`${styles.btn} ${styles.apple}`}>
        <img src={apple} alt="apple logo" className={styles.icon} />
        iOS Download
      </p>
      <p className={`${styles.android} ${styles.btn}`}>
        <img src={android} alt="android logo" className={styles.icon} />
        Android Download
      </p>
    </div>
  );
}

export default Card;
