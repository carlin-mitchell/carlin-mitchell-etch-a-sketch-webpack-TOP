import Button from "../../basic-elements/Button";

const RainbowModeButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "rainbow-mode-button",
    innerText: "Rainbow mode",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

export default RainbowModeButton;
