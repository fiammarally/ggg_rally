import React from "react"
import { Link } from "gatsby";

import Burger from "./burger"
// import Burger from "../burger/burger"
//! eliminare dipendenza react-burger-menu

import style from "./navbar.module.css"

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      appearStyle: {
        position: 'fixed',
        top: '0',
        right: '0',
        height: '0px',
        width: '0px',
        background: '#333',
        borderRadius: '0 0 0 100%',
        transition: 'height 1s, width 1s',
      },
      fill: false,
    }
    this.appearMenu = this.appearMenu.bind(this);
  }

  appearMenu() {
    console.log(this.state.fill);
    this.setState({
      fill: this.state.fill ? false : true,
    });
  }

  render() {

    return (
      <div id="bar" className={`container ${style.position}`}>
        <div className={`row hidden-xs hidden-sm`}>
          <div className={`col-md-2 text-center ${style.menuItem}`}><Link to="/">HOME</Link></div>
          <div className={`col-md-2 text-center ${style.menuItem}`}><Link to="/news">NEWS</Link></div>
          <div className={`col-md-2 text-center ${style.menuItem}`}><Link to="/sponsor">SPONSOR</Link></div>
          <div className={`col-md-2 text-center offset-4 ${style.menuItem}`}><Link to="/contatti" className={style.contacts}>CONTATTI</Link></div>
        </div>
        <div className="row-fluid hidden-md hidden-lg hidden-xl">
          <div className={`${style.burger}`}>
            <div onClick={() => this.appearMenu()}>
              <Burger />
            </div>
            <div className={this.state.fill ? `${style.fill} ${style.filled}` : `${style.fill}`}>
              <ul className={this.state.fill ? `${style.appearMenu} ${style.visible}` : `${style.appearMenu}`} >
                <li><Link className={`${style.menuItem}`} to="/">HOME</Link></li>
                <li><Link className={`${style.menuItem}`} to="/news">NEWS</Link></li>
                <li><Link className={`${style.menuItem}`} to="/sponsor">SPONSOR</Link></li>
                <li><Link className={`${style.menuItem}`} to="/contatti">CONTATTI</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Navbar;

