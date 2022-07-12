import React from "react";

interface Props {
  children: JSX.Element;
}

const Layout = ({children}: Props) => {
  return (
    <>
      {/*<Header/>*/}
      {children}
    </>
  );
};

export default Layout;