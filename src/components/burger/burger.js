import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

const Burger = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/burgers">
        Burgers
      </Link>

      <Link className="menu-item" to="/pizzas">
        Pizzas
      </Link>

      <Link className="menu-item" to="/desserts">
        Desserts
      </Link>
    </Menu>
  );
};

export default Burger;