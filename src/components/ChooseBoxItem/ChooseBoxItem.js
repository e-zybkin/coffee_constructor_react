import React from "react";
import './ChooseBoxItem.css';

function ChooseBoxItem(props) {
  return(
    <div className="content__choose-item">
      <label htmlFor="coffee" className="choose-label">
        <p className="choose-label__icon">Co</p>
        <p className="choose-label__text">Coffee</p>
      </label>
      <input
        className="content__flag"
        type="checkbox"
        name="ingredient"
        id="coffee"
        value="Coffee"
      />
    </div>
  );
}

export default ChooseBoxItem;
