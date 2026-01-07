import styles from './Sobre.module.css';
import { FiRepeat, FiTarget, FiSun, FiActivity, FiLock, FiCommand, FiSliders } from 'react-icons/fi';

const topicos = [
  {
    icon: <FiRepeat />,
    titulo: 'Hábitos duradouros',
    descricao: 'Crie hábitos sólidos mesmo com pouca disciplina.'
  },
  {
    icon: <FiTarget />,
    titulo: 'Foco e produtividade',
    descricao: 'Use técnicas comprovadas para atingir metas com clareza.'
  },
  {
    icon: <FiSun />,
    titulo: 'Manhãs energizadas',
    descricao: 'Comece o dia com energia e intenção estratégica.'
  },
  {
    icon: <FiActivity />,
    titulo: 'Neurociência de hábitos',
    descricao: 'Entenda como seu cérebro forma e quebra hábitos.'
  },
  {
    icon: <FiLock />,
    titulo: 'Constância real',
    descricao: 'Mantenha resultados sem depender de motivação.'
  },

  {
    icon: <FiSliders />,
    titulo: 'Gerenciamento Inteligente',
    descricao: 'Otimize seu tempo com ferramentas e estratégias eficazes.'
  }

];

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.textContainer}>
        <h2 className={styles.titulo}>O que você vai aprender</h2>
        <p className={styles.subtitulo}>Um Guia Prático, Rápido e Direto ao Ponto</p>

        <div className={styles.topicosGrid}>
          {topicos.map((topico, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{topico.icon}</div>
              <div>
                <h3>{topico.titulo}</h3>
                <p>{topico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
