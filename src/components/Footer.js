import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.copyright_container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p>
          All rights reserved © Equalizer 2021
          <br /> Have any problems? Contact us via social media or email us at{" "}
          <strong>equalizer@example.com</strong>
        </p>
      </div>
      <div className={styles.socials_container}>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </footer>
  );
}

export default Footer;
