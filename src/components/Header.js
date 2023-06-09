const Header = () => {
  const header = Object.assign(document.createElement("header", {}));

  const title = Object.assign(document.createElement("div"), {
    innerText: "Etch-A-Sketch",
  });

  header.appendChild(title);

  return header;
};

export default Header;
