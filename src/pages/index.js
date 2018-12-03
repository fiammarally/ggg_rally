import React from "react"

import Slide from 'react-reveal/Slide';

import "./css/car.css"
import style from "./css/index.module.css"
import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Car from "../components/car/car"

class index extends React.Component {

  render() {
    return (
      <Layout>
        <div className={`container ${style.height100}`}>
          <Navbar />
          <div className="row">
            <div className="col">
              <div className={`${style.title}`}>
                <h1>Gianluca Ferretti</h1>
                <p className="subtitle">Straight roads are for fast cars, turns are for fast drivers ⚡</p>
              </div>
              <Car />
            </div>
          </div>
        </div>
        <Slide left cascade>
          <div className={`container ${style.height100}`}>
            <div className="row">
              <div className={`${style.secondTitle}`}>
                <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                  <h1>Ciao! 🏁</h1>
                  <p className="subtitle">Sono Gianluca Ferretti, ai primi passi della mia “carriera” da pilota.<br/>Faccio parte della Scuderia “Winners Rally Team”. Sono cresciuto dividendomi tra la scuola, gli amici e la mia passione.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${style.height100}`}>
            <div className="row">
              <div className={`${style.secondTitle}`}>
                <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                  <h1>Su di me ⚡</h1>
                  <p className="subtitle"><span>Sono Gianluca Ferretti, vivo a Genova dove sono nato nel 1996, studente universitario alla facoltà di Ingegneria Meccanica, pallanuotista ma con la grande passione delle auto da corsa praticamente dalla nascita.</span></p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Footer />
      </Layout>
    );
  }
};

export default index;
