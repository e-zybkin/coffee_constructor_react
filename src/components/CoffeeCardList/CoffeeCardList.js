import React from "react";
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import './CoffeeCardList.css';

function CoffeeCardList(props) {
  return(
    <section className="content__card-place">
      {props.cards.map((card, i) => (
        <CoffeeCard
          key={card.id}
          card={card}
          picture={card.image}
          title={card.title}
          text={card.description}
        />
      ))}
    </section>
  );
}

export default CoffeeCardList;
