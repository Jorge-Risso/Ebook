import BtnComprar from "./BtnComprar";
import BtnLeiaMais from "./BtnLeiaMais";
import styles from './Home.module.css';

function BtnGroupHome(){
    return(
        <div className={styles['btnGroup']}>
            <BtnComprar/>
            <BtnLeiaMais/>
        </div>
    )
}


export default  BtnGroupHome;