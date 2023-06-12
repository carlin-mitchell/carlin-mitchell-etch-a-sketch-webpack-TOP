import Button from "../../basic-elements/Button";

const EraseBrushButton = () => {
  const container = Object.assign(document.createElement("div"));

  const button = Object.assign(Button(), {
    id: "erase-brush-button",
    innerText: "Erase",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

export default EraseBrushButton;
