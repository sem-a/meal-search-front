import React from "react";
import styles from "./index.module.css";

type InputProps = {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const CustomInput: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.customInput}
    />
  );
};

type SelectProps = {
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string | number | readonly string[] | undefined;
};

export const CustomSelect: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <select value={value} onChange={onChange} className={styles.customSelect}>
      {options.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};

type TextareaProps = {
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export const CustomTextarea: React.FC<TextareaProps> = ({
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.customTextarea}
    />
  );
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.customButton}>
      {children}
    </button>
  );
};

type Label = {
  children: React.ReactNode;
  htmlFor?: string;
};

export const CustomLabel: React.FC<Label> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={styles.customLabel}>
      {children}
    </label>
  );
};

type FormItemProps = {
  children: React.ReactNode;
};

export const FormItem: React.FC<FormItemProps> = ({ children }) => {
  return <div className={styles.formItem}>{children}</div>;
};

type FormFlexProps = {
  children: React.ReactNode;
  display?: "flex" | "grid";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  gridTemplateColumns?: string;
  gap?: string;
};

export const FormFlex: React.FC<FormFlexProps> = ({
  children,
  display = "flex",
  alignItems = "center",
  justifyContent = "center",
  gridTemplateColumns,
  gap,
}) => {
  return (
    <div
      style={{ display, alignItems, justifyContent, gridTemplateColumns, gap }}
    >
      {children}
    </div>
  );
};
