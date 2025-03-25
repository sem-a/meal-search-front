import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../paths";

type Props = {
  id?: string;
  title: string;
  description: string;
  ingredients: {
    _id?: string;
    name: string;
    quantity: string;
    unit: string;
  }[];
  photo: string;
};

const Card: React.FC<Props> = ({
  id,
  title,
  description,
  ingredients,
  photo,
}) => {
  return (
    <Link to={`${PATHS.recipe}${id}`}>
      <div className={styles.card}>
        <div className={styles.flex}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.edit}>
            <Link to={`${PATHS.edit}/${id}`}>Изменить</Link>
          </div>
        </div>
        <div className={styles.body}>
          <img src={photo} alt="photo" />
          <div className={styles.text}>
            <p className={styles.description}>{description}</p>
            <div className={styles.ingredients}>
              {ingredients.map((item) => (
                <div key={item._id} className={styles.item}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
