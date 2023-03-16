import { readFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import { createReadStream } from "node:fs";
import { transformInListOflistOfSomething } from "../../src/input_output/reader.js";

const getListOfCases = async (filePath) => {
  try {
    const listOfCases = await readdirSync(filePath);
    return listOfCases;
  } catch (err) {
    console.log(err.message);
  }
};

const getFileAsStream = async (filePath) => {
  return createReadStream(filePath);
};

const getFileAsString = async (filePath) => {
  return await readFile(filePath, { encoding: "utf-8" });
};

const getFileAsJson = async (filePath) => {
  try {
    const fileAsString = await getFileAsString(filePath);
    const listOfSomething = transformInListOflistOfSomething(fileAsString);

    const result = listOfSomething.map((stringSomething) => {
      return JSON.parse(stringSomething);
    });

    return result;
  } catch (err) {
    console.log(err.message);
  }
};

export { getFileAsJson, getFileAsStream, getListOfCases };
