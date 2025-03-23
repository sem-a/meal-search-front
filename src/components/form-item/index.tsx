import React from "react";
import styles from "./index.module.css";

type InputProps = {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string | undefined;
  id?: string | undefined;
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
};

type LabelProps = {
  htmlFor?: string | undefined;
  children: React.ReactNode;
};

type SelectProps = {
  name?: string | undefined;
  id?: string | undefined;
  options?: any[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type FormItemProps = {
  children: React.ReactNode;
};

type FormFlexProps = {
  children: React.ReactNode;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gridTemplateColumns?: string;
  gap?: string;
};

type TextareaProps = {
  name?: string | undefined;
  id?: string | undefined;
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

type FormList = {
  list: string[];
  onClick: (index: number) => void;
};
type FormIngredientList = {
  list: {
    name: string;
    quantity: string;
    unit: string;
  }[];
  onClick: (index: number) => void;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.customInput}
      placeholder={placeholder}
    />
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <textarea
      className={styles.customTextarea}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={styles.customLabel}>
      {children}
    </label>
  );
};

export const Select: React.FC<SelectProps> = ({
  name,
  id,
  options,
  value,
  onChange,
}) => {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.customSelect}
    >
      {options?.map((el, index) => (
        <option key={index}>{el}</option>
      ))}
    </select>
  );
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.customButton}>
      {children}
    </button>
  );
};

export const FormItem: React.FC<FormItemProps> = ({ children }) => {
  return <div className={styles.formItem}>{children}</div>;
};

export const FormFlex: React.FC<FormFlexProps> = ({
  children,
  display = "flex",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  gridTemplateColumns,
  gap,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display,
        alignItems,
        justifyContent,
        gridTemplateColumns,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export const IngredientsList: React.FC<FormIngredientList> = ({
  list,
  onClick,
}) => {
  return (
    <div className={styles.ingredientsList}>
      {list.length !== 0 ? (
        list.map((item, index) => (
          <div
            key={index}
            className={styles.ingredientItem}
            onClick={() => onClick(index)}
          >
            {`${item.name} - ${item.quantity} ${item.unit}.`}
            <div className={styles.delete}></div>
          </div>
        ))
      ) : (
        <p>вы еще не ввели ингредиенты</p>
      )}
    </div>
  );
};

export const StepsList: React.FC<FormList> = ({ list, onClick }) => {
  return (
    <div className={styles.stepsList}>
      {list.length !== 0 ? (
        list.map((item, index) => (
          <div
            key={index}
            className={styles.stepsItem}
            onClick={() => onClick(index)}
          >
            {`${index + 1}. ${item}`}
            <div className={styles.delete}></div>
          </div>
        ))
      ) : (
        <p>вы еще не ввели шаги</p>
      )}
    </div>
  );
};
