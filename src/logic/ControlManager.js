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

  function updatePaintColor(e) {
    const color = e.target.value;
    state.setPaintColor(color);
  }

  function eraseGrid() {}

  return { setGridSize, updatePaintColor };
})();

export default ControlManager;
