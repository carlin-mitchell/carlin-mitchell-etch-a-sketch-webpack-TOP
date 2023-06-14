import Button from "../../../basic-elements/Button";
import controls from "../../../../logic/CanvasManager";

const EraseCanvasButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "erase-grid-button",
    innerText: "Erase grid",
    className: "control-input",
    onclick: function () {
      controls.resetCanvas();
    },
  });

  container.appendChild(button);

  return container;
};

export default EraseCanvasButton;
