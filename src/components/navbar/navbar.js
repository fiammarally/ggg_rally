import React from "react"

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
          <div className={`col-md-2 text-center ${style.menuItem}`}><a href="/">HOME</a></div>
          <div className={`col-md-2 text-center ${style.menuItem}`}><a href="/news">NEWS</a></div>
          <div className={`col-md-2 text-center ${style.menuItem}`}><a href="/sponsor">SPONSOR</a></div>
          <div className={`col-md-2 text-center offset-4 ${style.menuItem}`}><a href="/contatti" className={style.contacts}>CONTATTI</a></div>
        </div>
        <div className="row-fluid hidden-md hidden-lg hidden-xl">
          <div className={`${style.burger}`}>
            <div onClick={() => this.appearMenu()}>
              <Burger />
            </div>
            <div className={this.state.fill ? `${style.fill} ${style.filled}` : `${style.fill}`}>
              <ul className={this.state.fill ? `${style.appearMenu} ${style.visible}` : `${style.appearMenu}`} >
                <li><a className={`${style.menuItem}`} href="/">HOME</a></li>
                <li><a className={`${style.menuItem}`} href="/news">NEWS</a></li>
                <li><a className={`${style.menuItem}`} href="/sponsor">SPONSOR</a></li>
                <li><a className={`${style.menuItem}`} href="/contatti">CONTATTI</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Navbar;

