import React from "react";
import './CoffeeCard.css';

function CoffeeCard(props) {
  return(
    <article className="content__card">
      <img
        className="content__card-pic"
        src={props.picture}
        alt={props.title}
      />
      <div className="content__card-info">
        <h2 className="content__card-header">{props.title}</h2>
        <p className="content__card-text">{props.text}</p>
      </div>
    </article>
  );
}

export default CoffeeCard;
