import state from "../logic/StateManager";

const ControlManager = () => {
  //grid-size
  const gridSizeSelector = document.querySelector("#grid-size-selector");
  const gridSizeSelectorLabel = document.querySelector(
    "#grid-size-selector-label"
  );
  gridSizeSelector.oninput = function (e) {
    const value = e.target.value;
  };
};

export default ControlManager;
