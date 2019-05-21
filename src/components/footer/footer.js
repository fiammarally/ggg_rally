import React from "react"

import style from "./footer.module.css"

const Footer = () => {
  return (
    <div className={`container-fluid ${style.footer}`}>
      <div className={`container ${style.border}`}>
        <div className="row">
          <div className="col">
            <div className={`${style.box}`}>
              <div className={style.info}>
                <p>Gianluca Ferretti</p>
                <p><strong><a to="mailto:g.ferre96@gmail.com">g.ferre96@gmail.com</a></strong></p>
              </div>
              <div className={style.social}>
                <a href="https://www.facebook.com/gianluca.ferretti.507"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733603.svg" alt="facebook" /></a>
                <a href="https://www.instagram.com/gianlucaferretti/"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733614.svg" alt="instagram" /></a>
                <a href="https://www.youtube.com/user/pazzo10100"><img className={`${style.socialImage}`} src="https://image.flaticon.com/icons/svg/733/733646.svg" alt="youtube" /></a>
                <p>⇧<br/>(seguimi)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;