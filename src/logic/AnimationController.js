const AnimationController = () => {
  // github-icon
  Object.assign(document.querySelector(".github-icon"), {
    onmouseover: function () {
      this.style.animation = "github-hover-in 1s forwards";
    },
    onmouseout: function () {
      this.style.animation = "github-hover-out 1s forwards";
    },
  });

  // control-panel
  const controlPanel = document.querySelector("#control-panel-container");
  Object.assign(document.querySelector("#control-icon"), {
    onclick: function () {
      controlPanel.style.animation = "slide-in 1s forwards";
    },
  });
  Object.assign(document.querySelector("#hide-control-panel-icon"), {
    onclick: function () {
      controlPanel.style.animation = "slide-out 1s forwards";
    },
  });
};

export default AnimationController;
