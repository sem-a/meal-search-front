import React from "react";
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
    | "space-around"
    | "space-between";
  gap?: string;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const Flex: React.FC<FlexProps> = ({
  children,
  alignItems = "center",
  justifyContent = "center",
  gap,
}) => {
  return (
    <div style={{ display: "flex", alignItems, justifyContent, gap }}>
      {children}
    </div>
  );
};