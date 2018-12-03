import React from "react"

import style from "./css/contatti.module.css"
import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

class contatti extends React.Component {

  render() {
    return (
      <Layout>
        <div className="wrapper">
          <Navbar />
          <div className={`${style.h100} container`}>
            <div className={`row ${style.socialContainer}`}>
            <div className="col">
                <div className={style.social}>
                  <h1>Seguimi:<br />⬇</h1>
                  <a href="https://www.facebook.com/gianluca.ferretti.507"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733603.svg" alt="facebook" /></a>
                  <a href="https://www.instagram.com/gianlucaferretti/"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733614.svg" alt="instagram" /></a>
                  <a href="https://www.youtube.com/user/pazzo10100"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733646.svg" alt="youtube" /></a>
                </div>
              </div>
              <div className={`col ${style.contatti}`}>
                <h1>Info:</h1>
                <ul>
                  <li>Gianluca Ferretti</li>
                  <li><strong>tel.</strong> 346 494 6585</li>
                  <li><strong>email.</strong> g.ferre96@gmail.com</li>
                </ul>
              </div>
              <div className={`col-lg-12`}>
                <h1>Contattami:</h1>
                <form className={`${style.form} container`} action="https://formspree.io/g.ferre96@gmail.com" method="POST">
                  <input className={`${style.text} row`} placeholder="Messaggio" type="text" name="name" />
                  <input className={`${style.text} row`} placeholder="Email" type="email" name="_replyto" />
                  <input className={`${style.submit} row`} type="submit" value="Send" />
                </form>
              </div>
            </div>
            <div className="row">
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
};

export default contatti;
