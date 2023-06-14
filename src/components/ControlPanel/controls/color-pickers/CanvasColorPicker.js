import ColorPicker from "../../../basic-elements/ColorPicker";
import state from "../../../../logic/StateManager";
import controls from "../../../../logic/ControlManager";

const CanvasColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });
  const colorPicker = Object.assign(ColorPicker(), {
    id: "canvas-color-picker",
    className: "control-input",
    value: state.getCanvasBackgroundColor(),
    oninput: function (e) {
      controls.setCanvasColor(e);
    },
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
