import React from "react";

export default function Child1({ newUserName }) {
  return (
    <div>
      <h3>Child 1</h3>
      <div>This one is in child 1: {newUserName}</div>
    </div>
  );
}
