import React from "react";
import ChooseBoxItem from "../ChooseBoxItem/ChooseBoxItem";
import './ChooseBox.css';

function ChooseBox(props) {
  return(
    <section className="content__choose-box">
      {props.boxes.map((box, i) => (
        <ChooseBoxItem
          key={i}
          index={i}
          icon={box.icon}
          name={box.name}
          onChange={props.onChangeBox}
          checkedState={props.checkedState}
        />
      ))}
    </section>
  );
}

export default ChooseBox;
