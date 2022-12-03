import React from "react";
import './Main.css';
import Header from '../Header/Header';
import ChooseBox from '../ChooseBox/ChooseBox';
import CoffeeCardList from '../CoffeeCardList/CoffeeCardList';

function Main(props) {
  return(
    <>
      <Header />
      <main>
        <ChooseBox />
        <CoffeeCardList
          cards={props.cards}
        />
      </main>
    </>
  );
}

export default Main;
