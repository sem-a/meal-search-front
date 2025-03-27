import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../paths";
import { useDeleteRecipeMutation } from "../../app/services/recipes";

type Props = {
  id?: string;
  title: string;
  description: string;
  photo: string;
  ingredients: {
    _id?: string;
    name: string;
    quantity: string;
    unit: string;
  }[];
  onDelete: (index: string | undefined) => void;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  description,
  photo,
  ingredients,
  onDelete,
}) => {
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleDelete = async () => {
    deleteRecipe(id!);
    onDelete(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.buttons}>
          <Link to={`${PATHS.edit}/${id}`}>изменить</Link>
          <p onClick={handleDelete}>удалить</p>
        </div>
      </div>
      <div className={styles.body}>
        <img src={photo} alt={id} />
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
  );
};
