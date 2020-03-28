import React, { useState } from "react";
import "./App.css";

import ReciveProps from "./components/ReciveProps";

function App() {
  const [name, setName] = useState("Patrick");

  function changeInOtherComponent(x) {
    setName(x);
  }

  return (
    <div>
      <ReciveProps userName={name} newFunction={changeInOtherComponent} />
    </div>
  );
}

export default App;
