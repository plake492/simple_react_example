import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function ReciveProps({ userName, newFunction }) {
  return (
    <div>
      <h1>{userName}</h1>
      <Child1 newUserName={userName} />
      <Child2 buttonClick={newFunction} />
    </div>
  );
}

export default ReciveProps;
