import ColorPicker from "../../../basic-elements/ColorPicker";
import controls from "../../../../logic/ControlManager";

const PaintColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });

  const colorPicker = Object.assign(ColorPicker(), {
    id: "paint-color-picker",
    className: "control-input",
    oninput: function (e) {
      controls.updatePaintColor(e);
    },
  });

  const label = Object.assign(document.createElement("div"), {
    innerText: "Select paint color",
    className: "control-input-label",
  });

  container.appendChild(colorPicker);
  container.appendChild(label);

  return container;
};

export default PaintColorPicker;
