import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#home">Home</a></li>
        <li className={styles.navItem}><a href="#about">Sobre</a></li>
        <li className={styles.navItem}><a href="#testimonial">Testemunhos</a></li>
        <li className={styles.navItem}><a href="#newsletter">Newsletter</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
