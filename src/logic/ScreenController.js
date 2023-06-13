const ScreenController = (() => {
  // CONTROL PANEL
  const showControlPanel = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.display = "grid";
  };

  const hideControlPanel = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.display = "none";
  };

  // window.onresize = function (e) {
  //   const screenWidth = e.target.outerWidth;
  //   if (screenWidth <= 1000) {
  //     showControlPanel();
  //   }
  // };

  return { showControlPanel, hideControlPanel };
})();

export default ScreenController;
