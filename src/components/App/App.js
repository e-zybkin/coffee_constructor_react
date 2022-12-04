import React from 'react';
import Main from '../Main/Main';
import coffeeType from "../../utils/cofee.json";
import { initialCheckBoxes } from '../../utils/constants/constants';
import './App.css';

function App() {
  const [cards, setCards] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isBoxCheck, setIsBoxCheck] = React.useState(
    new Array(initialCheckBoxes.length).fill(false)
  );
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      let testAnother = [];

      coffeeType.forEach((item, i) => {
        if(components.length > 0) {
          if(components.every( e => item.ingredients.includes(e))) {
            testAnother = arrayUnique(testAnother.concat(item.ingredients))
          }

          initialCheckBoxes.forEach((anotherItem, index) => {
            if(testAnother.includes(anotherItem.name)){
              anotherItem.status = false;
            } else {
              anotherItem.status = true;
            }
          })
        } else if (components.length === 0) {
          initialCheckBoxes.forEach((anotherItem, index) => {
            if(item.ingredients.includes(anotherItem.name) === false){
              anotherItem.status = false;
            }
          })
        }
      })

    let test = [];
    coffeeType.forEach((item) => {
      if(components.every( e => item.ingredients.includes(e))) {
        if(components.length === item.ingredients.length){
          test.push(item)
        }
      }
    });
    setCards(cards.concat(test));
  } else {
    isMounted.current = true;
  }

  },[components])

  function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
  }

  const handleOnChange = (position) => {
    const updatedIsBoxCheck = isBoxCheck.map((item, i) =>
      i === position ? !item : item
    );
    setIsBoxCheck(updatedIsBoxCheck);

    if(updatedIsBoxCheck[position] === true) {
      const initElement = (element) => element === initialCheckBoxes[position].name;
      if(components.findIndex(initElement) < 0){
        setComponents([...components, initialCheckBoxes[position].name]);
      }
      setCards([]);
    } else if (updatedIsBoxCheck[position] === false){
      const delElement = (element) => element === initialCheckBoxes[position].name;
      if(components.findIndex(delElement) >= 0) {
        setComponents((state) => state.filter((c) => c !== initialCheckBoxes[position].name));
      }
      setCards([])
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
