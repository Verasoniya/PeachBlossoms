import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FFF5E4]">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
