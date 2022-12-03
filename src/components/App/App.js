import React from 'react';
import Main from '../Main/Main';
import coffeeType from "../../utils/cofee.json";
import './App.css';

function App() {
  const [cards, setCards] = React.useState([]);

  function handleCheckBoxClick() {
    
  }

  return (
    <div className="page">
      <div className='wrapper'>
        <Main
          cards={cards}
        />
      </div>
    </div>
  );
}

export default App;
