import React from "react";
import Header from "../header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{paddingTop: '150px'}}>{children}</div>
    </>
  );
};

export default Layout;
