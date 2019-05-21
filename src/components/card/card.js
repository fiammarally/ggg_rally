import React from "react"
import { Link } from "gatsby";

import style from "./card.module.css"

const Card = (props) => {
  return (
    <div className={`col-lg-6`}>
      <div className={`${style.card}`} >
        <Link to={props.path}>
          {(props.img) ? (
            <div
              className={`${style.postImage}`}
              style={{ backgroundImage: `url(https://${props.img.fields.file.url})` }}>
            </div>
          ) : null}
          <h1>{`${props.title}`}</h1>
        </Link>
      </div>
    </div>
  );
}

export default Card;