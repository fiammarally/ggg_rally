import React from "react"
import "./layout.css"
import "./reboot.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">{children}</div>
  );
};

export default Layout;