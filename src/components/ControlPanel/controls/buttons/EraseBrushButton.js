import Button from "../../../basic-elements/Button";
import controls from "../../../../logic/ControlManager";

const EraseBrushButton = () => {
  const container = Object.assign(document.createElement("div"));

  const button = Object.assign(Button(), {
    id: "erase-brush-button",
    innerText: "Erase",
    className: "control-input",
    onclick: function () {
      controls.setPaintColorToErase();
    },
  });

  container.appendChild(button);

  return container;
};

export default EraseBrushButton;
