import Button from "../../../basic-elements/Button";
import controls from "../../../../logic/ControlManager";

const ToggleGridlinesButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "toggle-gridlines-button",
    innerText: "Toggle gridlines",
    className: "control-input",
    onclick: function () {
      controls.toggleGridlines();
    },
  });

  container.appendChild(button);

  return container;
};

export default ToggleGridlinesButton;
