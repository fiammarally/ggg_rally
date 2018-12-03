import React from "react"

import style from "./card.module.css"

const Card = (props) => {
  return (
    <div className={`col-lg-6`}>
      <div className={`${style.card}`} >
        <a href={props.path}>
          {(props.img) ? (
            <div
              className={`${style.postImage}`}
              style={{ backgroundImage: `url(https://${props.img.fields.file.url})` }}>
            </div>
          ) : null}
          <h1>{`${props.title}`}</h1>
        </a>
      </div>
    </div>
  );
}

export default Card;