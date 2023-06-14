const StateManager = (() => {
  const gridSize = 64;
  const getGridSize = () => gridSize;

  const setGridSize = (value) => (gridSize = value);

  return { getGridSize, setGridSize };
})();

export default StateManager;
