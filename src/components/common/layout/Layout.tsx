import React from "react";
import Header from "../header";

interface Props {
  children: JSX.Element;
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default Layout;