import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Remove from "./components/Remove";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

function App() {
  const [counterTab, setCounterTab] = useState([0]);
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          {counterTab.length < 3 && (
            <button
              className="addCounter"
              onClick={() => {
                if (counterTab.length < 3) {
                  let newTab = [...counterTab];
                  newTab.push(0);
                  setCounterTab(newTab);
                }
              }}
            >
              Add counter
            </button>
          )}
        </section>

        <section>
          {counterTab.map((item, index) => {
            return (
              <Counter
                item={item}
                key={index}
                index={index}
                counterTab={counterTab}
                setCounterTab={setCounterTab}
              />
            );
          })}
        </section>
      </main>
      <Remove counterTab={counterTab} setCounterTab={setCounterTab} />
      <Footer />
    </div>
  );
}

export default App;
