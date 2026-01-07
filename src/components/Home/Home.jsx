import CapaLivro from './CapaLivro';
import TextHome from './TextHome';
import styles from './Home.module.css';


function Home(){
    return(
        <div className={styles.home}>
            <TextHome className={styles['home-text']} />
            <CapaLivro className={styles['home-image']} />
        </div>
    )
}


export default Home;