import state from "./StateManager";

import CanvasSquare from "../components/CanvasSection/CanvasSquare";

const CanvasManager = (() => {
  function clearGrid() {
    const canvas = document.querySelector("#canvas");
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
  }

  function updateGridSize() {
    const gridSize = state.getGridSize();
    const totalSquares = gridSize ** 2;
    const canvas = document.querySelector("#canvas");

    clearGrid();

    canvas.style["grid-template-rows"] = `repeat(${gridSize}, 1fr)`;
    canvas.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

    for (let id = 1; id <= totalSquares; id++) {
      const square = Object.assign(CanvasSquare(id), {});
      canvas.appendChild(square);
    }
  }

  return { updateGridSize };
})();

export default CanvasManager;
