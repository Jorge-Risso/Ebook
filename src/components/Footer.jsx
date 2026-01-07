import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.socialIcons}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>

        <div className={styles.links}>
          <a href="/faq">FAQ</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Jorge Risso. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
