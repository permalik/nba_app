import React from "react";
import Header from "../header";

interface Props {
  children: JSX.Element;
}

const Layout = ({children}: Props) => {
  return (
    <div className='
    min-h-screen
    w-full'>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;