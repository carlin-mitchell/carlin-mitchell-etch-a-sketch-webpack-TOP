import Button from "../../../basic-elements/Button";
import canvas from "../../../../logic/CanvasManager";

const EraseCanvasButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "erase-grid-button",
    innerText: "Erase grid",
    className: "control-input",
    onclick: function () {
      canvas.eraseCanvas();
    },
  });

  container.appendChild(button);

  return container;
};

export default EraseCanvasButton;
