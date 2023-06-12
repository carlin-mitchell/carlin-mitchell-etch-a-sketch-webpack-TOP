const Grid = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "grid-container",
  });

  const grid = Object.assign(document.createElement("div"), { id: "grid" });

  container.appendChild(grid);

  return container;
};

export default Grid;
