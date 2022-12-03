import React, { useState } from 'react';
import Main from '../Main/Main';
import coffeeType from "../../utils/cofee.json";
import { initialCheckBoxes } from '../../utils/constants/constants';
import './App.css';

function App() {
  const [cards, setCards] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isBoxCheck, setIsBoxCheck] = useState(
    new Array(initialCheckBoxes.length).fill(false)
  );

  /*
    нужно создать useEffect, который будет реагировать на handleOnChange и менять cards
    придумать алгоритм, запрещающий использовать ингридиенты, не дающие комбинаций
  */

  const handleOnChange = (position) => {
    const updatedIsBoxCheck = isBoxCheck.map((item, i) =>
      i === position ? !item : item
    );
    setIsBoxCheck(updatedIsBoxCheck);

    if(updatedIsBoxCheck[position] === true) {
      const initElement = (element) => element == initialCheckBoxes[position].name;
      if(components.findIndex(initElement) < 0){
        components.push(initialCheckBoxes[position].name)
        console.log(components)
      }

      cards.length = 0;

      coffeeType.forEach((item) => {
        let isEqual = JSON.stringify(item.ingredients) === JSON.stringify(components);
        if(isEqual) {
          cards.push(item)
        }
      });

    } else if (updatedIsBoxCheck[position] === false){
      const delElement = (element) => element == initialCheckBoxes[position].name;
      if(components.findIndex(delElement) >= 0) {
        components.splice(components.findIndex(delElement), 1);
        console.log(components)
      }

      cards.length = 0;

      coffeeType.forEach((item) => {
        let isEqual = JSON.stringify(item.ingredients) === JSON.stringify(components);
        if(isEqual) {
          cards.push(item)
        }
      });
    }
  }

  return (
    <div className="page">
      <div className='wrapper'>
        <Main
          cards={cards}
          boxes={initialCheckBoxes}
          onChangeBox={handleOnChange}
          checkedState={isBoxCheck}
        />
      </div>
    </div>
  );
}

export default App;
