const HelloWorld = (content) => {
  const h1 = Object.assign(document.createElement("h1"), {
    className: "hello-world",
    innerText: `${content}`,
  });

  return h1;
};

export default HelloWorld;
