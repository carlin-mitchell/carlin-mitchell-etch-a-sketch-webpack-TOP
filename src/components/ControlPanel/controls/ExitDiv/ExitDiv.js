import HideIcon from "./icons/eye-hide.png";

import screen from "../../../../logic/ScreenController";

const ExitDiv = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-exit-container",
  });

  const icon = Object.assign(document.createElement("img"), {
    id: "hide-control-panel-icon",
    src: HideIcon,
    onclick: function () {
      screen.hideControlPanel();
    },
  });

  container.appendChild(icon);

  return container;
};

export default ExitDiv;
