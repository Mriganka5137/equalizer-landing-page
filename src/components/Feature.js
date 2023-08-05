import styles from "./Feature.module.css";
import pattern2 from "../assets/bg-pattern-2.svg";
function Feature() {
  return (
    <section className={styles.feature_container}>
      <img src={pattern2} alt="pattern" className={styles.pattern2} />
    </section>
  );
}

export default Feature;
