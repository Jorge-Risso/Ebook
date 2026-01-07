import BtnGroupHome from './BtnGroupHome';
import styles from './Home.module.css'; 

function TextHome(){
    return(
        <div className={styles['home-text']}>
            <h1>Domine Seu Tempo,</h1>
            <h1>Conquiste Sua Vida</h1>
            <p>Descubra os segredos da produtividade que transformarão sua rotina e impulsionarão seus resultados em apenas 21 dias.</p>
            <BtnGroupHome/>
        </div>
    )
}


export default TextHome;