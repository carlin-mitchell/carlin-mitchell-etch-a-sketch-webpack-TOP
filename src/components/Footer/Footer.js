import GitHubIcon from "./logos/github-mark-white.png";

const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${new Date().getFullYear()}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    className: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: "https://github.com/carlin-mitchell/etch-a-sketch-webpack-TOP",
  });

  const githubIcon = Object.assign(document.createElement("img"), {
    src: GitHubIcon,
  });

  const attributionsLink = Object.assign(document.createElement("div"), {
    className: "attributions-link",
    innerText: `show site attributions`,
    "data-show-attrs": false,
    onclick: function () {
      const attributionsContainer = document.querySelector(
        ".attributions-container"
      );
      if (!this["data-show-attrs"]) {
        attributionsContainer.classList.remove("removed");
        this.innerText = "hide site attributions";
        this["data-show-attrs"] = true;
      } else {
        attributionsContainer.classList.add("removed");
        this.innerText = "show site attributions";
        this["data-show-attrs"] = false;
      }
    },
  });

  footer.appendChild(copyrightContainer);
  copyrightContainer.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  footer.appendChild(topContainer);
  topContainer.appendChild(topLink);

  return footer;
};

export default Footer;
