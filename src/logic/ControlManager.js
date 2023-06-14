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
  return { setGridSize };
})();

export default ControlManager;
