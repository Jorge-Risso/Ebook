import React from "react";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "André M.",
    role: "Designer Freelancer",
    text: "Eu sempre tive dificuldade em manter uma rotina produtiva, mas esse ebook mudou tudo. Em menos de 3 semanas, comecei a acordar com propósito e terminar o dia com a sensação de missão cumprida. O método funciona de verdade!",
  },
  {
    name: "Carolina S.",
    role: "Mãe e Empreendedora",
    text: "Não é só sobre produtividade — é sobre reconquistar o controle da minha vida. 'Domine Seu Tempo' me ajudou a entender o que realmente importa e como priorizar de forma inteligente. Me sinto mais leve, focada e com tempo para mim.",
  },
  {
    name: "Rodrigo V.",
    role: "Gerente de Projetos",
    text: "Já li muitos conteúdos sobre produtividade, mas esse foi o único que me fez agir. O plano de 21 dias é simples, prático e poderoso. Hoje sou mais organizado, assertivo e tenho mais resultados com menos esforço.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>O que estão dizendo sobre o ebook</h2>
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
