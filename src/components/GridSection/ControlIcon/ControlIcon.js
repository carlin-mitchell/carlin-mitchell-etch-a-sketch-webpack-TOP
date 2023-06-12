import screen from "../../../logic/ScreenController";

import ControlIconPath from "./icons/controls.png";

const ControlIcon = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-icon-container",
  });
  const icon = Object.assign(document.createElement("img"), {
    id: "control-icon",
    src: ControlIconPath,
    onclick: function () {
      //   screen.showControlPanel();
    },
  });
  container.appendChild(icon);
  return container;
};

export default ControlIcon;
