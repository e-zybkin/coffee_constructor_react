import React from "react";
import './ChooseBoxItem.css';

function ChooseBoxItem(props) {
  return(
    <div className="content__choose-item">
      <label htmlFor={props.name} className="choose-label">
        <p className="choose-label__icon">{props.icon}</p>
        <p className="choose-label__text">{props.name}</p>
      </label>
      <input
        className="content__flag"
        type="checkbox"
        name="ingredient"
        id={props.name}
        value={props.name}
        checked={props.checkedState[props.index]}
        onChange={() => props.onChange(props.index)}
      />
    </div>
  );
}

export default ChooseBoxItem;
