import config from "./appConfig";

const StateManager = (() => {
  let gridSize = config.startingGridSize;
  const getGridSize = () => gridSize;
  const setGridSize = (value) => (gridSize = value);

  let canvasBackgroundColor = "#f2f2f2";
  const getCanvasBackgroundColor = () => canvasBackgroundColor;
  const setCanvasBackgroundColor = (color) => (canvasBackgroundColor = color);

  let paintColor = "#000";
  const getPaintColor = () => paintColor;
  const setPaintColor = (color) => (paintColor = color);

  let leftMouseButtonDown = false;
  const getLeftMouseButtonDown = () => leftMouseButtonDown;
  const setLeftMouseButtonDown = (value) => (leftMouseButtonDown = value);

  let gridlinesToggledOn = true;
  // console.log(gridlinesToggledOn);
  const getGridlinesToggledOn = () => gridlinesToggledOn;
  const setGridlinesToggleOn = (value) => (gridlinesToggledOn = value);

  return {
    getLeftMouseButtonDown,
    setLeftMouseButtonDown,

    getGridSize,
    setGridSize,

    getCanvasBackgroundColor,
    setCanvasBackgroundColor,

    setPaintColor,
    getPaintColor,

    getGridlinesToggledOn,
    setGridlinesToggleOn,
  };
})();

export default StateManager;
