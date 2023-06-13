const ScreenController = (() => {
  const showControlPanel = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.display = "grid";
  };

  const hideControlPanel = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.display = "none";
  };

  return { showControlPanel, hideControlPanel };
})();

export default ScreenController;
