import canvas from "../../logic/CanvasManager";
import state from "../../logic/StateManager";

const CanvasSquare = (idNum) => {
  const square = Object.assign(document.createElement("div"), {
    id: `canvas-square-${idNum}`,
    className: "canvas-square",
    onmousedown: function (e) {
      canvas.paintCanvasSquare(e);
    },
    onmouseover: function (e) {
      canvas.paintCanvasSquare(e);
    },
  });
  square.style.backgroundColor = state.getCanvasBackgroundColor();
  return square;
};

export default CanvasSquare;
