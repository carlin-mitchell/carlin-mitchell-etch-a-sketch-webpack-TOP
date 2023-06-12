import ColorPicker from "../../basic-elements/ColorPicker";
import Label from "../../basic-elements/Label";

const CanvasColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });
  const colorPicker = Object.assign(ColorPicker(), {
    id: "canvas-color-picker",
    className: "control-input",
  });

  const label = Object.assign(document.createElement("div"), {
    innerText: "Select canvas color",
    className: "control-input-label",
  });

  container.appendChild(colorPicker);
  container.appendChild(label);

  return container;
};

export default CanvasColorPicker;
