//Component imports
import ExitDiv from "./controls/ExitDiv/ExitDiv";

import PaintColorPicker from "./controls/color-pickers/PaintColorPicker";
import CanvasColorPicker from "./controls/color-pickers/CanvasColorPicker";

import EraseBrushButton from "./controls/buttons/EraseBrushButton";
import EraseCanvasButton from "./controls/buttons/EraseCanvasButton";
import ToggleGridlinesButton from "./controls/buttons/ToggleGridlinesButton";
import RainbowModeButton from "./controls/buttons/RainbowModeButton";
import ShadeModeButton from "./controls/buttons/ShadeModeButton";

import GridSizeSelector from "./controls/GridSizeSelector";

const ControlPanel = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-container",
    "data-isVisible": true,
  });

  container.appendChild(ExitDiv());
  container.appendChild(PaintColorPicker());
  container.appendChild(CanvasColorPicker());
  container.appendChild(EraseBrushButton());
  container.appendChild(EraseCanvasButton());
  container.appendChild(ToggleGridlinesButton());
  container.appendChild(RainbowModeButton());
  container.appendChild(ShadeModeButton());
  container.appendChild(GridSizeSelector());

  return container;
};

export default ControlPanel;
