const Header = () => {
  const header = Object.assign(document.createElement("header", {}));

  const title = Object.assign(document.createElement("div"), {
    innerText: "Pixel Artist",
  });

  header.appendChild(title);

  return header;
};

export default Header;
