const AnimationController = () => {
  // github-icon
  Object.assign(document.querySelector(".github-icon"), {
    onmouseover: function () {
      this.classList.remove("github-hover-out");
      this.classList.add("github-hover-in");
    },
    onmouseout: function () {
      this.classList.remove("github-hover-in");
      this.classList.add("github-hover-out");
    },
  });

  // control-panel
  const controlPanel = document.querySelector("#control-panel-container");
  const slideIn = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.classList.remove("slide-out");
    controlPanel.classList.add("slide-in");
    controlPanel["data-isVisible"] = true;
  };
  const slideOut = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.classList.remove("slide-in");
    controlPanel.classList.add("slide-out");
    controlPanel["data-isVisible"] = false;
  };

  Object.assign(document.querySelector("#control-icon"), {
    onclick: function () {
      slideIn();
    },
  });
  Object.assign(document.querySelector("#hide-control-panel-icon"), {
    onclick: function () {
      slideOut();
    },
  });

  window.onresize = function (e) {
    const { innerWidth } = e.target;
    if (innerWidth <= 1150) {
      slideOut();
    } else {
      if (!controlPanel["data-isVisible"]) {
        slideIn();
      }
    }
  };
};

export default AnimationController;
