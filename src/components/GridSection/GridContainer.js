import ControlIcon from "./ControlIcon/ControlIcon";

const GridContainer = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "grid-container",
  });

  const grid = Object.assign(document.createElement("div"), { id: "grid" });

  container.appendChild(ControlIcon());
  container.appendChild(grid);

  return container;
};

export default GridContainer;
