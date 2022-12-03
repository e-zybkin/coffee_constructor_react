import React from "react";
import Header from '../Header/Header';
import ChooseBox from '../ChooseBox/ChooseBox';
import CoffeeCardList from '../CoffeeCardList/CoffeeCardList';
import './Main.css';

function Main(props) {
  return(
    <>
      <Header />
      <main>
        <ChooseBox
          boxes={props.boxes}
          onChangeBox={props.onChangeBox}
          checkedState={props.checkedState}
        />
        <CoffeeCardList
          cards={props.cards}
        />
      </main>
    </>
  );
}

export default Main;
