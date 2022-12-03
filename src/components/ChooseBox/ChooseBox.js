import React from "react";
import './ChooseBox.css';

function ChooseBox() {


  return(
    <section className="content__choose-box">
      <div className="content__choose-column">
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

        <div className="content__choose-item">
          <label htmlFor="fozes" className="choose-label">
            <p className="choose-label__icon">1E</p>
            <p className="choose-label__text">1oz Espresso</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredien"
            id="fozes"
            value="1oz Espresso"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="fmilk" className="choose-label">
            <p className="choose-label__icon">Fo</p>
            <p className="choose-label__text">Foamed milk</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="fmilk"
            value="Foamed milk"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="icecream" className="choose-label">
            <p className="choose-label__icon">Ic</p>
            <p className="choose-label__text">Ice cream</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="icecream"
            value="Ice cream"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="cream" className="choose-label">
            <p className="choose-label__icon">Cr</p>
            <p className="choose-label__text">Cream</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="cream"
            value="Cream"
          />
        </div>
      </div>

      <div className="content__choose-column">
        <div className="content__choose-item">
          <label htmlFor="espresso" className="choose-label">
            <p className="choose-label__icon">Es</p>
            <p className="choose-label__text">Espresso</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="espresso"
            value="Espresso"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="sozes" className="choose-label">
            <p className="choose-label__icon">2E</p>
            <p className="choose-label__text">2oz Espresso</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="sozes"
            value="2oz Espresso"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="traditional" className="choose-label">
            <p className="choose-label__icon">Tr</p>
            <p className="choose-label__text">Traditional</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="traditional"
            value="Traditional"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="sweet" className="choose-label">
            <p className="choose-label__icon">Sw</p>
            <p className="choose-label__text">Sweet</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="sweet"
            value="Sweet"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="panela" className="choose-label">
            <p className="choose-label__icon">Pa</p>
            <p className="choose-label__text">Panela</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="panela"
            value="Panela"
          />
        </div>
      </div>

      <div className="content__choose-column">
        <div className="content__choose-item">
          <label htmlFor="smilk" className="choose-label">
            <p className="choose-label__icon">St</p>
            <p className="choose-label__text">Steamed Milk</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="smilk"
            value="Steamed Milk"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="lpea" className="choose-label">
            <p className="choose-label__icon">Lo</p>
            <p className="choose-label__text">Long pulled espresso</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="lpes"
            value="Long pulled espresso"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="chocolate" className="choose-label">
            <p className="choose-label__icon">Ch</p>
            <p className="choose-label__text">Chocolate</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="chocolate"
            value="Chocolate"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="sugar" className="choose-label">
            <p className="choose-label__icon">Su</p>
            <p className="choose-label__text">Sugar</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="sugar"
            value="Sugar"
          />
        </div>
      </div>

      <div className="content__choose-column">
        <div className="content__choose-item">
          <label htmlFor="hwater" className="choose-label">
            <p className="choose-label__icon">Hw</p>
            <p className="choose-label__text">Hot Water</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="hwater"
            value="Hot Water"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="htmlForzsm" className="choose-label">
            <p className="choose-label__icon">1S</p>
            <p className="choose-label__text">1oz Steamed Milk</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="fozsm"
            value="1oz Steamed Milk"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="spes" className="choose-label">
            <p className="choose-label__icon">Sh</p>
            <p className="choose-label__text">Short pulled espresso</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="spes"
            value="Short pulled espresso"
          />
        </div>

        <div className="content__choose-item">
          <label htmlFor="whiskey" className="choose-label">
            <p className="choose-label__icon">Wh</p>
            <p className="choose-label__text">Whiskey</p>
          </label>
          <input
            className="content__flag"
            type="checkbox"
            name="ingredient"
            id="whiskey"
            value="Whiskey"
          />
        </div>
      </div>
    </section>
  );
}

export default ChooseBox;
