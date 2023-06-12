//Component imports
import PaintColorPicker from "./color-pickers/PaintColorPicker";
import CanvasColorPicker from "./color-pickers/CanvasColorPicker";

import EraseBrushButton from "./buttons/EraseBrushButton";
import EraseGridButton from "./buttons/EraseGridButton";
import ToggleGridlinesButton from "./buttons/ToggleGridlinesButton";
import RainbowModeButton from "./buttons/RainbowModeButton";
import ShadeModeButton from "./buttons/ShadeModeButton";

const ControlPanel = () => {
  const panelContainer = Object.assign(document.createElement("div"), {
    className: "control-panel-container",
  });

  panelContainer.appendChild(PaintColorPicker());
  panelContainer.appendChild(CanvasColorPicker());
  panelContainer.appendChild(EraseBrushButton());
  panelContainer.appendChild(EraseGridButton());
  panelContainer.appendChild(ToggleGridlinesButton());
  panelContainer.appendChild(RainbowModeButton());
  panelContainer.appendChild(ShadeModeButton());

  return panelContainer;
};

export default ControlPanel;
