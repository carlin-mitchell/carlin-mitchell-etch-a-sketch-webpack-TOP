//Component imports
import PaintColorPicker from "./color-pickers/PaintColorPicker";
import CanvasColorPicker from "./color-pickers/CanvasColorPicker";

const ControlPanel = () => {
  const panelContainer = Object.assign(document.createElement("div"), {
    className: "control-panel-container",
  });

  panelContainer.appendChild(PaintColorPicker());
  panelContainer.appendChild(CanvasColorPicker());

  return panelContainer;
};

export default ControlPanel;
