import React from "react";
import styles from "./index.module.css";

type Props = {
  list:
    | {
        name: string;
        quantity: string;
        unit: string;
      }[]
    | [] | undefined;
  onClick: (index: number) => void;
};

export const IngredientsList: React.FC<Props> = ({ list, onClick }) => {

  if (list === undefined) {
    return <p>Не удалось загрузить ингредиенты!</p>
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
            {`${item.name} - ${item.quantity} ${item.unit}`}
            <div className={styles.delete} />
          </div>
        ))
      ) : (
        <p>Вы ничего не ввели</p>
      )}
    </div>
  );
};
