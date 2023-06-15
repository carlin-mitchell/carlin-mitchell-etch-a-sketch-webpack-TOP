// stylesheets
import "./style.css";

// components
import Content from "./components/App";

// logic managers
import AnimationManager from "./logic/AnimationManager";
import CanvasManager from "./logic/CanvasManager";
import ControlManager from "./logic/ControlManager";
import state from "./logic/StateManager";

import { disableElements } from "./logic/utilities";

document.body.appendChild(Content());

AnimationManager.applyAnimations();
CanvasManager.updateGridSize();
ControlManager.setGridSize(state.getGridSize());

window.onmousedown = function () {
  state.setLeftMouseButtonDown(true);
};

window.ontouchstart = function () {
  state.setLeftMouseButtonDown(true);
};

window.onmouseup = function () {
  state.setLeftMouseButtonDown(false);
};
window.ontouchend = function () {
  state.setLeftMouseButtonDown(false);
};

// disable mode buttons for now
[...document.querySelectorAll(".mode-button")].forEach((element) => {
  const currentText = element.innerText;
  element.innerText = currentText + " (coming soon)";
  element.disabled = true;
});
