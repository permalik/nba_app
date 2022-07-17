import React from "react";
import Header from "../header";

interface Props {
  children: JSX.Element;
}

const Layout = ({children}: Props) => {
  return (
    <div className='
    bg-slate-900
    min-h-screen
    w-full'>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;