import Button from "../../../basic-elements/Button";

const EraseGridButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign(Button(), {
    id: "erase-grid-button",
    innerText: "Erase grid",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

export default EraseGridButton;
