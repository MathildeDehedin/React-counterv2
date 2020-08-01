import React from "react";
const Remove = ({ counterTab, setCounterTab }) => {
  return (
    <div className="essai">
      {counterTab <= 0 ? null : (
        <button
          className="removeCounter"
          onClick={() => {
            const newTab = [...counterTab];
            newTab.pop();
            setCounterTab(newTab);
          }}
        >
          Remove counter
        </button>
      )}
    </div>
  );
};
export default Remove;
