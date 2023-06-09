const AnimationController = () => {
  // github-icon
  const githubIcon = document.querySelector(".github-icon");
  githubIcon.onmouseover = function () {
    this.style.animation = "github-hover-in 1s forwards";
  };
  githubIcon.onmouseout = function () {
    this.style.animation = "github-hover-out 1s forwards";
  };
};

export default AnimationController;
