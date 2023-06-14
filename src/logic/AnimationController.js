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
  const slideIn = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.animation = "slide-in .75s forwards";
    controlPanel["data-isVisible"] = true;
  };
  const slideOut = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.animation = "slide-out .75s forwards";
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
    console.log(controlPanel["data-isVisible"]);
  };
};

export default AnimationController;
