const parseIdOrClassStrings = (strings) => {
  const returnObj = {};
  strings.forEach((string) => {
    string[0] === "#"
      ? (returnObj.id = string.slice(1))
      : string[0] === "."
      ? (returnObj.className = string.slice(1))
      : returnObj;
  });

  return returnObj;
};
