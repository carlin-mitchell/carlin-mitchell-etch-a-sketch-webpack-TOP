import Range from "../../basic-elements/Range";

import state from "../../../logic/StateManager";

const GridSizeSelector = () => {
  let currentGridSize = state.getGridSize();

  const container = Object.assign(
    document.createElement("div", { className: "control-input-group" })
  );

  const range = Object.assign(Range(), {
    id: "grid-size-selector",
    className: "control-input",
  });

  const label = Object.assign(document.createElement("div"), {
    id: "grid-size-selector-label",
    innerText: `Grid size: ${currentGridSize} x ${currentGridSize}`,
    className: "control-input-label",
  });

  container.appendChild(range);
  container.appendChild(label);

  return container;
};

export default GridSizeSelector;
