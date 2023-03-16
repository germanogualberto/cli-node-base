import { expect, it } from "vitest";
import { app } from "../../src/app";
import {
  getFileAsJson,
  getFileAsStream,
  getListOfCases,
} from "../helpers/file_reader";

const TEST_CASES_PATH_DIR = process.env.TEST_CASES_PATH_DIR;
const INPUT_PATH = process.env.INPUT_PATH;
const EXPECTED_PATH = process.env.EXPECTED_PATH;

describe("Running all test cases in the cases folder", async () => {
  const listOfCases = await getListOfCases(TEST_CASES_PATH_DIR);

  it.each(listOfCases)("Running %s", async (testCase) => {
    const inputFilePath = `${TEST_CASES_PATH_DIR}${testCase}${INPUT_PATH}`;
    const expectedFilePath = `${TEST_CASES_PATH_DIR}${testCase}${EXPECTED_PATH}`;
    const inputStream = await getFileAsStream(inputFilePath);
    const expected = await getFileAsJson(expectedFilePath);

    const returnedJson = await app({
      inputStream: inputStream,
      isSilentExecution: true,
    });

    for (let item = 0; item < expected.length; item++) {
      for (let index = 0; index < expected[item].length; index++) {
        expect(returnedJson[item][index].tax).toBeCloseTo(
          expected[item][index].tax
        );
      }
    }
    expect(true).toBeCloseTo(true);
  });
});
