import styles from './Home.module.css'; 

function BtnComprar(){
    return(
        <>
            <button className={styles['btn-comprar']}>Comprar</button>
        </>
    )
}

export default BtnComprar;