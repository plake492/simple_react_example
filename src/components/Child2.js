import React from "react";

export default function Child2({ buttonClick }) {
  return (
    <div>
      <h3>Child 2</h3>
      <button onClick={() => buttonClick("Serop")}>
        coming from child 2: TEST
      </button>
    </div>
  );
}
