//Component imports
import ExitDiv from "./ExitDiv/ExitDiv";

import PaintColorPicker from "./color-pickers/PaintColorPicker";
import CanvasColorPicker from "./color-pickers/CanvasColorPicker";

import EraseBrushButton from "./buttons/EraseBrushButton";
import EraseGridButton from "./buttons/EraseGridButton";
import ToggleGridlinesButton from "./buttons/ToggleGridlinesButton";
import RainbowModeButton from "./buttons/RainbowModeButton";
import ShadeModeButton from "./buttons/ShadeModeButton";

const ControlPanel = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-container",
  });

  container.appendChild(ExitDiv());
  container.appendChild(PaintColorPicker());
  container.appendChild(CanvasColorPicker());
  container.appendChild(EraseBrushButton());
  container.appendChild(EraseGridButton());
  container.appendChild(ToggleGridlinesButton());
  container.appendChild(RainbowModeButton());
  container.appendChild(ShadeModeButton());

  return container;
};

export default ControlPanel;
