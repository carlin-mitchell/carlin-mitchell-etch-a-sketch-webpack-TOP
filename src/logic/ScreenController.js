const ScreenController = (() => {
  const showControlPanel = function () {
    const controlPanel = document.querySelector(".control-panel-container");
    controlPanel.style.display = "inline-block";
  };
  return { showControlPanel };
})();

export default ScreenController;
