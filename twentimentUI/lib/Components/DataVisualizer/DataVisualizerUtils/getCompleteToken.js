export function getCompleteToken(tokenIndex, tokens) {
  // const token = tokens[tokenIndex];

  // const getNegation = (currIndex) =>
  //   tokens[currIndex].negation &&
  //   tokens[currIndex - 1] &&
  //   typeof tokens[currIndex - 1].score !== "number" && [
  //     getNegation(currIndex - 1),
  //     tokens[currIndex - 1].value,
  //   ];

  // console.log(tokens);

  // return [getNegation(tokenIndex), token.value]
  //   .flat(Infinity)
  //   .filter(Boolean)
  //   .map((i) => i.toLowerCase())
  //   .join(" ");

  return tokens[tokenIndex].value.toLowerCase();
}
