import Range from "../../basic-elements/Range";

const GridSizeSelector = () => {
  const currentGridSize = 0;

  const container = Object.assign(
    document.createElement("div", { className: "control-input-group" })
  );

  const range = Object.assign(Range(), { className: "control-input" });

  const label = Object.assign(document.createElement("div"), {
    innerText: `Grid size: ${currentGridSize} x ${currentGridSize}`,
    className: "control-input-label",
  });

  container.appendChild(range);
  container.appendChild(label);

  return container;
};

export default GridSizeSelector;
