import React, { useState } from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Receba dicas exclusivas de produtividade</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Inscrever
          </button>
        </form>
        {status === "success" && (
          <p className={styles.success}>Inscrição realizada com sucesso!</p>
        )}
        {status === "error" && (
          <p className={styles.error}>E-mail inválido. Tente novamente.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
