import React from "react";
import styles from "./index.module.css";

type InputProps = {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string | undefined;
  id?: string | undefined;
};

type LabelProps = {
  htmlFor?: string | undefined;
  children: React.ReactNode;
};

type SelectProps = {
  name?: string | undefined;
  id?: string | undefined;
  options?: any[];
};

type ButtonProps = {
  children: React.ReactNode;
};

type FormItemProps = {
  children: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({ type = "text", name, id }) => {
  return (
    <input type={type} name={name} id={id} className={styles.customInput} />
  );
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={styles.customLabel}>
      {children}
    </label>
  );
};

export const Select: React.FC<SelectProps> = ({ name, id, options }) => {
  return (
    <select name={name} id={id} className={styles.customSelect}>
      {options?.map((el, index) => (
        <option key={index}>{el}</option>
      ))}
    </select>
  );
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.customButton}>{children}</button>;
};

export const FormItem: React.FC<FormItemProps> = ({ children }) => {
  return <div className={styles.formItem}>{children}</div>;
};
