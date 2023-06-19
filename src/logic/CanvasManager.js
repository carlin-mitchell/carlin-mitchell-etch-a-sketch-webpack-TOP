import state from "./StateManager";
import { hexToRgbStr, setElementsBgColor } from "./utilities";

import CanvasSquare from "../components/CanvasSection/CanvasSquare";

const CanvasManager = (() => {
  function clearGrid() {
    const canvas = document.querySelector("#canvas");
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
  }

  function paintCanvasSquare(e) {
    if (
      e.type === "mousedown" ||
      e.type === "touchstart" ||
      state.getLeftMouseButtonDown()
    ) {
      const square = e.target;
      square.style.backgroundColor = state.getPaintColor();
    }
  }

  function resetCanvas() {
    const canvasSquares = [...document.querySelectorAll(".canvas-square")];

    setElementsBgColor(
      canvasSquares,
      hexToRgbStr(state.getCanvasBackgroundColor())
    );
  }

  function toggleGridlines() {
    const canvasSquares = [...document.querySelectorAll(".canvas-square")];
    const canvas = document.querySelector("#canvas");

    if (state.getGridlinesToggledOn()) {
      canvas.classList.add("full-borders");
      canvasSquares.forEach((square) => square.classList.add("no-borders"));
      state.setGridlinesToggleOn(false);
    } else {
      state.setGridlinesToggleOn(true);
      canvas.classList.remove("full-borders");
      canvasSquares.forEach((square) => square.classList.remove("no-borders"));
    }
  }

  function updateGridSize() {
    const gridSize = state.getGridSize();
    const totalSquares = gridSize ** 2;
    const canvas = document.querySelector("#canvas");

    // clear the gird and ensure that gridlines are toggled on
    clearGrid();
    if (state.getGridlinesToggledOn() === false) {
      toggleGridlines();
    }

    canvas.style["grid-template-rows"] = `repeat(${gridSize}, 1fr)`;
    canvas.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

    for (let idNum = 1; idNum <= totalSquares; idNum++) {
      const square = CanvasSquare(idNum);
      canvas.appendChild(square);
    }
  }

  return { updateGridSize, paintCanvasSquare, resetCanvas, toggleGridlines };
})();

export default CanvasManager;
