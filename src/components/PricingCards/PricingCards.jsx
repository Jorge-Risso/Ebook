import React from "react";
import styles from "./PricingCards.module.css";

const plans = [
  {
    title: "Edição Básica",
    desc: "Acesso imediato ao ebook digital em PDF.",
    bullets: [
      "21 dias de plano de produtividade",
      "Conteúdo direto ao ponto",
      "Ideal para iniciantes",
    ],
    price: "R$ 49,90",
    link: "#",
  },
  {
    title: "Edição Completa",
    desc: "A solução ideal para colocar tudo em prática com suporte.",
    bullets: [
      "Ebook digital completo",
      "Planilhas de produtividade",
      "Vídeos exclusivos de acompanhamento",
    ],
    price: "R$ 99,90",
    link: "#",
  },
  {
    title: "Edição Premium",
    desc: "A experiência mais completa para quem quer acelerar os resultados.",
    bullets: [
      "Tudo da edição completa",
      "Suporte via WhatsApp",
      "Atualizações futuras gratuitas",
    ],
    price: "R$ 149,90",
    link: "#",
  },
];

const PricingCards = () => {
  return (
    <section className={styles.section} id="planos">
      <h2 className={styles.title}>Escolha sua edição</h2>
      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <div key={i} className={styles.card}>
            <h3>{plan.title}</h3>
            <p className={styles.desc}>{plan.desc}</p>
            <ul className={styles.list}>
              {plan.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className={styles.price}>{plan.price}</div>
            <a href={plan.link} className={styles.button}>
              Comprar agora
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
