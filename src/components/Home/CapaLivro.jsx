import livroCapa from '../../assets/img/livrocapa2.png';
import styles from './Home.module.css'; 


function CapaLivro(){
    return(
        <div className={styles['home-image']}>
           <img src={livroCapa} alt="Capa do Livro" />
        </div>
    )
}


export default CapaLivro;