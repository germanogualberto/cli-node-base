import { createInterface } from "node:readline/promises";

const replaceDashesInString = (stringSomething) => {
  return stringSomething.replaceAll("-", "_");
};

const readStreamLines = async (inputStream) => {
  const linesStream = createInterface({
    input: inputStream,
  });

  let stringSomething = "";
  for await (const line of linesStream) {
    if (line === "") break;
    stringSomething = stringSomething.concat(line);
  }
  linesStream.close();

  stringSomething = replaceDashesInString(stringSomething);

  const listOfStringSomething = transformInListOfSomething(
    stringSomething
  );

  return listOfStringSomething;
};

const transformInListOfSomething = (stringSomething) => {
  const closingBrackets = "]";
  const listOfSomething = stringSomething.split(closingBrackets);
  const listOfStringSomething = listOfSomething.map(
    (something) => {
      return something.concat(closingBrackets);
    }
  );
  listOfStringSomething.pop();

  return listOfStringSomething;
};

/**
 * Read the input from the given inputStream
 * @param {*} inputStream The stream to read
 * @returns A list
 */
const readInput = async (inputStream) => {
  const listOfstringSomething = await readStreamLines(inputStream);

  const listOfJsonSomething = listOfstringSomething.map(
    (stringSomething) => {
      return JSON.parse(stringSomething);
    }
  );

  return listOfJsonSomething;
};

export { readInput, transformInListOfSomething };
