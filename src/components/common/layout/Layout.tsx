import React from "react";

type Props = {
  children: JSX.Element
}

const Layout = (children: Props) => {

  return (
    <>
      {/*<Header/>*/}
      {children}
    </>
  );
};

export default Layout;