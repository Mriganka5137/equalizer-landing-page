import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <img src={logo} alt="logo" className={styles.logo} />
      </nav>
      <h1 className={styles.primary_heading}>
        We make your music sound extraordinary.
      </h1>
      <p className={styles.description}>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </header>
  );
}

export default Header;
