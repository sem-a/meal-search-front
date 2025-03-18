import React, { useState } from "react";
import styles from "./index.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

type FlexProps = {
  children: React.ReactNode;
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: string;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const Flex: React.FC<FlexProps> = ({
  children,
  alignItems = "center",
  justifyContent = "center",
  gap = "21px",
}) => {
  const style = {
    alignItems,
    justifyContent,
    gap,
  };

  return (
    <div style={style} className={styles.flex}>
      {children}
    </div>
  );
};
