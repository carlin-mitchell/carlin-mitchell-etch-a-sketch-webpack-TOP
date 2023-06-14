import state from "../logic/StateManager";
import canvas from "../logic/CanvasManager";

const ControlManager = (() => {
  function setGridSize(value) {
    const gridSizeSelectorLabel = document.querySelector(
      "#grid-size-selector-label"
    );
    state.setGridSize(value);
    gridSizeSelectorLabel.innerText = `Grid size: ${state.getGridSize()} x ${state.getGridSize()}`;
    canvas.updateGridSize();
  }

  function setPaintColor(e) {
    const color = e.target.value;
    state.setPaintColor(color);
  }

  function eraseGrid() {
    canvas.resetCanvas();
  }

  function setCanvasColor(e) {
    const color = e.target.value;
    state.setCanvasBackgroundColor(color);
    canvas.resetCanvas();
  }

  return { setGridSize, setPaintColor, eraseGrid, setCanvasColor };
})();

export default ControlManager;
