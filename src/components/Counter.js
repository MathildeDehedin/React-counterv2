import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Counter({ item, index, counterTab, setCounterTab }) {
  return (
    <div className="counter">
      <div className="wrapper">
        {item > 0 ? (
          <button
            className="buttonCounter"
            onClick={() => {
              const newTab = [...counterTab];
              newTab[index]--;
              setCounterTab(newTab);
            }}
          >
            <FontAwesomeIcon icon="minus" />
          </button>
        ) : (
          <div className="without-button"></div>
        )}

        <p className="counterNumber">{item}</p>
        {item < 10 ? (
          <button
            className="buttonCounter"
            onClick={() => {
              const newTab = [...counterTab];
              newTab[index]++;
              setCounterTab(newTab);
            }}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        ) : (
          <div className="without-button"></div>
        )}
      </div>
      <div>
        <button
          className="resetCounter"
          onClick={() => {
            const newTab = [...counterTab];
            newTab[index] = 0;
            setCounterTab(newTab);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
