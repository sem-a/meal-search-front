import React from "react";
import styles from "./index.module.css";

type Props = {
  list: string[] | undefined;
  onClick: (index: number) => void;
};

export const StepsList: React.FC<Props> = ({ list, onClick }) => {
  if (list === undefined) {
    return <p>Не удалось загрузить шаги!</p>;
  }

  return (
    <div className={styles.list}>
      {list.length !== 0 ? (
        list.map((item, index) => (
          <div
            className={styles.item}
            onClick={() => {
              onClick(index);
            }}
          >
            {`${index + 1}. ${item}`}
            <div className={styles.delete} />
          </div>
        ))
      ) : (
        <p>Вы ничего не ввели</p>
      )}
    </div>
  );
};
