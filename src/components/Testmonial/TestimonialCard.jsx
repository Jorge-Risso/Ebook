import React from "react";
import styles from "./Testimonial.module.css";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        — {name}, <span>{role}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
