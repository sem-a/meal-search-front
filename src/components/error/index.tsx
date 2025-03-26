import React from "react";
import styles from "./index.module.css";

const ServerError: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <h2>500 - Ошибка сервера</h2>
      <p>Произошла ошибка на сервере. Пожалуйста, попробуйте позже.</p>
    </div>
  );
};

export default ServerError;
