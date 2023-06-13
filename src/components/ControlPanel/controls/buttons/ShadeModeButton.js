import Button from "../../../basic-elements/Button";

const ShadeModeButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "shade-mode-button",
    innerText: "Shade mode",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

export default ShadeModeButton;
